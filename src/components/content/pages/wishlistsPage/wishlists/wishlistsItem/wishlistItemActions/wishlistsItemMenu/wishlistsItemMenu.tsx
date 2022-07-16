import { TWishlistsItemMenuProps } from "./types";
import { ListItemIcon, ListItemText, Menu, MenuItem, Paper } from "@mui/material";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import {
    WISHLIST_ITEM_MENU_DELETE,
    WISHLIST_ITEM_MENU_DUPLICATE,
    WISHLIST_ITEM_MENU_DUPLICATE_PREFIX,
    WISHLIST_ITEM_MENU_EDIT,
    WISHLIST_ITEM_MENU_SHARE
} from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../../../../../../../store/types";
import { getWishlist } from "../../../../../../../../store/reducers/wishlistsReducer/selectors/getWishlist";
import {
    addWishlistAC,
    deleteWishlistAC
} from "../../../../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { FunctionComponent } from "react";

export const WishlistsItemMenu: FunctionComponent<TWishlistsItemMenuProps> = ({
    anchor,
    id,
    onClose
}) => {
    const dispatch = useDispatch();

    const wishlistToCopy = useSelector((state: IAppState) => getWishlist(state, id));

    const onDuplicate = () => {
        const wishlist = {
            ...wishlistToCopy,
            name: WISHLIST_ITEM_MENU_DUPLICATE_PREFIX + wishlistToCopy!.name,
            favorite: false,
            id: Date.now()
        };
        dispatch(addWishlistAC(wishlist));
        onClose();
    };

    const onDelete = () => {
        dispatch(deleteWishlistAC(id));
        onClose();
    };

    return (
        <Paper>
            <Menu
                anchorEl={anchor}
                open={!!anchor}
                onClose={onClose}
            >
                <MenuItem onClick={onClose}>
                    <ListItemIcon>
                        <EditRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {WISHLIST_ITEM_MENU_EDIT}
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={onDuplicate}>
                    <ListItemIcon>
                        <ContentCopyRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {WISHLIST_ITEM_MENU_DUPLICATE}
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={onDuplicate}>
                    <ListItemIcon>
                        <ReplyRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {WISHLIST_ITEM_MENU_SHARE}
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={onDelete}>
                    <ListItemIcon>
                        <DeleteOutlineRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>
                        {WISHLIST_ITEM_MENU_DELETE}
                    </ListItemText>
                </MenuItem>
            </Menu>
        </Paper>
    );
}