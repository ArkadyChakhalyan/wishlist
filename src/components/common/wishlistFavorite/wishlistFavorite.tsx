import { TWishlistFavoriteProps } from "./types"
import { yellow } from "@mui/material/colors";
import { toggleWishlistFavoriteAC } from "../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { IconButton } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WISHLIST_FAVORITE_ADD_TOOLTIP, WISHLIST_FAVORITE_REMOVE_TOOLTIP } from "./constants";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { getWishlistFavorite } from "../../../store/reducers/wishlistsReducer/selectors/getWishlistFavorite";
import { IAppState } from "../../../store/types";
import { Tooltip } from "../../../UI/tooltip/tooltip";

export const WishlistFavorite: FC<TWishlistFavoriteProps> = ({
    id,
    sx
}) => {
    const dispatch = useDispatch();

    const favorite = useSelector((state: IAppState) => getWishlistFavorite(state, id));

    const onToggleFavorite = () => {
        dispatch(toggleWishlistFavoriteAC(id));
    };

    return (
        <Tooltip title={favorite ? WISHLIST_FAVORITE_REMOVE_TOOLTIP : WISHLIST_FAVORITE_ADD_TOOLTIP}>
            <IconButton onClick={onToggleFavorite} sx={sx}>
                {
                    favorite ?
                        <StarRateRoundedIcon sx={{ color: yellow[700] }} />
                        : <StarBorderRoundedIcon />
                }
            </IconButton>
        </Tooltip>
    );
}