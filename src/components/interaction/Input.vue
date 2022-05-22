<template>
    <Align column horizontal="left" vertical="top">
        <Text
            :badge="badge"
            :style="{ visibility: !label }"
            size="caption"
            class="label"
        >
            {{ label }}
        </Text>
        <textarea
            v-if="type === 'big'"
            v-model="inputValue"
            @input="format(formatter)"
            :placeholder="placeholder"
            class="input textarea"
        />
        <input
            v-model="inputValue"
            @input="format(formatter)"
            v-if="type === 'small'"
            :placeholder="placeholder"
            class="input"
        />
        <select
            v-if="type === 'sm-select'"
            v-model="selectBoxValue"
            :class="{ 'sm-select': type }"
            @change="throwEmit($event)"
            class="input"
        >
            <option disabled value="">{{ text.filters.filter }}</option>
            <option value="default">{{ text.filters.byDefault }}</option>
            <option value="max">{{ text.filters.byMax }}</option>
            <option value="min">{{ text.filters.byMin }}</option>
            <option value="name">{{ text.filters.byName }}</option>
        </select>
        <Text
            :style="{ visibility: !invalid }"
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
import translations from '../../i18n/translations';

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
        },
        formatter: {
            type: Function,
            default: null
        }
    },
    emits: ['inputValue']
})
export default class Card extends Vue {
    inputValue = '';
    selectBoxValue = '';
    text = translations('ru_RU');

    format(formatterFunction: (value: any) => string) {
        if (formatterFunction) {
            this.inputValue = formatterFunction(this.inputValue);
        }
        this.throwEmit();
    }

    throwEmit(...event: any[]) {
        event.length > 0
            ? this.$emit('inputValue', this.selectBoxValue)
            : this.$emit('inputValue', this.inputValue);
    }
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
    height: 1rem;
}

.invalid-label {
    color: $badge;
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
