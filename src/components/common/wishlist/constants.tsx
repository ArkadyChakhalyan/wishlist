import { messages } from "../../app/constants";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import { theme } from "../../../styles/theme";
import { amber, blue, blueGrey, cyan, deepPurple, green, pink, red } from "@mui/material/colors";
import { EWishlistIcon } from "../../../store/reducers/wishlistsReducer/types";
import { EWishlistCounter } from "./wishlistHeader/wishlistName/wishlistCounter/types";

export const WISHLISTS_CREATE_PLACEHOLDER = messages.wishlistsPage.wishlists.create.placeholder;
export const WISHLISTS_DEFAULT_NAME = messages.wishlistsPage.wishlists.create.defaultName;

export const DEFAULT_WISHLIST = {
    name: WISHLISTS_DEFAULT_NAME,
    color: blue[800],
    icon: EWishlistIcon.LIST,
    favorite: false,
    items: [],
    counter: EWishlistCounter.ITEMS
}

const iconStyle = {
    height: theme.spacing(2.5),
    width: theme.spacing(2.5)
};

export const WISHLIST_ICONS = {
    list: <FormatListBulletedRoundedIcon sx={iconStyle}/>,
    stars: <AutoAwesomeRoundedIcon sx={iconStyle}/>,
    label: <SellRoundedIcon sx={iconStyle}/>,
    store: <StoreRoundedIcon sx={iconStyle}/>,
    gift: <CardGiftcardRoundedIcon sx={iconStyle}/>,
    location: <LocationOnRoundedIcon sx={iconStyle}/>,
    globe: <PublicRoundedIcon sx={iconStyle}/>,
    bookmark: <BookmarksRoundedIcon sx={iconStyle}/>,
};

export const WISHLIST_COLORS = [
    red[800],
    pink[800],
    amber[800],
    green[800],
    cyan[800],
    blueGrey[800],
    deepPurple[800],
    blue[800]
];