<template>
  <div
    :class="{
      [`size-${size}`]: size,
      [`badge`]: badge,
    }"
    class="text"
  >
    <slot default> </slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    size: {
      type: String as () => "header" | "subheader" | "info" | "caption",
      default: "info",
    },
    badge: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.text {
  color: currentColor;

  &.size-header {
    font-weight: 600;
    font-size: $header;
  }

  &.size-subheader {
    font-weight: 600;
    font-size: $subheader;
  }

  &.size-info {
    font-weight: 400;
    font-size: $info;
  }

  &.size-caption {
    font-weight: 400;
    font-size: $caption;
  }

  &.badge::after {
    content: " *";
    color: $badge;
  }
}
</style>
