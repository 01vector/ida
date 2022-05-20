import { Module } from 'vuex';

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
        nameField: ''
    },
    mutations: {
        PUSH(state, product: Product) {
            state.products.push(product);
        },
        NAME(state, name: string) {
            state.nameField = name;
        }
    },
    actions: {
        push({ commit }, product: Product) {
            commit('PUSH', product);
        },
        setName({ commit }, name: string) {
            commit('NAME', name);
        }
    },
    getters: {
        products: (state) => state.products,
        name: (state) => state.nameField
    },
    namespaced: true
} as Module<ModuleState, any>;
