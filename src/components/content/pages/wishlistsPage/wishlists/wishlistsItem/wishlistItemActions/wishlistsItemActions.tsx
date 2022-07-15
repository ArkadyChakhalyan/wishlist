import { TWishlistsItemActionsProps } from "./types";
import { IconButton, ListItemSecondaryAction, Stack, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { WishlistsItemMenu } from "./wishlistsItemMenu";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { yellow } from "@mui/material/colors";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { useDispatch } from "react-redux";
import {
    sortByFavoriteAC,
    toggleWishlistFavoriteAC
} from "../../../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { WISHLISTS_FAVORITE_ADD_TOOLTIP, WISHLISTS_FAVORITE_REMOVE_TOOLTIP } from "./constants";
import { theme } from "../../../../../../../styles/theme";

export const WishlistsItemActions: FunctionComponent<TWishlistsItemActionsProps> = ({
    id,
    favorite
}) => {
    const dispatch = useDispatch();

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const onMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget);
    };

    const onMenuClose = () => {
        setAnchor(null);
    };

    const onToggleFavorite = () => {
        dispatch(toggleWishlistFavoriteAC(id));
        dispatch(sortByFavoriteAC())
    };

    return (
        <ListItemSecondaryAction sx={{ right: theme.spacing() }}>
            <Stack direction='row' spacing={-1}>
                <Tooltip
                    title={
                        <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                            {
                                favorite ?
                                    WISHLISTS_FAVORITE_REMOVE_TOOLTIP
                                    : WISHLISTS_FAVORITE_ADD_TOOLTIP
                            }
                        </Typography>
                    }
                    disableInteractive
                    enterDelay={300}
                    enterNextDelay={300}
                >
                    <IconButton onClick={onToggleFavorite}>
                        {
                            favorite ?
                                <StarRateRoundedIcon sx={{ color: yellow[600] }} />
                                : <StarBorderRoundedIcon />
                        }
                    </IconButton>
                </Tooltip>
                <IconButton
                    onClick={onMenuOpen}
                >
                    <MoreVertRoundedIcon />
                </IconButton>
                <WishlistsItemMenu
                    anchor={anchor}
                    onClose={onMenuClose}
                    id={id}
                />
            </Stack>
        </ListItemSecondaryAction>
    );
}