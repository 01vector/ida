<template>
  <textarea v-if="textarea" :placeholder="placeholder" class="input">
  </textarea>
  <input v-else :placeholder="placeholder" class="input" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    textarea: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
  },
})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

.input {
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0.65rem 1rem;
}
</style>
