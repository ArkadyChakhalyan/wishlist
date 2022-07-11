import { IContentProps } from "./types";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wishlist } from "../wishList";
import { Box } from "@mui/material";
import { theme } from "../../styles/theme";
import { WishlistsPage } from "./pages/wishlistsPage";

export const Content = ({}: IContentProps) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                left: theme.spacing(9),
                top: theme.spacing(8),
                width: `calc(100% - ${theme.spacing(9)})`,
                height: `calc(100% - ${theme.spacing(8)})`
            }}
        >
            <Routes>
                <Route path='/home' element={<Wishlist />}/>
                <Route path='/wishlists' element={<WishlistsPage />}/>
                <Route path='/shared' element={<Wishlist />}/>
                <Route path='/calendar' element={<Wishlist />}/>
                <Route path='/info' element={<Wishlist />}/>
            </Routes>
        </Box>
    );
}



