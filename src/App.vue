<template>
  <Page>
    <Align horizontal="center">
      <Text size="header"> Добавление товара </Text>
      <Separator horizontal />
      <Input />
    </Align>
    <Align>
      <AddingForm />
    </Align>
  </Page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "./components/container/Card.vue";
import Input from "./components/interaction/Input.vue";
import Align from "./components/container/Align.vue";
import Text from "./components/label/Text.vue";
import Button from "./components/interaction/Button.vue";
import Separator from "./components/marker/Separator.vue";
import Page from "./components/container/Page.vue";
import AddingForm from "./components/layout/AddingForm.vue";

@Options({
  components: {
    Card,
    Input,
    Align,
    Text,
    Button,
    Separator,
    Page,
    AddingForm,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./styles/colors.scss";
@import "./styles/fonts.scss";

#app {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
}
</style>
