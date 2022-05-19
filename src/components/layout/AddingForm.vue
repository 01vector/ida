<template>
  <Card class="form">
    <Align column horizontal="left">
      <Input class="input-field" placeholder="Placeholder" badge />
      <Input class="input-field" placeholder="Placeholder" badge />
      <Input textarea class="input-field" placeholder="Placeholder" />
      <Input class="input-field" placeholder="Placeholder" badge />
      <Button label="Добавить товар" class="button" disabled />
    </Align>
  </Card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "../container/Card.vue";
import Input from "../interaction/Input.vue";
import Align from "../container/Align.vue";
import Button from "../interaction/Button.vue";

@Options({
  components: {
    Card,
    Input,
    Align,
    Text,
    Button,
  },
})
export default class AddingForm extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.form {
  border: 1px solid black;
  margin-right: 5rem;
  padding: 1.5rem;

  .input-field {
    margin-bottom: 2rem;

    &::v-deep .input {
      width: 17.75rem;
    }

    &::v-deep .textarea {
      height: 5rem;
    }
  }

  .label {
    margin-bottom: 0.25rem;
  }

  .button {
    height: 2.25rem;
    width: 100%;
  }
}
</style>
