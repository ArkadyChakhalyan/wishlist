import { TWishlistsItemProps } from "./types";
import { ListItem } from "@mui/material";
import React, { FunctionComponent } from "react";
import { WishlistsItemActions } from "./wishlistItemActions";
import { WishlistsItemButton } from "./wishlistItemButton";

export const WishlistsItem: FunctionComponent<TWishlistsItemProps> = ({
    wishlist,
    folded
}) => {
    return (
        <ListItem
            disablePadding
            sx={{ p: 0 }}
        >
            <WishlistsItemButton wishlist={wishlist} folded={folded} />
            {!folded && <WishlistsItemActions id={wishlist.id} />}
        </ListItem>
    );
}