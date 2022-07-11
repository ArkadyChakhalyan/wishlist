import { configureStore } from "@reduxjs/toolkit";
import wishlistsReducer from "./reducers/wishlistsReducer/wishlistsReducer";

export const store = configureStore({
    reducer: {
        wishlists: wishlistsReducer
    }
});