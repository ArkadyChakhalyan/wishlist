import { messages } from "../../../../../app/constants";
import { EWishlistCounter } from "./types";

export const WISHLIST_SETTINGS_COUNTER_LABEL = messages.wishlist.header.settings.counter.label;

export const WISHLIST_COUNTER_OPTIONS: IWishlistCounterOption[] = [
    {
        label: messages.wishlist.header.settings.counter.none,
        value: EWishlistCounter.NONE
    },
    {
        label: messages.wishlist.header.settings.counter.items,
        value: EWishlistCounter.ITEMS
    },
    {
        label: messages.wishlist.header.settings.counter.percentage,
        value: EWishlistCounter.PERCENTAGE
    }
];

interface IWishlistCounterOption {
    label: string;
    value: EWishlistCounter | null;
}
