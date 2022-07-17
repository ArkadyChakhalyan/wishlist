import { TWishlistItemProps } from "./types";
import { Card } from "@mui/material";
import { FunctionComponent } from "react";
import { theme } from "../../../../styles/theme";

export const WishlistItem: FunctionComponent<TWishlistItemProps> = ({
    wishlistId,
    item
}) => {
    const cardStyle = {
        height: theme.spacing(7),
        width: 1
    };

    return (
        <Card sx={cardStyle} elevation={4}>
        </Card>
    );
}