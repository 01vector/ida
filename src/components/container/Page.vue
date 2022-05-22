<template>
    <div class="page">
        <slot default> </slot>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.page {
    background-color: $page-background;
    padding: 1rem;
}
</style>
