import { IWishlist } from "../../../../../../../store/reducers/wishlistsReducer/types";

export type TWishlistsItemButtonProps = {
    wishlist: IWishlist;
    folded: boolean;
}