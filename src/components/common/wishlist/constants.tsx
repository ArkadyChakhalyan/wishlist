import { messages } from "../../app/constants";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import { theme } from "../../../styles/theme";
import { deepPurple } from "@mui/material/colors";
import { EWishlistIcon } from "../../../store/reducers/wishlistsReducer/types";

export const WISHLISTS_CREATE_PLACEHOLDER = messages.wishlistsPage.wishlists.create.placeholder;
export const WISHLISTS_DEFAULT_NAME = messages.wishlistsPage.wishlists.create.defaultName;

export const DEFAULT_WISHLIST = {
    name: WISHLISTS_DEFAULT_NAME,
    color: deepPurple[700],
    icon: EWishlistIcon.LIST,
    favorite: false,
    items: [],
}

export const WISHLIST_ICONS = {
    list: <FormatListBulletedRoundedIcon sx={{ height: theme.spacing(2.5), width: theme.spacing(2.5) }}/>
}