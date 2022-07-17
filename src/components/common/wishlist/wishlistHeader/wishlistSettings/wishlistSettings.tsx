import { TWishlistSettingsProps } from "./types";
import { Stack } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

export const WishlistSettings: FunctionComponent<TWishlistSettingsProps> = ({
    wishlist
}) => {
    const dispatch = useDispatch();

    return (
        <Stack>

        </Stack>
    );
}