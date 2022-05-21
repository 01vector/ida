<template>
    <Align>
        <transition-group name="list">
            <ProductCard
                v-for="product in products"
                :key="product"
                @remove="remove(product)"
                :title="product.title"
                :description="product.description"
                :img="product.img"
                :price="product.price"
                class="product-card"
            >
            </ProductCard>
        </transition-group>
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
        ...mapGetters('products', ['products', 'quantity'])
    },
    methods: {
        ...mapActions('products', ['remove', 'initialize', 'saveState'])
    },
    watch: {
        quantity(quantity) {
            if (quantity !== undefined) this.save();
        }
    }
})
export default class App extends Vue {
    initialize!: () => undefined;
    saveState!: () => undefined;

    created() {
        this.initialize();
    }

    save() {
        this.saveState();
    }
}
</script>

<style lang="scss">
.product-card {
    cursor: pointer;
    margin-right: 1rem;
    margin-bottom: 1rem;
    transition: transform 0.15s;

    &:hover {
        transform: scale(1.05);
    }
}

.list-enter-active {
    transition: all 0.4s ease;
}
.list-leave-active {
    position: absolute;
}
.list-enter-from,
.list-leave-to {
    transform: scale(0.1);
}
.list-move {
    transition: transform 0.3s ease;
}
</style>
