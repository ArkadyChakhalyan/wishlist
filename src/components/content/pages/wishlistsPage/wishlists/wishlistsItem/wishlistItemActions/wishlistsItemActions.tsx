import { TWishlistsItemActionsProps } from "./types";
import { IconButton, ListItemSecondaryAction, Stack } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { WishlistsItemMenu } from "./wishlistsItemMenu";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { theme } from "../../../../../../../styles/theme";
import { WishlistFavorite } from "../../../../../../common/wishlistFavorite";

export const WishlistsItemActions: FunctionComponent<TWishlistsItemActionsProps> = ({
    id,
}) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const onMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget);
    };

    const onMenuClose = () => {
        setAnchor(null);
    };

    return (
        <ListItemSecondaryAction sx={{ right: theme.spacing() }}>
            <Stack direction='row' spacing={-1}>
                <WishlistFavorite id={id} />
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