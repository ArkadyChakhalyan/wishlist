import { IWishlistsItemProps } from "./types";
import { Avatar, ListItemButton, Stack, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { theme } from "../../../../../../styles/theme";
import { WISHLIST_ICONS } from "../../../../../wishList/constants";

export const WishlistsItem = ({
    wishlist
}:IWishlistsItemProps) => {
    const {
        id,
        name,
        color,
        icon
    } = wishlist;

    const [wrap, setWrap] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (
            ref.current &&
            ref.current.offsetHeight > 24 // line height
        ) {
            setWrap(true);
        }
    }, []);

    return (
        <ListItemButton
            sx={{
                p: 1,
                pl: 2,
                pr: 9,
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <Stack
                direction='row'
                spacing={1.5}
                sx={{ alignItems: 'center', overflow: 'hidden' }}
            >
                <Avatar
                    sx={{
                        bgcolor: color,
                        height: theme.spacing(4),
                        width: theme.spacing(4)
                    }}
                    variant='rounded'
                >
                    {icon && WISHLIST_ICONS[icon]}
                </Avatar>
                {
                    wrap ?
                        <Tooltip
                            title={
                                <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                                    {wishlist.name}
                                </Typography>
                            }
                            disableInteractive
                            enterDelay={300}
                            enterNextDelay={300}
                        >
                            <Typography noWrap={wrap} ref={ref}>
                                {name}
                            </Typography>
                        </Tooltip>
                        :
                        <Typography noWrap={wrap} ref={ref}>
                            {name}
                        </Typography>
                }
            </Stack>
        </ListItemButton>
    );
}