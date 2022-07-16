import { TWishlistsEmptyPageProps } from "./types";
import { alpha } from "@mui/material";
import { WISHLISTS_PAGE_EMPTY_CREATE_TEXT } from "./constants";
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import { theme } from "../../../../../styles/theme";
import { FunctionComponent, useState } from "react";
import { CreateWishlistModal } from "./createWishlistModal";
import { WISHLISTS_CREATE_BUTTON } from "../constants";
import { Empty } from "../../../../empty";

export const WishlistsEmptyPage: FunctionComponent<TWishlistsEmptyPageProps> = () => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget);
    };

    return (
        <>
            <Empty
                icon={
                    <PlaylistAddRoundedIcon
                        sx={{
                            width: theme.spacing(18),
                            height: theme.spacing(18),
                            color: alpha(theme.palette.primary.main, 0.15)
                        }}
                    />
                }
                text={WISHLISTS_PAGE_EMPTY_CREATE_TEXT}
                buttonText={WISHLISTS_CREATE_BUTTON}
                onClick={onClick}
            />
            <CreateWishlistModal
                anchor={anchor}
                onClose={() => setAnchor(null)}
            />
        </>
    );
}