import { configureStore } from "@reduxjs/toolkit";

import uiReducer from './ui'

import productsReducer from './products'

import cartReducer from './cart'

import productDatileReducer from './productDatiles'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        products: productsReducer,
        cart: cartReducer,
        productDatile: productDatileReducer,
    }
});


console.log(store.getState())