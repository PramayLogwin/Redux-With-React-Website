
import { Actiontypes } from "../contants/Actiontypes";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
}


export const selectedProductReducer = (state = {}, { type, payload }) => {

    switch (type) {

        case Actiontypes.SELECTED_PRODUCT:
            return { ...state, ...payload };

        case Actiontypes.REMOVE_SELECTED_PRODUCT:
            return {};

        default:
            return state;
    }
}



const initialCart = {
    cart: []
}
export const addToCart = (state = initialCart, { type, payload }) => {
    switch (type) {

        case Actiontypes.ADD_SELECTED_PRODUCT:

            // const ItemIndex = state.cart.findIndex((iteam) => iteam.id === payload.id);

            // if(ItemIndex >=0){
            //     state.cart[ItemIndex]
            // }
        return { cart: [...state.cart, payload] };

        case Actiontypes.REMOVE_CART_ITEMS:
            // console.log(payload)
            return {
                cart: state.cart.filter((item) => {
                    return item.id !== payload.id
                })
            };

        default:
            return state;
    }
}

