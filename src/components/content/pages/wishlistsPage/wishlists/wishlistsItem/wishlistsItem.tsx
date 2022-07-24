import { TWishlistsItemProps } from "./types";
import { alpha, ListItem, styled } from "@mui/material";
import React, { FC } from "react";
import { WishlistsItemActions } from "./wishlistItemActions";
import { WishlistsItemButton } from "./wishlistItemButton";

export const WishlistsItem: FC<TWishlistsItemProps> = ({
    wishlist,
    folded
}) => {
    return (
        <Wishlist
            disablePadding
            sx={{ p: 0 }}
        >
            <WishlistsItemButton wishlist={wishlist} folded={folded} />
            {!folded && <WishlistsItemActions id={wishlist.id} />}
        </Wishlist>
    );
}

const Wishlist = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        background: alpha(theme.palette.primary.light, 0.075)
    },
    '&:focus': {
        background: alpha(theme.palette.primary.light, 0.075)
    },
    '.Mui-selected': {
        background: alpha(theme.palette.primary.light, 0.15)
    }
}))