import { Actiontypes } from "../contants/Actiontypes";


export const setProducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: Actiontypes.SELECTED_PRODUCT,
        payload: product,
    };
};


export const removeSelectedProduct = () => {
    return {
        type: Actiontypes.REMOVE_SELECTED_PRODUCT,

    };
};


export const Add = (product) => {
    return {
        type: Actiontypes.ADD_SELECTED_PRODUCT,
        payload: product,
    };
};

export const RemoveCartItems = (product) => {
    return {
        type: Actiontypes.REMOVE_CART_ITEMS,
        payload: product,
    }
}