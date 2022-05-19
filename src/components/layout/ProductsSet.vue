<template>
  <Align>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
    <ProductCard class="product-card"> </ProductCard>
  </Align>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Align from "../container/Align.vue";
import Card from "../container/Card.vue";
import ProductCard from "./ProductCard.vue";

@Options({
  components: {
    Card,
    Align,
    Text,
    ProductCard,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.product-card {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
</style>
