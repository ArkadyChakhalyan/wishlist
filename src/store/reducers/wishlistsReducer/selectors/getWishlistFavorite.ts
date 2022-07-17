import { IAppState } from "../../../types";
import { TWishlistId } from "../types";

export const getWishlistFavorite = (
    state: IAppState,
    wishlistId: TWishlistId
): boolean => {
    return state.wishlists.wishlists[wishlistId].favorite;
}