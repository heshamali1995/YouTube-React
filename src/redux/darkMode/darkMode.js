import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: true
}

const darkModeSlice = createSlice({
    name: "dark",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.darkMode = !state.darkMode
        }
    }
});

const { toggleMode } = darkModeSlice.actions;

export {
    darkModeSlice,
    toggleMode
}