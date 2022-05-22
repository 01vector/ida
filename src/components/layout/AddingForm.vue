<template>
    <Card class="form">
        <form @keyup.enter="pushProduct({ title, img, price, description })">
            <Align column horizontal="left">
                <Input
                    v-model="title"
                    :invalid="titleInvalid"
                    :placeholder="i18n.inputs.productName.placeholder"
                    :label="i18n.inputs.productName.label"
                    @inputValue="(value) => (title = value)"
                    class="input-field"
                    badge
                />
                <Input
                    v-model="description"
                    :placeholder="i18n.inputs.productDescription.placeholder"
                    :label="i18n.inputs.productDescription.label"
                    @inputValue="(value) => (description = value)"
                    type="big"
                    class="input-field"
                />
                <Input
                    v-model="img"
                    :invalid="imgInvalid"
                    :placeholder="i18n.inputs.productImgLink.placeholder"
                    :label="i18n.inputs.productImgLink.label"
                    @inputValue="(value) => (img = value)"
                    class="input-field"
                    badge
                />
                <Input
                    v-model="price"
                    :invalid="priceInvalid"
                    :formatter="priceFormatter"
                    :placeholder="i18n.inputs.productPrice.placeholder"
                    :label="i18n.inputs.productPrice.placeholder"
                    @inputValue="(value) => (price = value)"
                    class="input-field"
                    badge
                />
                <Button
                    :label="i18n.buttons.addProduct.label"
                    :enabled="buttonEnabled"
                    @click="
                        pushProduct({
                            title,
                            img,
                            price,
                            description
                        })
                    "
                    class="button"
                />
            </Align>
        </form>
    </Card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapGetters } from 'vuex';
import { Product } from '../../store/modules/products';
import { validator } from '../../utils/validator';
import { priceFormatter } from '../../utils/formatter';
import Card from '../container/Card.vue';
import Input from '../interaction/Input.vue';
import Align from '../container/Align.vue';
import Button from '../interaction/Button.vue';
import translations from '../../i18n/translations';
import i18n from '../../i18n/i18n';

@Options({
    components: {
        Card,
        Input,
        Align,
        Text,
        Button
    },
    computed: {
        ...mapGetters('products', ['products'])
    },
    methods: {
        ...mapActions('products', ['push']),
        priceFormatter
    },
    watch: {
        title(value): void {
            this.titleInvalid = validator('title', value).title;
            this.buttonEnabled = validator('button', this.newProductState);
        },
        img(value): void {
            this.imgInvalid = validator('img', value).img;
            this.buttonEnabled = validator('button', this.newProductState);
        },
        price(value): void {
            this.priceInvalid = validator('price', value).price;
            this.buttonEnabled = validator('button', this.newProductState);
        }
    }
})
export default class AddingForm extends Vue {
    title!: string;
    img!: string;
    price!: string;
    description!: string;
    buttonEnabled!: boolean;
    titleInvalid!: string;
    imgInvalid!: string;
    priceInvalid!: string;
    push!: (product: Product) => boolean;
    i18n!: i18n;

    data(): Record<string, any> {
        return {
            title: '',
            img: '',
            price: '',
            description: '',
            buttonEnabled: false,
            titleInvalid: '',
            imgInvalid: '',
            priceInvalid: '',
            i18n: translations('ru_RU')
        };
    }

    pushProduct(product: Product) {
        if (this.buttonEnabled) this.push(product);
    }

    get newProductState() {
        return {
            title: this.title,
            img: this.img,
            price: this.price,
            description: this.description
        };
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';

.form {
    margin-right: 1rem;
    padding: 1.5rem;

    .input-field {
        margin-bottom: 0.1rem;

        :deep(.input) {
            width: 15.75rem;
        }

        :deep(.textarea) {
            height: 5rem;
        }
    }

    .label {
        margin-bottom: 0.25rem;
    }

    .button {
        height: 2.25rem;
        width: 100%;
        transition: background-color 0.2s;
    }
}
</style>
