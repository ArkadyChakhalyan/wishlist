import { TWishlistsPageProps } from "./types";
import { WishlistsEmptyPage } from "./wishlistsEmptyPage";
import { getWishlists } from "../../../../store/reducers/wishlistsReducer/selectors/getWishlists";
import { useSelector } from "react-redux";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Wishlist } from "../../../wishlist";
import { Wishlists } from "./wishlists";
import { theme } from "../../../../styles/theme";
import { useParams } from "react-router-dom";
import { WISHLISTS_EMPTY_TEXT } from "./constants";
import { FunctionComponent } from "react";
import { getFolded } from "../../../../store/reducers/wishlistsReducer/selectors/getFolded";

export const WishlistsPage: FunctionComponent<TWishlistsPageProps> = () => {
    const wishlists = useSelector(getWishlists);
    const folded = useSelector(getFolded);
    const params = useParams();
    const openedWishlist = params && params.id && wishlists.find(({ id }) => params.id === String(id));

    return (
        <>
            {
                wishlists.length ?
                    <Box sx={{ p: 3, height: `calc(100% - ${theme.spacing(6)})` }}>
                        <Paper
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                height: 1,
                                overflow: 'hidden'
                            }}
                        >
                            <Wishlists wishlists={wishlists} folded={folded}/>
                            <Stack
                                spacing={1}
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 1,
                                    width: `calc(100% - ${folded ? theme.spacing(15.25) : theme.spacing(13.25)})` // wishlists width
                                }}
                            >
                                {
                                    openedWishlist ?
                                        <Wishlist
                                            id={openedWishlist.id}
                                            items={openedWishlist.items || []}
                                        />
                                        :
                                        <Typography textAlign='center' sx={{ whiteSpace: 'pre-wrap' }}>
                                            {WISHLISTS_EMPTY_TEXT}
                                        </Typography>
                                }
                            </Stack>
                        </Paper>
                    </Box>
                    : <WishlistsEmptyPage />
            }
        </>
    );
}