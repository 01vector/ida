<template>
  <Card class="item-card">
    <img
      src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Product"
      class="picture"
    />
    <Text size="subheader"> Hello </Text>
    <Text size="info"> Hello hello hello helllo </Text>
    <Text size="header"> 10 000 руб. </Text>
  </Card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Align from "../container/Align.vue";
import Card from "../container/Card.vue";
import Text from "../label/Text.vue";

@Options({
  components: {
    Card,
    Align,
    Text,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.item-card {
  width: 100px;
  height: 100px;
  padding: 0;
}
.picture {
  width: 150px;
  overflow: hidden;
}
</style>
