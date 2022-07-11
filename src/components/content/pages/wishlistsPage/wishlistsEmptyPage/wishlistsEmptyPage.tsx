import { IWishlistsEmptyPageProps } from "./types";
import { alpha, Button, Stack, Typography } from "@mui/material";
import { WISHLISTS_PAGE_EMPTY_CREATE_TEXT } from "./constants";
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import { theme } from "../../../../../styles/theme";
import { useState } from "react";
import { CreateWishlistModal } from "./createWishlistModal";
import { WISHLISTS_CREATE_BUTTON } from "../constants";

export const WishlistsEmptyPage = ({}:IWishlistsEmptyPageProps) => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget);
    };

    return (
        <Stack
            sx={{height: 1}}
        >
            <Stack
                spacing={1}
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 1
                }}
            >
                <PlaylistAddRoundedIcon
                    sx={{
                        width: theme.spacing(18),
                        height: theme.spacing(18),
                        color: alpha(theme.palette.primary.main, 0.15)
                    }}
                />
                <Typography>
                    {WISHLISTS_PAGE_EMPTY_CREATE_TEXT}
                </Typography>
                <Button
                    onClick={onClick}
                    sx={{ width: theme.spacing(24) }}
                >
                    {WISHLISTS_CREATE_BUTTON}
                </Button>
                <CreateWishlistModal
                    anchor={anchor}
                    onClose={() => setAnchor(null)}
                />
            </Stack>
        </Stack>
    );
}