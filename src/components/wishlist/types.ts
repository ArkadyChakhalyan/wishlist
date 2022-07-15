import { IWishlistItem, TWishlistId } from "../../store/reducers/wishlistsReducer/types";

export interface IWishlistProps {
    id: TWishlistId;
    items: IWishlistItem[];
}