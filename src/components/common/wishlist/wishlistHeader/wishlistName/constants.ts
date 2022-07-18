import { messages } from "../../../../app/constants";
import { WISHLIST_ICONS } from "../../constants";
import { EWishlistIcon } from "../../../../../store/reducers/wishlistsReducer/types";

export const WISHLIST_SETTINGS_NAME_PLACEHOLDER = messages.wishlist.header.settings.name.placeholder;
export const WISHLIST_SETTINGS_NAME_LABEL = messages.wishlist.header.settings.name.label;
export const WISHLIST_SETTINGS_ICON_TOOLTIP = messages.wishlist.header.settings.icon.tooltip;
export const WISHLIST_SETTINGS_COLOR_TOOLTIP = messages.wishlist.header.settings.color.tooltip;

export const WISHLIST_ICONS_NAMES: EWishlistIcon[] = [];

for (let icon in WISHLIST_ICONS) {
    const iconName = icon as EWishlistIcon;
    WISHLIST_ICONS_NAMES.push(iconName);
}
