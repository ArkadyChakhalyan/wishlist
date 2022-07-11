import { IWishlistsPageProps } from "./types";
import { WishlistsEmptyPage } from "./wishlistsEmptyPage";
import { getWishlists } from "../../../../store/reducers/wishlistsReducer/selectors/getWishlists";
import { Wishlists } from "./wishlists";
import { useSelector } from "react-redux";
import { IAppState } from "../../../../store/types";
import { Box, Paper } from "@mui/material";
import { Wishlist } from "../../../wishList";

export const WishlistsPage = ({}:IWishlistsPageProps) => {
    const wishlists = useSelector((state: IAppState) => getWishlists(state));

    return (
        <>
            {
                wishlists.length ?
                    <Box sx={{ p: 3 }}>
                        <Paper
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                height: 1
                            }}
                        >
                            <Wishlists wishlists={wishlists} />
                            <Box>
                                <Wishlist />
                            </Box>
                        </Paper>
                    </Box>
                    : <WishlistsEmptyPage />
            }
        </>
    );
}