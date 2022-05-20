<template>
    <Align>
        <ProductCard
            v-for="product in products"
            :key="product"
            class="product-card"
        >
        </ProductCard>
    </Align>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { Options, Vue } from 'vue-class-component';
import Align from '../container/Align.vue';
import Card from '../container/Card.vue';
import ProductCard from './ProductCard.vue';

@Options({
    components: {
        Card,
        Align,
        Text,
        ProductCard
    },
    computed: {
        ...mapGetters('products', {
            products: 'products'
        })
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
.product-card {
    margin-right: 1rem;
    margin-bottom: 1rem;
}
</style>
