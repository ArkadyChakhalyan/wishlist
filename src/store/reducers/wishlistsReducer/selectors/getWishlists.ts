import { IAppState } from "../../../types";
import { IWishlist } from "../types";

export const getWishlists = (
    state: IAppState
): IWishlist[] => {
    return state.wishlists.wishlists;
}