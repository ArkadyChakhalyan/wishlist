import { EWishlistCounter, TWishlistCounterProps } from "./types";
import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { editWishlistCounterAC } from "../../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { WISHLIST_COUNTER_OPTIONS, WISHLIST_SETTINGS_COUNTER_LABEL } from "./constants";
import { theme } from "../../../../../../styles/theme";

export const WishlistCounter: FC<TWishlistCounterProps> = ({
    id,
    items,
    type,
    edit
}) => {
    const dispatch = useDispatch();

    const doneItems = items.filter(item => item.done).length;
    const totalItems = items.length;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const counter = e.target.value as EWishlistCounter;
        dispatch(editWishlistCounterAC({ id, counter }));
    };

    const boxShadow = {
        borderRadius: theme.shape.borderRadius,
        p: 0.75,
        px: 1.5,
        bgcolor: theme.palette.success.light
    };

    return (
        <Stack
            direction='row'
            sx={{
                alignItems: 'center',
                mx: 1
            }}
        >
            {
                edit ?
                    <TextField
                        value={type as string}
                        onChange={onChange}
                        label={WISHLIST_SETTINGS_COUNTER_LABEL}
                        select
                        size='small'
                        sx={{ width: theme.spacing(21.5) }}
                    >
                        {
                            WISHLIST_COUNTER_OPTIONS.map(({ label, value }, index) => (
                                <MenuItem key={index} value={value as EWishlistCounter}>
                                    {label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    : type !== EWishlistCounter.NONE && !!totalItems && (items.length === 1 ? items[0].name : true) &&
                    <Box sx={boxShadow}>
                        <Typography
                            fontWeight={600}
                            noWrap
                            sx={{ color: theme.palette.common.white }}
                        >
                            {
                                type === EWishlistCounter.PERCENTAGE ?
                                    Math.round(doneItems / totalItems * 100) + '%'
                                    : doneItems + ' / ' + totalItems
                            }
                        </Typography>
                    </Box>
            }
        </Stack>
    );
}