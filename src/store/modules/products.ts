import { Module } from "vuex";
import { validateForm } from "../../utils/validator";

export interface Product {
  description?: string;
  title: string;
  imgLink: string;
  price: number;
}

interface ModuleState {
  products: Product[];
  nameField: string;
}

export default {
  state: {
    products: [],
    nameField: "",
  },
  mutations: {
    PUSH(state, product: Product) {
      state.products.push(product);
    },
    NAME(state, name: string) {
      state.nameField = name;
    },
  },
  actions: {
    push({ commit }, product: Product) {
      const resultFormValidate = validateForm(product);
      if (resultFormValidate === true) {
        commit("PUSH", product);
        return;
      } else return resultFormValidate;
    },
    setName({ commit }, name: string) {
      commit("NAME", name);
    },
  },
  getters: {
    products: (state) => state.products,
    name: (state) => state.nameField,
  },
  namespaced: true,
} as Module<ModuleState, any>;
