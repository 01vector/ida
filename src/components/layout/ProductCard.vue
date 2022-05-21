<template>
    <Card
        class="item-card"
        @mouseenter="toggleStash($event)"
        @mouseleave="toggleStash($event)"
    >
        <div @click="$emit('remove')" class="close">
            <Align horizontal="center" vertical="center" class="icon-align">
                <Icon />
            </Align>
        </div>
        <div
            class="header-picture"
            :style="`background-image: url(${linksFormatter(img)})`"
        />
        <Text size="subheader" class="product-text"> {{ title }} </Text>
        <Text size="info" class="product-text description">
            {{ description }}
        </Text>
        <Text size="header" class="product-text"> {{ price }} руб. </Text>
    </Card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { linksFormatter } from '../../utils/formatter';
import Align from '../container/Align.vue';
import Card from '../container/Card.vue';
import Text from '../label/Text.vue';
import Icon from '../../components/image/Icon.vue';

@Options({
    components: {
        Card,
        Align,
        Text,
        Icon
    },
    methods: {
        linksFormatter
    },
    props: ['title', 'description', 'price', 'img'],
    emits: ['remove']
})
export default class App extends Vue {
    toggleStash(event: any) {
        event.target.firstElementChild.classList.toggle('hidden');
    }
}
</script>

<style lang="scss">
@import '../../styles/colors.scss';

.item-card {
    width: 20.25rem;
    text-align: left;
    position: relative;

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
    }

    > .close {
        background-color: $badge;
        border-radius: 0.625rem;
        height: 2rem;
        text-align: center;
        top: -0.5rem;
        right: -0.5rem;
        visibility: hidden;
        position: absolute;
        line-height: 2rem;
        width: 2rem;

        &.hidden {
            visibility: visible;
        }

        > .icon-align {
            height: 100%;
        }

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
}
</style>
