import { IAppState } from "../../../types";
import { IWishlist, TWishlistId } from "../types";
import { ensure } from "../../../../helpers/ensure";

export const getWishlist = (
    state: IAppState,
    id: TWishlistId
): IWishlist => {
    return ensure(state.wishlists.wishlists.find((wishlist: IWishlist) => {
        return wishlist.id === id;
    }));
}