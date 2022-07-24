import { TWishlistSettingsProps } from "./types";
import { Stack } from "@mui/material";
import React, { FC } from "react";
import { useDispatch } from "react-redux";

export const WishlistSettings: FC<TWishlistSettingsProps> = ({
    wishlist
}) => {
    const dispatch = useDispatch();

    return (
        <Stack sx={{ pl: 3 }}>
        </Stack>
    );
}