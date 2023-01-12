import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { CreateProduct, Product, EditProduct } from "../../types/product";

const initialState: Product[] = []

export const fetchAllProducts = createAsyncThunk(
    "fetchAllProducts",
    async () => {
        try {
            const res: AxiosResponse<Product[], Product[]> = await axios.get("https://api.escuelajs.co/api/v1/products")
            return res.data

        } catch (e: any) {

            throw new Error("Could not fetch products")
        }
    }
)

export const fetchProductsByCategory = createAsyncThunk(
    "fetchProductsByCategory",
    async (id: number) => {
        try {
            const res: AxiosResponse<Product[], Product[]> = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
            return res.data
        } catch (e: any) {
            throw new Error("Could not fetch products")
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
            throw new Error("Could not create new product")
        }
    }
)

export const updateProduct = createAsyncThunk(
    "updateProduct",
    async (item: EditProduct) => {
        try {
            const response = await axios.put(
                "https://api.escuelajs.co/api/v1/products/" + item.id,
                {
                    title: item.title,
                    price: item.price,
                    description: item.description,
                }
            );
            const data: EditProduct = await response.data;
            return data;

        } catch (e: any) {
            throw new Error(e.message);
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "deleteProduct",
    async (id: number) => {
        try {
            const res: AxiosResponse<Product, Product> = await axios.delete("https://api.escuelajs.co/api/v1/products/" + id)

            const data = res.data
            return data

        } catch (err: any) {
            throw new Error("Failed to delete product")
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
        },
        sortByPrice: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.price - b.price)

            } else {
                state.sort((a, b) => b.price - a.price)
            }
        },
        sortByCatagory: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.sort((a, b) => a.category.name.localeCompare(b.category.name))

            } else {
                state.sort((a, b) => b.category.name.localeCompare(a.category.name))
            }
        },
        filterByName: (state, action) => {
            return state.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()));
        },
    },
    extraReducers: (build) => {
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {
            if (action.payload) {
                console.log("Promise fulfilled")
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
        build.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            if (action.payload) {
                return action.payload

            } else {
                return state
            }
        })
        build.addCase(fetchProductsByCategory.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(fetchProductsByCategory.pending, (state, action) => {
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
        build.addCase(createProduct.rejected, (state, action) => {
            console.log("Error posting new data")
            return state
        })
        build.addCase(createProduct.pending, (state, action) => {
            console.log("New data pending...")
            return state
        })
    },
});

const productReducer = productSlice.reducer
export const { sortByName, sortByPrice, sortByCatagory, filterByName } = productSlice.actions
export default productReducer;