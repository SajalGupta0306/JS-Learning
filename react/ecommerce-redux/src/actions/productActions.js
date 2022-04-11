import { productActions } from "./actionConstants";

export const setProducts = (products) => {
  return {
    type: productActions.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: productActions.SELECTED_PRODUCT,
    payload: product,
  };
};
