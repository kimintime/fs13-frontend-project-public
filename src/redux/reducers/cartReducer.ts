import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/cart"

const initialState: CartItem[] = []

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            let isInCart = false
            let cartAmount = 0

            state.forEach(item => {
                if (item.product.id === action.payload.product.id) {
                    isInCart = true
                    cartAmount += cartAmount
                }
            })

            let newItem: CartItem = {
                amount: cartAmount + action.payload.amount,
                product: action.payload.product
            }

            if (isInCart) {
                return (
                    state.map(item => 
                        item.product.id === action.payload.product.id ? newItem : item))

            } else {

                return [...state, newItem]
            }
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            let cartAmount = 0

            state.forEach(item => {
                if ( item.product.id === action.payload.product.id) {
                    cartAmount = item.amount
                }
            })

            if (cartAmount === 1) {
                return state.filter(item => item.product.id !== action.payload.product.id)

            } else {

                let newItem: CartItem = {
                    amount: cartAmount --,
                    product: action.payload.product, 
                }

                return (
                    state.map(item => 
                        item.product.id === action.payload.product.id ? newItem : item)
                )
            }
        },
        emptyCart: (state) => {
            state.length = 0
        },
    }

})

const cartReducer = cartSlice.reducer
export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions
export default cartReducer
