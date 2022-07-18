import {
    EWishlistCounter
} from "../../../components/common/wishlist/wishlistHeader/wishlistName/wishlistCounter/types";

export type TWishlistsState = {
    wishlists: IWishlist[];
    folded: boolean;
};

export interface IWishlist {
    id: TWishlistId;
    name: string;
    color: string;
    icon: EWishlistIcon;
    favorite: boolean;
    items: IWishlistItem[];
    counter: EWishlistCounter;
}

export interface IWishlistItem {
    id: TWishId;
    name: string;
    link?: string;
    done: boolean;
}

export type TWishlistId = number;

export type TWishId = number;

export enum EWishlistIcon {
    LIST = 'list',
    STARS = 'stars',
    LABEL = 'label',
    STORE = 'store',
    GIFT = 'gift',
    LOCATION = 'location',
    GLOBE = 'globe',
    BOOKMARK = 'bookmark'
}