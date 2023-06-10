import { Actiontypes } from "../constants/Action-Typs";

const initialState = {
    products: [ ],

};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case Actiontypes.REMOVE_SELETED_PRODUCT:
            return {}
          default:
          return  state;
    }
}
