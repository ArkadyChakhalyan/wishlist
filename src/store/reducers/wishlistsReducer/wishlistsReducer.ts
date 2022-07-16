import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishlist, IWishlistItem, TWishId, TWishlistId, TWishlistsState } from "./types";

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

const editWishlistItems = (
    state: TWishlistsState,
    wishlistId: TWishlistId,
    wishlistItems: IWishlistItem[]
): TWishlistsState => {
    const wishlist = getWishlist(state, wishlistId);

    return editWishlist(state,{
        ...wishlist,
        items: wishlistItems
    });
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

            editWishlist(state,{
                ...wishlist,
                name
            });
        },
        toggleWishlistFavoriteAC: (state, action: PayloadAction<TWishlistId>) => {
            const wishlist = getWishlist(state, action.payload);

            return editWishlist(state,{
                ...wishlist,
                favorite: !wishlist.favorite
            });
        },
        sortByFavoriteAC: (state) => {
            return {
                ...state,
                wishlists: [...state.wishlists].sort((a, b) => a.favorite === b.favorite ? 0 : b.favorite ? 1 : -1)
            };
        },
        toggleFoldedAC: (state) => {
            return {
                ...state,
                folded: !state.folded
            }
        },
        addWishlistItemAC: (state, action: PayloadAction<{ id: TWishlistId, item: IWishlistItem }>) => {
            const { item, id } = action.payload;

            const wishlistItems = getWishlist(state, id).items;

            return editWishlistItems(state, id, [
                item,
                ...wishlistItems
            ]);
        },
        deleteWishlistItemAC: (state, action: PayloadAction<{ id: TWishlistId, itemId: TWishId }>) => {
            const { itemId, id } = action.payload;

            const wishlistItems = getWishlist(state, id).items;
            const idx = wishlistItems.findIndex(({ id }) => id === itemId);

            const newWishlistItems = [
                ...wishlistItems.slice(0, idx),
                ...wishlistItems.slice(idx + 1)
            ];

            return editWishlistItems(state, id, newWishlistItems);
        },
        editWishlistItemAC: (state, action: PayloadAction<{ id: TWishlistId, item: IWishlistItem }>) => {
            const { item, id } = action.payload;

            const wishlistItems = getWishlist(state, id).items;
            const idx = wishlistItems.findIndex(({ id }) => id === item.id);

            const newWishlistItems = [
                ...wishlistItems.slice(0, idx),
                item,
                ...wishlistItems.slice(idx + 1)
            ];

            return editWishlistItems(state, id, newWishlistItems);
        },
    },
})

export const {
    addWishlistAC,
    deleteWishlistAC,
    toggleWishlistFavoriteAC,
    editWishlistNameAC,
    sortByFavoriteAC,
    addWishlistItemAC,
    deleteWishlistItemAC,
    editWishlistItemAC,
    toggleFoldedAC
} = wishlistsSlice.actions;

export default wishlistsSlice.reducer;