import { TWishlistItemProps } from "./types";
import { Card, Checkbox, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import { theme } from "../../../../styles/theme";
import { useDispatch } from "react-redux";
import { toggleWishlistItemDoneAC } from "../../../../store/reducers/wishlistsReducer/wishlistsReducer";

export const WishlistItem: FunctionComponent<TWishlistItemProps> = ({
    wishlistId,
    item
}) => {
    const dispatch = useDispatch();

    const {
        id,
        done
    } = item;

    const cardStyle = {
        height: theme.spacing(7),
        width: 1
    };

    const onToggleDone = () => {
        dispatch(toggleWishlistItemDoneAC({ wishlistId, itemId: id }));
    };

    return (
        <Card sx={cardStyle} elevation={4}>
            <Stack
                direction='row'
                onChange={onToggleDone}
                sx={{ alignItems: 'center', height: 1, px: 1 }}
            >
                <Checkbox
                    checked={done}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: theme.spacing(3.5) }  }}
                />
            </Stack>
        </Card>
    );
}