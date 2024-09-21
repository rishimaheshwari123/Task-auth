import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setToken(state, actions) {
            state.token = actions.payload;
            localStorage.setItem("token", JSON.stringify(actions.payload))
        },
    },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
