<template>
  <img :src="icon" class="icon" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    icon: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/1214/1214428.png",
    },
  },
})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

.icon {
  width: 1rem;
  height: 1rem;
}
</style>
