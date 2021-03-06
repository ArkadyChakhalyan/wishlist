import { TContentProps } from "./types";
import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { theme } from "../../styles/theme";
import { WishlistsPage } from "./pages/wishlistsPage";

export const Content: FC<TContentProps> = () => {
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
                <Route path='home' element={<></>}/>
                <Route path='wishlists' element={<WishlistsPage />}>
                    <Route path=':id' element={<WishlistsPage />}>
                        <Route path='edit' element={<WishlistsPage />} />
                        <Route path=':itemId' element={<WishlistsPage />} />
                    </Route>
                </Route>
                <Route path='shared' element={<></>}/>
                <Route path='calendar' element={<></>}/>
                <Route path='info' element={<></>}/>
            </Routes>
        </Box>
    );
}



