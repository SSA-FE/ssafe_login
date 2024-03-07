import { createSlice } from "@reduxjs/toolkit";

export interface userState {
    isUser: Boolean;
}

const initialState: userState = {
    isUser: false
}

export const rootReduer = createSlice({
    name: "root",
    initialState,
    reducers: {
        login: (state) => {
            state.isUser = true;
        },
        logout: (state) => {
            state.isUser = false;
        }
    }
})

export const { login, logout } = rootReduer.actions;

export default rootReduer.reducer;