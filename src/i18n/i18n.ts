export default interface i18n {
    header: string;

    filters: {
        filter: string;
        byMin: string;
        byMax: string;
        byDefault: string;
        byName: string;
    };

    inputs: {
        productName: {
            placeholder: string;
            label: string;
        };
        productDescription: {
            placeholder: string;
            label: string;
        };
        productImgLink: {
            placeholder: string;
            label: string;
        };
        productPrice: {
            placeholder: string;
            label: string;
        };
    };

    buttons: {
        addProduct: {
            label: string;
        };
    };

    invalids: {
        emptyField: string;
        numberField: string;
    };
}
