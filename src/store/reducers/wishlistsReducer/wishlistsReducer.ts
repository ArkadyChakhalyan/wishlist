import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EWishlistIcon, IWishlist, IWishlistItem, TWishId, TWishlistId, TWishlistsState } from "./types";
import {
    EWishlistCounter
} from "../../../components/common/wishlist/wishlistHeader/wishlistName/wishlistCounter/types";

const initialState: TWishlistsState = {
    wishlists: [],
    folded: false
};

const getWishlist = (
    state: TWishlistsState,
    wishlistId: TWishlistId
): IWishlist => {
    const wishlists = state.wishlists;
    const idx = wishlists.findIndex(({ id }) => id === wishlistId);
    return wishlists[idx];
}

const getWishlistItem = (
    state: TWishlistsState,
    wishlistId: TWishlistId,
    itemId: TWishId
): IWishlistItem => {
    const items = getWishlist(state, wishlistId).items;
    const idx = items.findIndex(({ id }) => id === itemId);
    return items[idx];
}

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

const editWishlistItem = (
    state: TWishlistsState,
    wishlistId: TWishlistId,
    item: IWishlistItem
): TWishlistsState => {
    const wishlistItems = getWishlist(state, wishlistId).items;
    const idx = wishlistItems.findIndex(({ id }) => id === item.id);

    const newWishlistItems = [
        ...wishlistItems.slice(0, idx),
        item,
        ...wishlistItems.slice(idx + 1)
    ];

    return editWishlistItems(state, wishlistId, newWishlistItems);
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

            return editWishlist(state,{
                ...wishlist,
                name
            });
        },
        editWishlistIconAC: (state, action: PayloadAction<{ id: TWishlistId, icon: EWishlistIcon }>) => {
            const { icon, id } = action.payload;

            const wishlist = getWishlist(state, id);

            return editWishlist(state,{
                ...wishlist,
                icon
            });
        },
        editWishlistColorAC: (state, action: PayloadAction<{ id: TWishlistId, color: string }>) => {
            const { color, id } = action.payload;

            const wishlist = getWishlist(state, id);

            return editWishlist(state,{
                ...wishlist,
                color
            });
        },
        editWishlistCounterAC: (state, action: PayloadAction<{ id: TWishlistId, counter: EWishlistCounter }>) => {
            const { counter, id } = action.payload;

            const wishlist = getWishlist(state, id);

            return editWishlist(state,{
                ...wishlist,
                counter
            });
        },
        toggleWishlistFavoriteAC: (state, action: PayloadAction<TWishlistId>) => {
            const wishlists = state.wishlists;
            const idx = wishlists.findIndex(({ id }) => id === action.payload);

            return {
                ...state,
                wishlists: [
                    ...wishlists.slice(0, idx),
                    {...wishlists[idx], favorite: !wishlists[idx].favorite},
                    ...wishlists.slice(idx + 1)
                ].sort((a, b) => a.favorite === b.favorite ? 0 : b.favorite ? 1 : -1)
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
        deleteWishlistItemAC: (state, action: PayloadAction<{ wishlistId: TWishlistId, itemId: TWishId }>) => {
            const { itemId, wishlistId } = action.payload;

            const wishlistItems = getWishlist(state, wishlistId).items;
            const idx = wishlistItems.findIndex(({ id }) => id === itemId);

            const newWishlistItems = [
                ...wishlistItems.slice(0, idx),
                ...wishlistItems.slice(idx + 1)
            ];

            return editWishlistItems(state, wishlistId, newWishlistItems);
        },
        toggleWishlistItemDoneAC: (state,  action: PayloadAction<{ wishlistId: TWishlistId, itemId: TWishId }>) => {
            const { wishlistId, itemId } = action.payload;

            const wishlist = getWishlist(state, wishlistId);
            const items = wishlist.items;

            const idx = wishlist.items.findIndex(({ id }) => id === itemId);
            const newItems = [
                ...items.slice(0, idx),
                { ...items[idx], done: !items[idx].done },
                ...items.slice(idx + 1)
            ];

            return editWishlist(state, {
                ...wishlist,
                items: [...newItems].sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1)
            });
        },
        editWishlistItemNameAC: (state,  action: PayloadAction<{ wishlistId: TWishlistId, itemId: TWishId, name: string }>) => {
            const { wishlistId, itemId, name } = action.payload;

            const item = getWishlistItem(state, wishlistId, itemId);

            return editWishlistItem(state, wishlistId, { ...item, name });
        },
        editWishlistItemLinkAC: (state,  action: PayloadAction<{ wishlistId: TWishlistId, itemId: TWishId, link: string }>) => {
            const { wishlistId, itemId, link } = action.payload;

            const item = getWishlistItem(state, wishlistId, itemId);

            return editWishlistItem(state, wishlistId, { ...item, link });
        }
    },
})

export const {
    addWishlistAC,
    deleteWishlistAC,
    toggleWishlistFavoriteAC,
    editWishlistNameAC,
    editWishlistIconAC,
    editWishlistColorAC,
    editWishlistCounterAC,
    addWishlistItemAC,
    deleteWishlistItemAC,
    editWishlistItemNameAC,
    toggleWishlistItemDoneAC,
    toggleFoldedAC,
    editWishlistItemLinkAC
} = wishlistsSlice.actions;

export default wishlistsSlice.reducer;