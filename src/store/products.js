import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../FakeApi/products/products"
import { categories } from "../FakeApi/products/products";


const products = getProducts();

const initialState = {
    listItems: [...products],
    loading: false,
    lastFetch: '',
    category: [...categories]
}


const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        addQuantity: (state, { payload }) => {
            const product = state.listItems.find((item) => {
                return item.id === payload.id;
            });
            product.quantity = product.quantity + 1;

        },
        minusQuantity: (state, { payload }) => {
            const product = state.listItems.find((item) => {
                return item.id === payload.id;
            });
            product.quantity = product.quantity - 1
        }
    }
});

export const { minusQuantity, addQuantity } = slice.actions
export default slice.reducer