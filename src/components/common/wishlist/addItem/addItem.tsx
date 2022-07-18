import { TAddItemProps } from "./types";
import { alpha, Box, IconButton, styled, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { theme } from "../../../../styles/theme";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { ADD_WISHLIST_ITEM_BUTTON, ADD_WISHLIST_ITEM_TEXT, ADD_WISHLIST_ITEM_TOOLTIP } from "./constants";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { Empty } from "../../empty";
import { useDispatch } from "react-redux";
import { addWishlistItemAC } from "../../../../store/reducers/wishlistsReducer/wishlistsReducer";

export const AddItem: FunctionComponent<TAddItemProps> = ({
    wishlistId,
    onClick,
    isEmpty
}) => {
    const dispatch = useDispatch();

    const onAdd = () => {
        onClick();

        const item = {
            id: Date.now(),
            name: '',
            done: false
        };

        dispatch(addWishlistItemAC({ id: wishlistId, item }));
    };

    return (
        <>
            {
                isEmpty ?
                    <Box sx={{ height: `calc(100% - ${theme.spacing(10)})` }}>
                        <Empty
                            icon={
                                <AutoAwesomeRoundedIcon
                                    sx={{
                                        width: theme.spacing(18),
                                        height: theme.spacing(18),
                                        color: alpha(theme.palette.primary.main, 0.15)
                                    }}
                                />
                            }
                            text={ADD_WISHLIST_ITEM_TEXT}
                            buttonText={ADD_WISHLIST_ITEM_BUTTON}
                            onClick={onAdd}
                        />
                    </Box>
                    :
                    <Tooltip
                        title={
                            <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                                {ADD_WISHLIST_ITEM_TOOLTIP}
                            </Typography>
                        }
                        disableInteractive
                        enterDelay={300}
                        enterNextDelay={300}
                        placement='left'
                    >
                        <AddButton
                            onClick={onAdd}
                            size='large'
                        >
                            <AddRoundedIcon />
                        </AddButton>
                    </Tooltip>
            }
        </>
    );
}

const AddButton = styled(IconButton)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(4.75),
    right: theme.spacing(5),
    height: theme.spacing(6),
    width: theme.spacing(6),
    background: alpha(theme.palette.primary.main, 0.9),
    color: theme.palette.common.white,
    '&:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white
    },
    '&:focus': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white
    },
    '&:active': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white
    }
}))