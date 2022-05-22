<template>
    <div class="card">
        <slot default> </slot>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.card {
    background: $card-background;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
        0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}
</style>
