import { TWishlistId } from "../../../store/reducers/wishlistsReducer/types";
import { SxProps } from "@mui/material";

export type TWishlistFavoriteProps = {
    id: TWishlistId;
    sx?: SxProps
}