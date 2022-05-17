<template>
  <textarea
    v-if="textarea"
    :style="sizes"
    :placeholder="placeholder"
    class="input"
  >
  </textarea>
  <input v-else :style="sizes" :placeholder="placeholder" class="input" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    textarea: {
      type: Boolean,
      default: false,
    },
    sizes: {
      type: Object,
      default: {
        width: "17.75rem",
        height: "2.25rem",
      },
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
  border: 1px solid $input-border;
  border-radius: 0.25rem;
  padding: 0.65rem 1rem;
}
</style>
