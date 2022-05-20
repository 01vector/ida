<template>
  <Card class="form">
    {{ name }}
    <Align column horizontal="left">
      <Input
        @update:input-value="(value) => (name = value)"
        v-model="name"
        class="input-field"
        placeholder="Placeholder"
        badge
        label
      />
      <Input
        @update:input-value="(value) => (imgLink = value)"
        v-model="imgLink"
        class="input-field"
        placeholder="Placeholder"
        badge
        label
      />
      <Input
        @update:input-value="(value) => (description = value)"
        v-model="description"
        type="big"
        class="input-field"
        placeholder="Placeholder"
        label
      />
      <Input
        @update:input-value="(value) => (price = value)"
        v-model="price"
        class="input-field"
        placeholder="Placeholder"
        badge
        label
      />
      <Button
        @click="pushProduct({ name, imgLink, price, description })"
        label="Добавить товар"
        class="button"
        :enabled="buttonEnabled"
      />
    </Align>
  </Card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import { Product } from "../../store/modules/products";
import { validateForm } from "../../utils/validator";
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
  computed: {
    ...mapGetters("products", ["products"]),
  },
  methods: {
    ...mapActions("products", ["push"]),
  },
  watch: {
    name(): void {
      this.validate();
    },
    imgLink(): void {
      this.validate();
    },
    price(): void {
      this.validate();
    },
    description(): void {
      this.validate();
    },
  },
})
export default class AddingForm extends Vue {
  name!: string;
  imgLink!: string;
  price!: string;
  description!: string;
  buttonEnabled!: boolean;
  push!: (product: Product) => boolean;

  data(): Record<string, any> {
    return {
      name: "",
      imgLink: "",
      price: "",
      description: "",
      buttonEnabled: false,
    };
  }

  pushProduct(product: Product) {
    const resultFormValidate = this.push(product);
  }

  validate(): void {
    if (!validateForm(this.newProductState)) this.buttonEnabled = false;
  }

  get newProductState() {
    return {
      title: this.name,
      imgLink: this.imgLink,
      price: this.price,
      description: this.description,
    };
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";
@import "../../styles/fonts.scss";

.form {
  margin-right: 1rem;
  padding: 1.5rem;

  .input-field {
    margin-bottom: 1rem;

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

.nameinput {
  background-color: red;
}
</style>
