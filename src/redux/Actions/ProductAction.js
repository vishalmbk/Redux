import { Actiontypes } from "../constants/Action-Typs"

export const setProducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (product) => {
    return {
        type: Actiontypes.SELECTED_PRODUCT,
        payload: product,
    };
};
export const  removeselectedProducts = (product) => {
    return {
        type: Actiontypes.REMOVE_SELETED_PRODUCT,
    
    };
};