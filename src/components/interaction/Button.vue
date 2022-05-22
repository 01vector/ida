<template>
    <button
        :class="{ removal: removal, disabled: !enabled }"
        :disabled="!enabled"
        class="button"
    >
        <Icon v-if="removal" />
        <Text v-if="label"> {{ label }} </Text>
    </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Icon from '../image/Icon.vue';
import Text from '../label/Text.vue';

@Options({
    components: {
        Icon,
        Text
    },
    props: {
        removal: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            required: false
        },
        enabled: {
            type: Boolean,
            default: false
        }
    }
})
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.button {
    align-items: center;
    background-color: $active-button;
    color: white;
    border: none;
    border-radius: 0.625rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    outline: none;
    padding: 0.5rem 1rem;
    user-select: none;
    white-space: nowrap;

    &.disabled {
        background-color: $button-deactive;
        color: $color-neutral;
    }

    &:not(.disabled) {
        &:hover {
            background-color: $button-hover;
        }
    }

    &.removal {
        padding: 0.5rem 0.5rem;
        background-color: $badge;
    }
}
</style>
