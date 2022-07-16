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
}

export interface IWishlistItem {
    id: TWishId;
    name: string;
    link?: string;
}

export type TWishlistId = number;

export type TWishId = number;

export enum EWishlistIcon {
    LIST = 'list'
}