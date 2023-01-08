import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { User } from "../../types/user"

const initialState: User[] = []

export const fetchUsers = createAsyncThunk(
    "fetchUsers",
    async () => {
        try {
            const res: AxiosResponse<User[], User[]> =  await axios.get('https://api.escuelajs.co/api/v1/users')
            return res.data

        } catch (err: any) {

            console.log(err)
        }
    }
)

export const createUser = createAsyncThunk(
    "createUser",
    async () => {
        try {
            const res: AxiosResponse<User, User> = await axios.post('https://api.escuelajs.co/api/v1/users/')
            return res.data

        } catch (err: any) {

            console.log(err)
        }
    }
)

export const updateUser = createAsyncThunk(
    "updateUser",
    async (user: User) => {
        try {
            const res = await axios.put(`https://api.escuelajs.co/api/v1/users/${user.id}`)
            return res.data
        } catch (err: any) {
            
            console.log(err)
        }
    }
)

export const checkEmail = createAsyncThunk(
    "checkEmail",
    async () => {
        try {
            const res: AxiosResponse<User[], User[]> = await axios.post('https://api.escuelajs.co/api/v1/users/is-available')
            return res.data

        } catch (err: any) {

            console.log(err)
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchUsers.fulfilled, (state, action) => {
            if (action.payload) {
                console.log("Promise fulfilled")
                return action.payload
                
            } else {
                return state
            }
        }),
        build.addCase(fetchUsers.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(fetchUsers.pending, (state, action) => {
            console.log("Data is loading...")
            return state
        }),
        build.addCase(createUser.fulfilled, (state, action) => {
            //remember to make createUser interface!
            
        })
        build.addCase(createUser.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(createUser.pending, (state, action) => {
            console.log("Data is loading...")
            return state
        })

    }
})




