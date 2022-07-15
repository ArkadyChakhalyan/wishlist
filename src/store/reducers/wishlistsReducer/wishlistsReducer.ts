import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishlist, TWishlistId, TWishlistsState } from "./types";

const initialState: TWishlistsState = {
    wishlists: [],
    folded: false
};

const editWishlist = (
    state: TWishlistsState,
    wishlist: IWishlist
): TWishlistsState => {
    const wishlists = state.wishlists;
    const idx = wishlists.findIndex(({ id }) => id === wishlist.id);
    return {
        ...state,
        wishlists: [
            ...wishlists.slice(0, idx),
            wishlist,
            ...wishlists.slice(idx + 1)
        ]
    };
}

const getWishlist = (
    state: TWishlistsState,
    wishlistId: TWishlistId
): IWishlist => {
    const wishlists = state.wishlists;
    const idx = wishlists.findIndex(({ id }) => id === wishlistId);
    return wishlists[idx];
}

export const wishlistsSlice = createSlice({
    name: 'wishlists',
    initialState,
    reducers: {
        addWishlistAC: (state, action: PayloadAction<IWishlist>) => {
            return {
                ...state,
                wishlists: [
                    ...state.wishlists,
                    action.payload
                ]
            };
        },
        deleteWishlistAC: (state, action: PayloadAction<TWishlistId>) => {
            const wishlists = state.wishlists;
            const idx = wishlists.findIndex(({ id }) => id === action.payload);
            return {
                ...state,
                wishlists: [
                    ...wishlists.slice(0, idx),
                    ...wishlists.slice(idx + 1)
                ]
            };
        },
        editWishlistNameAC: (state, action: PayloadAction<{ id: TWishlistId, name: string }>) => {
            const { name, id } = action.payload;

            const wishlist = getWishlist(state, id);

            if (wishlist) {
                editWishlist(state,{
                    ...wishlist,
                    name
                });
            }
        },
        toggleWishlistFavoriteAC: (state, action: PayloadAction<TWishlistId>) => {
            const wishlist = getWishlist(state, action.payload);

            if (wishlist) {
                return editWishlist(state,{
                    ...wishlist,
                    favorite: !wishlist.favorite
                });
            }
        },
        sortByFavoriteAC: (state) => {
            return {
                ...state,
                wishlists: [...state.wishlists].sort((a, b) => a.favorite === b.favorite ? 0 : b.favorite ? 1 : -1)
            };
        },
        toggleFolded: (state) => {
            return {
                ...state,
                folded: !state.folded
            }
        }
    },
})

export const {
    addWishlistAC,
    deleteWishlistAC,
    toggleWishlistFavoriteAC,
    editWishlistNameAC,
    sortByFavoriteAC,
    toggleFolded
} = wishlistsSlice.actions;

export default wishlistsSlice.reducer;