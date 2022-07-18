import { TWishlistSettingsProps } from "./types";
import { Stack } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { WISHLIST_COLORS } from "../../constants";
import { ESelectType } from "../selectButton/types";
import { SelectButton } from "../selectButton";
import { editWishlistColorAC } from "../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { WISHLIST_SETTINGS_COLOR_TOOLTIP } from "./constants";

export const WishlistSettings: FunctionComponent<TWishlistSettingsProps> = ({
    wishlist
}) => {
    const dispatch = useDispatch();

    const  {
        id,
        color
    } = wishlist;

    const onSelectColor = (color: string) => {
        dispatch(editWishlistColorAC({ id, color }));
    }

    return (
        <Stack sx={{ pl: 3, mt: -1.5 }}>
            <SelectButton
                tooltip={WISHLIST_SETTINGS_COLOR_TOOLTIP}
                options={WISHLIST_COLORS}
                selected={color}
                type={ESelectType.COLOR}
                onSelect={onSelectColor}
            />
        </Stack>
    );
}