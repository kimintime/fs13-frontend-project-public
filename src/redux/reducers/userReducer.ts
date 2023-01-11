import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { User, UserList, CreateUser, Credentials, ReturnedCredentials } from "../../types/user"

const initialState: UserList = {
    userList: [],
    currentUser: {
        id: 0,
        name: "Guest",
        role: "customer",
        email: "",
        password: "",
        avatar: ""
    }
}

export const fetchUsers = createAsyncThunk(
    "fetchUsers",
    async () => {
        try {
            const res = await axios.get('https://api.escuelajs.co/api/v1/users')
            return res.data

        } catch (err: any) {

            const error = err as AxiosError
            return error
        }
    }
)

export const createUser = createAsyncThunk(
    "createUser",
    async (user: CreateUser) => {
        try {
            const res = await axios.post('https://api.escuelajs.co/api/v1/users/', user)
            return res.data

        } catch (err: any) {

            throw new Error("Cannot add new user")
        }
    }
)

// export const createUser = createAsyncThunk(
//     "createUser",
//     async (user: CreateUser) => {
//       try {
//         const response = await axios.post(
//           "https://api.escuelajs.co/api/v1/users/",
//           user
//         );
//         const data: User | Error = response.data;
//         return data;
//       } catch (e) {
//         throw new Error("Cannot add new user");
//       }
//     }
//   );

export const updateUser = createAsyncThunk(
    "updateUser",
    async (user: User) => {
        try {
            const res = await axios.put('https://api.escuelajs.co/api/v1/users/' + user.id,
                {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                }
            )

            return res.data
        } catch (err: any) {

            throw new Error("Could not update user")
        }
    }
)

export const userLogin = createAsyncThunk(
    "userLogin",
    async (access_token: string) => {
        try {
            const res = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })

            const data: User = await res.data
            return data

        } catch (err: any) {

            throw new Error("Login failed")
        }
    }
)

export const authenticateCredentials = createAsyncThunk(
    "authenticateCredentials",
    async ({ email, password }: Credentials, thunkAPI) => {
        try {
            const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', { email, password })
            const data: ReturnedCredentials = res.data

            const result = await thunkAPI.dispatch(userLogin(data.access_token))
            return result.payload as User

        } catch (err: any) {

            const error = err as AxiosError
            return error
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        logoutUser: (state) => {
            state = initialState
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchUsers.fulfilled, (state, action) => {
            if (action.payload) {
                console.log("Promise fulfilled")
                return state.userList = action.payload
            } else {
                return state
            }
        })
        build.addCase(fetchUsers.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(fetchUsers.pending, (state, action) => {
            console.log("Data is loading...")
            return state
        })
        build.addCase(createUser.fulfilled, (state, action) => {
            return state
        })
        build.addCase(createUser.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(createUser.pending, (state, action) => {
            console.log("Data is loading...")
            return state
        })
        build.addCase(updateUser.fulfilled, (state, action: PayloadAction<UserList>) => {
            return action.payload;
        })
        build.addCase(updateUser.pending, (state, action) => {
            console.log("Data is pending...")
            return state
        })
        build.addCase(updateUser.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(userLogin.fulfilled, (state, action) => {
            if (action.payload instanceof AxiosError) {
                return state

            } else {
                state.currentUser = action.payload
            }
        })
        build.addCase(userLogin.pending, (state, action) => {
            console.log("Data is loading...")
            return state
        })
        build.addCase(userLogin.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(authenticateCredentials.fulfilled, (state, action) => {
            if (action.payload instanceof AxiosError) {
                return state

            } else {

                state.currentUser = action.payload
            }
        })
        build.addCase(authenticateCredentials.rejected, (state, action) => {
            console.log("Error fetching data")
            return state
        })
        build.addCase(authenticateCredentials.pending, (state, action) => {
            console.log("Data is pending...")
            return state
        })

    }
})

const userReducer = userSlice.reducer
export const {logoutUser} = userSlice.actions
export default userReducer



