import { TWishlistProps } from "./types";
import { FunctionComponent } from "react";
import { WishlistHeader } from "./wishlistHeader";
import { WishlistItem } from "./wishlistItem";
import { Stack } from "@mui/material";
import { AddItem } from "./addItem";
import { theme } from "../../../styles/theme";
import { useNavigate } from "react-router-dom";

export const Wishlist: FunctionComponent<TWishlistProps> = ({
    wishlist
}) => {
    const navigate = useNavigate();

    const { id, items } = wishlist;

    const listStyle = {
        height: `calc(100% - ${theme.spacing(10)})`,
        overflow: 'auto'
    };

    const onClick = () => {
        navigate(`${id}`);
    };

    return (
        <Stack sx={{ height: 1, width: 1 }}>
            <WishlistHeader wishlist={wishlist}/>
            {
                !!items.length &&
                <Stack
                    spacing={2}
                    sx={listStyle}
                    onClick={onClick}
                >
                    <Stack spacing={2} sx={{ p: 2, px: 4 }}>
                        {
                            items.map(item => (
                                <WishlistItem key={item.id} item={item} wishlistId={id}/>
                            ))
                        }
                    </Stack>
                </Stack>
            }
            <AddItem
                isEmpty={!wishlist.items.length}
                wishlistId={id}
                onClick={onClick}
            />
        </Stack>
    );
}