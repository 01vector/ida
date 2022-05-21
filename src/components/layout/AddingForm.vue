<template>
    <Card class="form">
        <form>
            <Align column horizontal="left">
                <Input
                    @inputValue="(value) => (title = value)"
                    v-model="title"
                    :invalid="titleInvalid"
                    class="input-field"
                    placeholder="XSO-3000"
                    badge
                    label="Наименование"
                />
                <Input
                    @inputValue="(value) => (description = value)"
                    v-model="description"
                    type="big"
                    class="input-field"
                    placeholder="Хороший фотоаппарат..."
                    label="Описание"
                />
                <Input
                    @inputValue="(value) => (img = value)"
                    v-model="img"
                    :invalid="imgInvalid"
                    class="input-field"
                    placeholder="https://img-link.com"
                    badge
                    label="Ссылка на изображение"
                />
                <Input
                    @inputValue="(value) => (price = value)"
                    v-model="price"
                    :invalid="priceInvalid"
                    :formatter="priceFormatter"
                    class="input-field"
                    placeholder="10.000"
                    badge
                    label="Цена"
                />
                <Button
                    @click="
                        pushProduct({
                            title,
                            img,
                            price,
                            description
                        })
                    "
                    label="Добавить товар"
                    class="button"
                    :enabled="buttonEnabled"
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

    data(): Record<string, any> {
        return {
            title: '',
            img: '',
            price: '',
            description: '',
            buttonEnabled: false,
            titleInvalid: '',
            imgInvalid: '',
            priceInvalid: ''
        };
    }

    pushProduct(product: Product) {
        this.push(product);
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
    }
}

.titleinput {
    background-color: red;
}
</style>
