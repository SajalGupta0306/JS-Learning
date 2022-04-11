import { productActions } from "../actions/actionConstants";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.SET_PRODUCTS:
      return 1;
    case productActions.SELECTED_PRODUCT:
      return 2;
    default:
      return state;
  }
};
