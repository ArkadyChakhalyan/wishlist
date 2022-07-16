import { TWishlistsProps } from "./types";
import { alpha, Box, Button, IconButton, List } from "@mui/material";
import { theme } from "../../../../../styles/theme";
import React, { FunctionComponent } from "react";
import { WishlistsItem } from "./wishlistsItem";
import { WISHLISTS_CREATE_BUTTON } from "../constants";
import { useDispatch } from "react-redux";
import { DEFAULT_WISHLIST } from "../../../../wishlist/constants";
import { addWishlistAC } from "../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { WishlistsHeader } from "./wishlistsHeader";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useNavigate } from "react-router-dom";

export const Wishlists: FunctionComponent<TWishlistsProps> = ({
    wishlists,
    folded
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onAdd = () => {
        const id = Date.now();

        const wishlist = {
            ...DEFAULT_WISHLIST,
            id
        };

        dispatch(addWishlistAC(wishlist));
        navigate(`${id}`);
    };

    const containerStyle = {
        width: folded ? theme.spacing(8) : theme.spacing(40),
        boxShadow: `4px 0 6px ${alpha(theme.palette.common.black, 0.1)}`,
        overflow: 'hidden'
    }

    const listStyle = {
        py: 0,
        maxHeight: `calc(100% - ${folded ? theme.spacing(14) : theme.spacing(13)})`,
        overflow: 'auto'
    };

    return (
        <Box sx={containerStyle}>
            <WishlistsHeader folded={folded} />
            <List sx={listStyle}>
                {
                    wishlists.map((wishlist) => (
                        <WishlistsItem
                            key={wishlist.id}
                            wishlist={wishlist}
                            folded={folded}
                        />
                    ))
                }
            </List>
            <Box
                sx={{
                    height: 1,
                    boxShadow: `-4px 0 6px ${alpha(theme.palette.common.black, 0.1)}`
                }}
            >
                {
                    folded ?
                        <IconButton
                            onClick={onAdd}
                            color='primary'
                            size='large'
                            sx={{ ml: 1, my: 0.5 }}
                        >
                            <AddRoundedIcon />
                        </IconButton>
                        :
                        <Button
                            fullWidth
                            size='large'
                            onClick={onAdd}
                            sx={{
                                height: theme.spacing(6),
                                borderRadius: 0
                            }}
                        >
                            {WISHLISTS_CREATE_BUTTON}
                        </Button>
                }
            </Box>
        </Box>
    );
}