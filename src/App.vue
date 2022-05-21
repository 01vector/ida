<template>
    <Page>
        <Align column horizontal="left">
            <Align horizontal="left" class="header">
                <Text size="header"> Добавление товара </Text>
                <Separator />
                <Input type="sm-select" @inputValue="(mode) => sort(mode)" />
            </Align>
            <Align :wrap="false" class="content">
                <div>
                    <AddingForm />
                </div>
                <div>
                    <transition-group name="items" tag="div">
                        <ProductsSet class="align-products" />
                    </transition-group>
                </div>
            </Align>
        </Align>
    </Page>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions, mapGetters } from 'vuex';
import Card from './components/container/Card.vue';
import Input from './components/interaction/Input.vue';
import Align from './components/container/Align.vue';
import Text from './components/label/Text.vue';
import Button from './components/interaction/Button.vue';
import Separator from './components/marker/Separator.vue';
import Page from './components/container/Page.vue';
import AddingForm from './components/layout/AddingForm.vue';
import ProductsSet from './components/layout/ProductsSet.vue';

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
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/colors.scss';
@import './styles/fonts.scss';

#app {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $text;
}

.content {
    margin-top: 1rem;

    .align-products {
        //justify-content: space-between; // гибкость
        justify-content: start; // адекватное отображение переходных состояний
    }
}

.header {
    width: 100%;
}
</style>
