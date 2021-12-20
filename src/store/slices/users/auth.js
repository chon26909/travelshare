import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const login = createAsyncThunk("auth/login", async ({email, password}, thunkAPI) => {

// })

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        loading: false,
        error: false,
        message: '',
        isLoggedIn: true,
        r: 'general'
    },
    reducers: {
        startLoading: (state) => {
            state.isLoggedIn = true
        }
    }
})


//reducers
export default authSlice.reducer;