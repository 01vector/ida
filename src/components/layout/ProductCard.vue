<template>
    <Card class="item-card">
        <div class="header-picture" />
        <Text size="subheader" class="product-text"> Hello </Text>
        <Text size="info" class="product-text description">
            Довольно-таки интересное описание в несколько строк. Довольно-таки
            интересное описание в несколько строк.
        </Text>
        <Text size="header" class="product-text"> 10 000 руб. </Text>
    </Card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Align from '../container/Align.vue';
import Card from '../container/Card.vue';
import Text from '../label/Text.vue';

@Options({
    components: {
        Card,
        Align,
        Text
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
.item-card {
    width: 20.25rem;
    text-align: left;

    > .product-text {
        margin: 1rem;
    }

    > .description {
        margin-bottom: 2rem;
    }

    > .header-picture {
        background-image: url('../../assets/Rectangle 30.png');
        background-repeat: no-repeat;
        background-clip: border-box;
        height: 12.5rem;
        width: 20.75rem;
    }
}
</style>
