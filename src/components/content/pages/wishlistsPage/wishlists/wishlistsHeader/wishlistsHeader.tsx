import { alpha, IconButton, Stack, Typography } from "@mui/material";
import { WISHLISTS_FOLD_TOOLTIP, WISHLISTS_TITLE, WISHLISTS_UNFOLD_TOOLTIP } from "./constants";
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import UnfoldLessRoundedIcon from '@mui/icons-material/UnfoldLessRounded';
import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { toggleFoldedAC } from "../../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { TWishlistsHeaderProps } from "./types";
import { theme } from "../../../../../../styles/theme";
import { Tooltip } from "../../../../../../UI/tooltip/tooltip";

export const WishlistsHeader: FunctionComponent<TWishlistsHeaderProps> = ({
    folded
}) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(toggleFoldedAC());
    };

    const containerStyle = {
        p: 2,
        px: folded ? 1 : 2,
        pt: 1,
        pb: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: `4px 0 6px ${alpha(theme.palette.common.black, 0.2)}`
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
            <Tooltip
                title={folded ? WISHLISTS_UNFOLD_TOOLTIP : WISHLISTS_FOLD_TOOLTIP}
                placement={folded ? 'right' : 'bottom'}
            >
                <IconButton onClick={onClick} size='large'>
                    {
                        folded ? <UnfoldMoreRoundedIcon sx={{ transform: 'rotate(90deg)' }} />
                            : <UnfoldLessRoundedIcon sx={{ transform: 'rotate(90deg)' }} />
                    }
                </IconButton>
            </Tooltip>
        </Stack>
    );
}