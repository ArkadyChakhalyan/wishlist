import { IWishlist } from "../../../../../../store/reducers/wishlistsReducer/types";

export type TWishlistsItemProps = {
    wishlist: IWishlist;
    folded: boolean;
}