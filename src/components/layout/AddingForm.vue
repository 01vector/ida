<template>
  <Card class="form">
    <Align column horizontal="left">
      <Input class="input-field" placeholder="Placeholder" badge label />
      <Input class="input-field" placeholder="Placeholder" badge label />
      <Input type="big" class="input-field" placeholder="Placeholder" label />
      <Input class="input-field" placeholder="Placeholder" badge label />
      <Button label="Добавить товар" class="button" disabled lqbel />
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
  margin-right: 1rem;
  padding: 1.5rem;

  .input-field {
    margin-bottom: 2rem;

    :deep(.input) {
      width: 15.75rem;
    }

    :deep(.textarea) {
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
