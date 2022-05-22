<template>
    <Page>
        <Align column horizontal="left">
            <Align horizontal="left" vertical="center" class="header">
                <Text size="header"> {{ i18n.header }} </Text>
                <Separator />
                <Input
                    type="sm-select"
                    @inputValue="(mode) => sort(mode)"
                    class="filters"
                />
            </Align>
            <Align :wrap="false" class="content">
                <div>
                    <AddingForm />
                </div>
                <div>
                    <ProductsSet class="align-products" />
                </div>
            </Align>
        </Align>
    </Page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions } from 'vuex';
import Card from './components/container/Card.vue';
import Input from './components/interaction/Input.vue';
import Align from './components/container/Align.vue';
import Text from './components/label/Text.vue';
import Button from './components/interaction/Button.vue';
import Separator from './components/marker/Separator.vue';
import Page from './components/container/Page.vue';
import AddingForm from './components/layout/AddingForm.vue';
import ProductsSet from './components/layout/ProductsSet.vue';
import translations from './i18n/translations';

@Options({
    components: {
        Card,
        Input,
        Align,
        Text,
        Button,
        Separator,
        Page,
        AddingForm,
        ProductsSet
    },
    methods: {
        ...mapActions('products', ['sort'])
    }
})
export default class App extends Vue {
    i18n = translations('ru_RU');
}
</script>

<style lang="scss">
@import './styles/colors.scss';
@import './styles/fonts.scss';

#app {
    @include base-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $text;

    .input {
        @include base-font;
    }
}

.content {
    margin-top: 1rem;

    .align-products {
        justify-content: space-around; // гибкость
        //justify-content: start; // адекватное отображение переходных состояний (когда в последнем ряду карточчек неполное количество товаров)
    }
}

.header {
    width: 100%;
}
</style>
