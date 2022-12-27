import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { CreateProduct, Product } from "../../types/product";

const initialState: Product[] = []

export const fetchAllProducts = createAsyncThunk(
    "fetchAllProducts",
    async () => {
        try {
            const res: AxiosResponse<Product[], Product[]> = await axios.get("https://api.escuelajs.co/api/v1/products")
            return res.data

        } catch (e: any) {
            console.log(e)
        }
    }
)

export const createProduct = createAsyncThunk(
    "createProduct",
    async (product: CreateProduct) => {
        try {
            const response: AxiosResponse<Product, Product> = await axios.post("https://api.escuelajs.co/api/v1/products", product)
            return response.data

        } catch (e: any) {
            console.log(e)
        }
    }
)

const productSlice = createSlice({
    name: "productSlice",
    initialState: initialState,
    reducers: {
        sortByName: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.title.localeCompare(b.title))

            } else {
                state.sort((a, b) => b.title.localeCompare(a.title))
            }
        }
        
    },
    extraReducers: (build) => {
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {
            if (action.payload) {
                return action.payload
            } else {
                return state
            }
        })
        build.addCase(fetchAllProducts.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(fetchAllProducts.pending, (state, action) => {
            console.log("Data is loading...")
            return state
        })
        build.addCase(createProduct.fulfilled, (state, action) => {
            if (action.payload) {
                state.push(action.payload)

            } else {
                return state
            }
            
        })
    }
})


const productReducer = productSlice.reducer
export const {sortByName} = productSlice.actions
export default productReducer;