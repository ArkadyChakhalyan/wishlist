import { IconButton, Stack, Typography } from "@mui/material";
import { WISHLISTS_TITLE } from "./constants";
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import UnfoldLessRoundedIcon from '@mui/icons-material/UnfoldLessRounded';
import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { toggleFolded } from "../../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { TWishlistsHeaderProps } from "./types";

export const WishlistsHeader: FunctionComponent<TWishlistsHeaderProps> = ({
    folded
}) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(toggleFolded());
    };

    const containerStyle = {
        p: 2,
        px: folded ? 1 : 2,
        pt: 1,
        pb: 0,
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    return (
        <Stack
            direction='row'
            sx={containerStyle}
        >
            {
                !folded &&
                <Typography variant='h6'>
                    {WISHLISTS_TITLE}
                </Typography>
            }
            <IconButton onClick={onClick} size='large'>
                {
                    folded ? <UnfoldMoreRoundedIcon sx={{ transform: 'rotate(90deg)' }} />
                        : <UnfoldLessRoundedIcon sx={{ transform: 'rotate(90deg)' }} />
                }
            </IconButton>
        </Stack>
    );
}