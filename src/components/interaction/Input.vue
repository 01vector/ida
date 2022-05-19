<template>
  <Align column horizontal="left" vertical="top">
    <Text size="caption" :badge="badge" class="label"> Hello </Text>
    <textarea
      v-if="textarea"
      :placeholder="placeholder"
      class="input textarea"
    />
    <input v-else :placeholder="placeholder" class="input" />
  </Align>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Text from "../label/Text.vue";
import Align from "../container/Align.vue";

@Options({
  components: {
    Text,
    Align,
  },
  props: {
    badge: {
      type: Boolean,
      default: false,
    },
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
@import "../../styles/fonts.scss";

.input {
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  resize: none;
  padding: 0.65rem 1rem;

  &::placeholder {
    font-size: $caption;
  }
}

.label {
  display: block;
  margin-bottom: 0.25rem;
}
</style>
