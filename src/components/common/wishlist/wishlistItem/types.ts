import { IWishlistItem, TWishlistId } from "../../../../store/reducers/wishlistsReducer/types";

export type TWishlistItemProps = {
    item: IWishlistItem;
    wishlistId: TWishlistId;
}