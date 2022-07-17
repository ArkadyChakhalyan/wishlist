import { IAppState } from "../../../types";
import { TWishlistId } from "../types";
import { getWishlist } from "./getWishlist";

export const getWishlistFavorite = (
    state: IAppState,
    id: TWishlistId
): boolean => {
    const { favorite } = getWishlist(state, id);
    return favorite;
}