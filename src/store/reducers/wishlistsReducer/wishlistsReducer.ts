import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishlist, TWishlistId, TWishlistsState } from "./types";

const initialState: TWishlistsState = [];

const editWishlist = (
    state: TWishlistsState,
    wishlist: IWishlist
) => {
    const idx = state.findIndex(({ id }) => id === wishlist.id);
    return [
        ...state.slice(0, idx),
        wishlist,
        ...state.slice(idx + 1)
    ];
}

export const wishlistsSlice = createSlice({
    name: 'wishlists',
    initialState,
    reducers: {
        addWishlistAC: (state, action: PayloadAction<IWishlist>) => {
            return [
                ...state,
                action.payload
            ];
        },
        deleteWishlistAC: (state, action: PayloadAction<TWishlistId>) => {
            const idx = state.findIndex(({ id }) => id === action.payload);
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ];
        },
        editWishlistNameAC: (state, action: PayloadAction<{ id: TWishlistId, name: string }>) => {
            const { name, id } = action.payload;
            const wishlist = state.find(wishlist => wishlist.id === id);

            if (wishlist) {
                editWishlist(state,{
                    ...wishlist,
                    name
                });
            }
        },
        toggleWishlistFavoriteAC: (state, action: PayloadAction<TWishlistId>) => {
            const wishlist = state.find(({ id }) => id === action.payload);

            if (wishlist) {
                return editWishlist(state,{
                    ...wishlist,
                    favorite: !wishlist.favorite
                });
            }
        },

    },
})

export const {
    addWishlistAC,
    deleteWishlistAC,
    toggleWishlistFavoriteAC,
    editWishlistNameAC
} = wishlistsSlice.actions;

export default wishlistsSlice.reducer;