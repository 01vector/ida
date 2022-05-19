<template>
  <Align>
    <ProductCard> </ProductCard>
    <Card class="card2"> </Card>
    <Card class="card2"> </Card>
    <Card class="card2"> </Card>
    <Card class="card2"> </Card>
    <Card class="card2"> </Card>
    <Card class="card2"> </Card>
    <Card class="card2"> </Card>
    <Card class="card2"> </Card>
    <Card class="card2"> </Card>
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
.card2 {
  border: 1px solid black;
  padding: 1.5rem;
  height: 100px;
  width: 100px;
  margin-right: 15px;
}
</style>
