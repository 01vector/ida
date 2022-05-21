import { Module } from 'vuex';

export interface Product {
    description?: string;
    title: string;
    img: string;
    price: number;
}

interface ModuleState {
    products: Product[];
    buffer: Product[];
}

export default {
    state: {
        products: [],
        buffer: []
    },
    mutations: {
        INITIALIZE(state) {
            const initProducts = localStorage.getItem('products');

            if (initProducts) {
                const parsedProducts = initProducts
                    ? JSON.parse(initProducts)
                    : false;
                state.products = parsedProducts;
            }
        },
        SAVE_STATE(state) {
            const storageProducts = JSON.stringify(state.products);
            localStorage.setItem('products', storageProducts);
        },
        PUSH(state, product: Product) {
            state.products.push(product);
        },
        REMOVE(state, product: Product) {
            state.products.splice(state.products.indexOf(product), 1);
        },
        BUFFER_PUSH(state) {
            if (state.buffer.length === 0)
                state.buffer = state.products.slice();
        },
        SORT_BY_MAX(state) {
            state.products = state.products.sort((a, b) => b.price - a.price);
        },
        SORT_BY_MIN(state) {
            state.products = state.products.sort((a, b) => a.price - b.price);
        },
        SORT_BY_NAME(state) {
            const compare = (a: Product, b: Product): number => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            };
            state.products = state.products.sort(compare);
        },
        SORT_BY_DEFAULT(state) {
            state.products = state.buffer.splice(0);
        }
    },
    actions: {
        push({ commit }, product: Product): void {
            commit('PUSH', product);
        },
        remove({ commit }, product: Product): void {
            commit('REMOVE', product);
        },
        initialize({ commit }): void {
            commit('INITIALIZE');
        },
        saveState({ commit }): void {
            commit('SAVE_STATE');
        },
        sort({ commit }, mode: string): void {
            commit('BUFFER_PUSH');
            mode = mode.toLowerCase();

            switch (mode) {
                case 'max':
                    commit('SORT_BY_MAX');
                    break;
                case 'min':
                    commit('SORT_BY_MIN');
                    break;
                case 'name':
                    commit('SORT_BY_NAME');
                    break;
                default:
                    commit('SORT_BY_DEFAULT');
                    break;
            }
        }
    },
    getters: {
        products: (state) => state.products,
        quantity: (state) => state.products?.length
    },
    namespaced: true
} as Module<ModuleState, any>;
