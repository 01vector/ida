<template>
    <img src="../../assets/trash.png" class="icon" />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.icon {
    width: 1rem;
    height: 1rem;
}
</style>
