import { IAppState } from "../../../types";
import { IWishlist, TWishlistId } from "../types";

export const getWishlist = (
    state: IAppState,
    id: TWishlistId
) => {
    return state.wishlists.wishlists.find((wishlist: IWishlist) => {
        return wishlist.id === id;
    });
}