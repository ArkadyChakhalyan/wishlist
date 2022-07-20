import { TWishId, TWishlistId } from "../../../../../store/reducers/wishlistsReducer/types";

export type TWishlistItemNameProps = {
    itemId: TWishId;
    name: string;
    wishlistId: TWishlistId;
    edit: boolean;
}