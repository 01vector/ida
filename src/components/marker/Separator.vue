<template>
    <div :class="{ horizontal, vertical }" class="separator" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        horizontal: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        }
    }
})
export default class Separator extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.separator {
    flex: 1;

    &.horizontal {
        border-right: solid 0.15rem transparent;
    }

    &.vertical {
        border-bottom: solid 0.15rem transparent;
    }
}
</style>
