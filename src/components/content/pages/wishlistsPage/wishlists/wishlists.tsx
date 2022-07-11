import { IWishlistsProps } from "./types";
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import { theme } from "../../../../../styles/theme";
import { WishlistsItemMenu } from "./wishlistsItemMenu";
import React, { useState } from "react";
import { WishlistsItem } from "./wishlistsItem";
import { TWishlistId } from "../../../../../store/reducers/wishlistsReducer/types";
import { WISHLISTS_CREATE_BUTTON } from "../constants";
import { WISHLISTS_FAVORITE_ADD_TOOLTIP, WISHLISTS_FAVORITE_REMOVE_TOOLTIP, WISHLISTS_TITLE } from "./constants";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { yellow } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { toggleWishlistFavoriteAC } from "../../../../../store/reducers/wishlistsReducer/wishlistsReducer";

export const Wishlists = ({
    wishlists
}:IWishlistsProps) => {
    const dispatch = useDispatch();

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const [activeMenuListId, setActiveMenuListId] = useState<TWishlistId>(0);

    const onMenuOpen = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: TWishlistId
    ) => {
        setAnchor(e.currentTarget);
        setActiveMenuListId(id);
    };

    const onMenuClose = () => {
        setAnchor(null);
    };

    const onToggleFavorite = (id: TWishlistId) => {
        dispatch(toggleWishlistFavoriteAC(id));
    };

    return (
        <Box
            sx={{
                width: theme.spacing(37),
            }}
        >
            <Stack direction='row' sx={{ p: 2, pb: 0 }}>
                <Typography variant='h6'>
                    {WISHLISTS_TITLE}
                </Typography>
            </Stack>
            <List sx={{ pb: 0 }}>
                {
                    wishlists.map((wishlist) => {
                        const { id, favorite } = wishlist;
                        return (
                            <ListItem
                                key={id}
                                disablePadding
                                sx={{ p: 0 }}
                            >
                                <WishlistsItem wishlist={wishlist} />
                                <ListItemSecondaryAction sx={{ right: 0 }}>
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
                                            <IconButton onClick={() => onToggleFavorite(id)}>
                                                {
                                                    favorite ?
                                                        <StarRateRoundedIcon sx={{ color: yellow[600] }} />
                                                        : <StarBorderRoundedIcon />
                                                }
                                            </IconButton>
                                        </Tooltip>
                                        <IconButton
                                            onClick={(e) => onMenuOpen(e, id)}
                                        >
                                            <MoreVertRoundedIcon />
                                        </IconButton>
                                    </Stack>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })
                }
            </List>
            <Button
                fullWidth
                size='large'
            >
                {WISHLISTS_CREATE_BUTTON}
            </Button>
            <WishlistsItemMenu
                anchor={anchor}
                onClose={onMenuClose}
                id={activeMenuListId}
            />
        </Box>
    );
}