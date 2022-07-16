import { TWishlistProps } from "./types";
import { FunctionComponent } from "react";
import { WishlistHeader } from "./wishlistHeader";
import { WishlistItem } from "./wishlistItem";
import { Stack } from "@mui/material";
import { AddItem } from "./addItem";
import { theme } from "../../styles/theme";

export const Wishlist: FunctionComponent<TWishlistProps> = ({
    wishlist
}) => {
    const {
        id,
        name,
        icon,
        color,
        items
    } = wishlist;

    const listStyle = {
        height: `calc(100% - ${theme.spacing(10)})`,
        overflow: 'auto'
    };

    return (
        <Stack sx={{ height: 1, width: 1 }}>
            <WishlistHeader
                name={name}
                icon={icon}
                color={color}
            />
            {
                !!items.length &&
                <Stack spacing={2} sx={listStyle}>
                    <Stack spacing={2} sx={{ p: 2, px: 4 }}>
                        {
                            items.map(item => (
                                <WishlistItem item={item} wishlistId={id}/>
                            ))
                        }
                    </Stack>
                </Stack>
            }
            <AddItem
                isEmpty={!wishlist.items.length}
                wishlistId={id}
            />
        </Stack>
    );
}