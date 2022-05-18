<template>
  <div
    :class="{
      column,
      [`horizontal-${horizontal}`]: horizontal,
      [`vertical-${vertical}`]: vertical,
      wrap,
    }"
    class="align"
  >
    <slot default> </slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    column: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: String as () => "left" | "center" | "right",
      required: false,
    },
    vertical: {
      type: String as () => "top" | "center" | "bottom",
      required: false,
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.align {
  display: flex;

  &.column {
    flex-direction: column;

    &.horizontal-left {
      align-items: flex-start;
    }

    &.horizontal-center {
      align-items: center;
    }

    &.horizontal-right {
      align-items: flex-end;
    }

    &.vertical-top {
      justify-content: flex-start;
    }

    &.vertical-center {
      justify-content: center;
    }

    &.vertical-bottom {
      justify-content: flex-end;
    }
  }

  &:not(.column) {
    &.horizontal-left {
      justify-content: flex-start;
    }

    &.horizontal-center {
      justify-content: center;
    }

    &.horizontal-right {
      justify-content: flex-end;
    }

    &.vertical-top {
      align-items: flex-start;
    }

    &.vertical-center {
      align-items: center;
    }

    &.vertical-bottom {
      align-items: flex-end;
    }
  }

  &.wrap {
    flex-wrap: wrap;
  }
}
</style>
