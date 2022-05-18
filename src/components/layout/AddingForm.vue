<template>
  <Card class="form">
    <Align column horizontal="left">
      <Text size="caption" badge class="label"> Выберите товар </Text>
      <Input class="input" placeholder="Placeholder" />
      <Text size="caption" badge class="label"> Ссылка </Text>
      <Input class="input" placeholder="Placeholder" />
      <Text size="caption" class="label"> Описание </Text>
      <Input textarea class="input textarea" placeholder="Placeholder" />
      <Text size="caption" badge class="label"> Цена </Text>
      <Input class="input" placeholder="Placeholder" />
      <Button label="Добавить товар" class="button" disabled />
    </Align>
  </Card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "../container/Card.vue";
import Input from "../interaction/Input.vue";
import Align from "../container/Align.vue";
import Text from "../label/Text.vue";
import Button from "../interaction/Button.vue";
import Separator from "../marker/Separator.vue";
import Page from "../container/Page.vue";

@Options({
  components: {
    Card,
    Input,
    Align,
    Text,
    Button,
    Separator,
    Page,
  },
})
export default class AddingForm extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.input {
  margin-bottom: 2rem;
  width: 17.75rem;

  &.textarea {
    height: 6.75rem;
    resize: none;
  }

  &::placeholder {
    font-size: $caption;
  }
}

.label {
  margin-bottom: 0.25rem;
}

.align :nth-last-child(2) {
  margin-bottom: 1.5rem;
}

.button {
  height: 2.25rem;
  width: 100%;
}

.form {
  margin-top: 1rem;
}
</style>
