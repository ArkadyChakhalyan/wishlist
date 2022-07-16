import { TWishlistProps } from "./types";
import { FunctionComponent } from "react";
import { WishlistHeader } from "./wishlistHeader";
import { WishlistItem } from "./wishlistItem";
import { Stack } from "@mui/material";
import { AddItem } from "./addItem";

export const Wishlist: FunctionComponent<TWishlistProps> = ({
    wishlist
}) => {
    const {
        id,
        name,
        icon,
        color
    } = wishlist;

    return (
        <Stack sx={{ height: 1, width: 1 }}>
            <WishlistHeader
                name={name}
                icon={icon}
                color={color}
            />
            {
                wishlist.items && wishlist.items.map((item) => {
                        return (
                            <WishlistItem />
                        );
                })
            }
            <AddItem
                isEmpty={!wishlist.items.length}
                wishlistId={id}
            />
        </Stack>
    );
}