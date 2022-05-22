import i18n from './i18n';

const ru_RU: i18n = {
    header: 'Добавление товара',

    filters: {
        filter: 'Фильтр',
        byMin: 'Цена min',
        byMax: 'Цена max',
        byDefault: 'По умолчанию',
        byName: 'По имени'
    },

    inputs: {
        productName: {
            placeholder: 'XSO-3000',
            label: 'Наименование'
        },
        productDescription: {
            placeholder: 'Хороший фотоаппарат...',
            label: 'Описание'
        },
        productImgLink: {
            placeholder: 'https://img-link.png',
            label: 'Ссылка на изображение'
        },
        productPrice: {
            placeholder: '10.000',
            label: 'Цена'
        }
    },

    buttons: {
        addProduct: {
            label: 'Добавить товар'
        }
    },

    invalids: {
        emptyField: 'Поле обязательно для заполнения',
        numberField: 'Поле должно содержать число'
    }
};

export default ru_RU;
