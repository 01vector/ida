import { Product } from "../store/modules/products";

export const validateForm = (product: Product): boolean | string[] => {
  if (product.title && product.price && product.imgLink) {
    return true;
  } else {
    const invalidValues: string[] = [];
    const invalidProduct = Object(product);

    for (const key in invalidProduct) {
      if (!invalidProduct[key]) invalidValues.push(key);
    }

    return invalidValues;
  }
};
