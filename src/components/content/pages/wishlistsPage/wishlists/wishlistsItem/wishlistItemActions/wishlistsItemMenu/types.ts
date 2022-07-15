import { TWishlistId } from "../../../../../../../../store/reducers/wishlistsReducer/types";

export type TWishlistsItemMenuProps = {
    anchor: HTMLElement | null;
    id: TWishlistId;
    onClose: () => void;
}