import { Product } from '../store/modules/products';

interface Form {
    title: string | undefined;
    img: string | undefined;
    price: number;
}

const emptyMessage = 'Поле обязательно для заполнения';

const title = (value: string): string | undefined => {
    if (!value) return emptyMessage;
};

const img = (value: string): string | undefined => {
    if (!value) return emptyMessage;
};

const price = (value: string): any => {
    if (value !== '' && isNaN(+value)) return 'Поле должно содержать число';
    else if (!value) return 'Поле обязательно для зполнения';
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
