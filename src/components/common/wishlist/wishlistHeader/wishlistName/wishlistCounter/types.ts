import { IWishlistItem, TWishlistId } from "../../../../../../store/reducers/wishlistsReducer/types";

export type TWishlistCounterProps = {
    items: IWishlistItem[];
    id: TWishlistId;
    edit: boolean;
    type: EWishlistCounter
}

export enum EWishlistCounter {
    NONE = 'none',
    ITEMS = 'items',
    PERCENTAGE = 'percentage'
}