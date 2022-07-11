import { TWishlistId } from "../../../../../../store/reducers/wishlistsReducer/types";

export interface IWishlistsItemMenuProps {
    anchor: HTMLElement | null;
    id: TWishlistId;
    onClose: () => void;
}