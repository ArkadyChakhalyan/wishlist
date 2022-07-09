import { IContentProps } from "./types";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { WishList } from "../wishList";
import { Container } from "@mui/material";
import { theme } from "../../styles/theme";
import { WishListsPage } from "./pages/wishListsPage";

export const Content = ({}: IContentProps) => {
    return (
        <Container
            sx={{
                position: 'absolute',
                left: theme.spacing(9),
                top: theme.spacing(8),
                width: `calc(100% - ${theme.spacing(9)})`,
                height: `calc(100% - ${theme.spacing(8)})`,
                p: 2
            }}
        >
            <Routes>
                <Route path='/home' element={<WishList />}/>
                <Route path='/wishlists' element={<WishListsPage />}/>
                <Route path='/shared' element={<WishList />}/>
                <Route path='/calendar' element={<WishList />}/>
                <Route path='/info' element={<WishList />}/>
            </Routes>
        </Container>
    );
}



