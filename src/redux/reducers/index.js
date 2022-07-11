import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,  addToCart } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: addToCart,
    
})

export default reducers;