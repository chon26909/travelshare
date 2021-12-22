import { configureStore } from "@reduxjs/toolkit";

//slices
import authReducer from "./slices/users/auth";

const reducers = { 
    auth: authReducer
}

export const store = configureStore({
    reducer: reducers
});