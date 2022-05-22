import translations from '../i18n/translations';

const text = translations('ru_RU');
interface Form {
    title: string | undefined;
    img: string | undefined;
    price: number;
}

const title = (value: string): string | undefined => {
    if (!value) return text?.invalids.emptyField;
};

const img = (value: string): string | undefined => {
    if (!value) return text?.invalids.emptyField;
};

const price = (value: string): any => {
    if (value !== '' && isNaN(+value)) return text?.invalids.numberField;
    else if (!value) return text?.invalids.emptyField;
};

const button = (values: any) => {
    if (isNaN(values.price)) return false;
    else if (values.title && values.price && values.img) return true;
    else return false;
};

const validateForm = () => {
    const state: Form = {
        title: '',
        img: '',
        price: 0
    };

    return (target: string, value: any): any => {
        switch (target) {
            case 'title':
                state.title = title(value);
                break;
            case 'img':
                state.img = img(value);
                break;
            case 'price':
                state.price = price(value);
                break;
            case 'button':
                return button(value);
            default:
                throw new Error('Incorrect value');
        }

        return state;
    };
};

export const validator = validateForm();
