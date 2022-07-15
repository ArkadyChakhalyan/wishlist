import { IWishlist } from "../../../../../store/reducers/wishlistsReducer/types";

export type TWishlistsProps = {
    wishlists: IWishlist[];
    folded: boolean;
}