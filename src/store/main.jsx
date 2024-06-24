import {configureStore} from "@reduxjs/toolkit";
import darkModeSlice from "../features/darkModeSlice.jsx";

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice
    }
})