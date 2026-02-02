import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: JSON.parse(localStorage.getItem("carts") || "[]" )
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push({ ...action.payload, qty: 1 });
            localStorage.setItem("carts", JSON.stringify(state.cart) )
        },
        incearse: (state, action) => {
            state.cart = state.cart.map((el) => {
                if (el.id === action.payload) {
                    return { ...el, qty: el.qty + 1 }

                } else {
                    return el
                }

            })
        },
        decrease: (state, action) => {
            let item = state.cart?.find((el) => el.id === action.payload);
            if (item.qty > 1) {
                state.cart = state.cart?.map((el) => {
                    if (el.id === item.id) {
                        return { ...el, qty: el.qty - 1 }
                    } else {
                        return el
                    }
                })
            }else{
                state.cart = state.cart?.filter((el) => el.id !== action.payload)
            }
        },
        deleteProduct: (state, action) => {
            state.cart = state.cart.filter((el) => el.id !== action.payload)
        }
    }
})

export const { addToCart, incearse, decrease, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer