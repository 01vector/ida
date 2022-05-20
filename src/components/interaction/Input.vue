<template>
    <Align column horizontal="left" vertical="top">
        <Text v-show="label" :badge="badge" size="caption" class="label">
            {{ label }}
        </Text>
        <textarea
            v-if="type === 'big'"
            @input="$emit('update:inputValue', inputValue)"
            :placeholder="placeholder"
            class="input textarea"
        />
        <input
            @input="$emit('update:inputValue', inputValue)"
            v-model="inputValue"
            v-if="type === 'small'"
            :placeholder="placeholder"
            class="input"
        />
        <select
            v-if="type === 'sm-select'"
            @input="$emit('update:inputValue', inputValue)"
            :class="{ 'sm-select': type }"
            class="input"
        >
            <option>По умолчанию</option>
            <option>Max</option>
            <option>Min</option>
            <option>Name</option>
        </select>
        <Text
            v-show="invalid"
            :badge="badge"
            size="caption"
            class="label invalid-label"
        >
            {{ invalid }}
        </Text>
    </Align>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Text from '../label/Text.vue';
import Align from '../container/Align.vue';

@Options({
    components: {
        Text,
        Align
    },
    props: {
        badge: {
            type: Boolean,
            default: false
        },
        type: {
            type: String as () => 'small' | 'big' | 'sm-select',
            default: 'small'
        },
        placeholder: {
            type: String
        },
        label: {
            type: String,
            required: false
        },
        inputValue: {
            type: String,
            required: false
        },
        invalid: {
            type: String,
            default: ''
        }
    },
    emits: ['update:inputValue']
})
export default class Card extends Vue {
    inputValue = '';
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
@import '../../styles/fonts.scss';

.input {
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    resize: none;
    padding: 0.65rem 1rem;
}

.label {
    display: block;
    margin-bottom: 0.25rem;
}

.invalid-label {
    color: red;
    margin-top: 0.25rem;
}

.sm-select {
    color: $color-neutral;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    padding-left: 1rem;
    padding-right: 0.625rem;
    width: 9rem;
}
</style>
