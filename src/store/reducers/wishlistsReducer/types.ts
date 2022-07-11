export type TWishlistsState = IWishlist[];

export interface IWishlist {
    id: TWishlistId;
    name: string;
    color?: string;
    icon?: EWishlistIcon;
    favorite?: boolean;
}

export type TWishlistId = number;

export enum EWishlistIcon {
    LIST = 'list'
}