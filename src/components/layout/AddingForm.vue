<template>
    <Card class="form">
        <Align column horizontal="left">
            <Input
                @update:inputValue="(value) => (name = value)"
                v-model="name"
                :invalid="titleInvalid"
                class="input-field"
                placeholder="XSO-3000"
                badge
                label="Наименование"
            />
            <Input
                @update:inputValue="(value) => (imgLink = value)"
                v-model="imgLink"
                :invalid="imgInvalid"
                class="input-field"
                placeholder="https://img-link.com"
                badge
                label="Ссылка на изображение"
            />
            <Input
                @update:inputValue="(value) => (description = value)"
                v-model="description"
                type="big"
                class="input-field"
                placeholder="Хороший фотоаппарат..."
                label="Описание"
            />
            <Input
                @update:inputValue="(value) => (price = value)"
                v-model="price"
                :invalid="priceInvalid"
                class="input-field"
                placeholder="10 000"
                badge
                label="Цена"
            />
            <Button
                @click="pushProduct({ name, imgLink, price, description })"
                label="Добавить товар"
                class="button"
                :enabled="buttonEnabled"
            />
        </Align>
    </Card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapGetters } from 'vuex';
import { Product } from '../../store/modules/products';
import { validator } from '../../utils/validator';
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
        ...mapActions('products', ['push'])
    },
    watch: {
        name(value): void {
            this.titleInvalid = validator('title', value).title;
            this.buttonEnabled = validator('button', this.newProductState);
        },
        imgLink(value): void {
            this.imgInvalid = validator('imgLink', value).imgLink;
            this.buttonEnabled = validator('button', this.newProductState);
        },
        price(value): void {
            this.priceInvalid = validator('price', value).price;
            this.buttonEnabled = validator('button', this.newProductState);
        }
    }
})
export default class AddingForm extends Vue {
    name!: string;
    imgLink!: string;
    price!: string;
    description!: string;
    buttonEnabled!: boolean;
    titleInvalid!: string;
    imgInvalid!: string;
    priceInvalid!: string;
    push!: (product: Product) => boolean;

    data(): Record<string, any> {
        return {
            name: '',
            imgLink: '',
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
            title: this.name,
            imgLink: this.imgLink,
            price: parseFloat(this.price),
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
        margin-bottom: 1rem;

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

.nameinput {
    background-color: red;
}
</style>
