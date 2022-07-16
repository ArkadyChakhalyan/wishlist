import { TWishlistId } from "../../../store/reducers/wishlistsReducer/types";

export type TAddItemProps = {
    wishlistId: TWishlistId;
    isEmpty: boolean;
}