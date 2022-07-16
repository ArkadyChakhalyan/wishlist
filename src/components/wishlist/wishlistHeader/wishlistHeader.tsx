import { TWishlistHeaderProps } from "./types";
import { alpha, Avatar, Stack, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { theme } from "../../../styles/theme";
import { WISHLIST_ICONS } from "../constants";

export const WishlistHeader: FunctionComponent<TWishlistHeaderProps> = ({
    name,
    icon,
    color
}) => {
    const containerStyle = {
        px: 3,
        height: theme.spacing(10),
        width: `calc(100% - ${theme.spacing(6)})`,
        justifyContent: 'center',
        boxShadow: `4px 0 6px ${alpha(theme.palette.common.black, 0.1)}`
    };

    return (
        <Stack sx={containerStyle}>
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
                <Typography variant='h6' fontSize={18}>
                    {name}
                </Typography>
            </Stack>
        </Stack>
    );
}