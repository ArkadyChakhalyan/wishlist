import { TWishlistHeaderProps } from "./types";
import { alpha, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { theme } from "../../../../styles/theme";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { WISHLIST_HEADER_SETTINGS_HIDE_TOOLTIP, WISHLIST_HEADER_SETTINGS_SHOW_TOOLTIP } from "./constants";
import { WishlistName } from "./wishlistName";
import { WishlistSettings } from "./wishlistSettings";
import { useLocation, useNavigate } from "react-router-dom";

export const WishlistHeader: FunctionComponent<TWishlistHeaderProps> = ({
    wishlist
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const open = location.pathname.includes('/edit');

    const containerStyle = {
        px: 3,
        pr: 1,
        height: open ? theme.spacing(40) : theme.spacing(10),
        width: `calc(100% - ${theme.spacing(4)})`,
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: `4px 0 6px ${alpha(theme.palette.common.black, 0.2)}`,
        zIndex: theme.zIndex.appBar
    };

    const onClick = () => {
        if (open) {
            navigate(`${wishlist.id}`);
        } else {
            navigate(`${wishlist.id}/edit`);
        }
    };

    return (
        <Stack>
            <Stack sx={containerStyle} direction='row'>
               <WishlistName wishlist={wishlist} edit={open} />
                <Tooltip
                    title={
                        <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                            {
                                open ?
                                    WISHLIST_HEADER_SETTINGS_SHOW_TOOLTIP
                                    : WISHLIST_HEADER_SETTINGS_HIDE_TOOLTIP
                            }
                        </Typography>
                    }
                    disableInteractive
                    enterDelay={300}
                    enterNextDelay={300}
                    placement='left'
                >
                    <IconButton onClick={onClick}>
                        {
                            open ?
                                <ExpandMoreRoundedIcon />
                                :
                                <ExpandLessRoundedIcon />
                        }
                    </IconButton>
                </Tooltip>
            </Stack>
            {open && <WishlistSettings wishlist={wishlist} />}
        </Stack>
    );
}