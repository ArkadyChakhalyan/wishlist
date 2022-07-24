import { TTopBarSearchProps } from "./types";
import React, { FC } from "react";
import { alpha, InputBase, styled } from "@mui/material";
import { HEADER_TOP_BAR_SEARCH_PLACEHOLDER } from "./constants";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export const TopBarSearch: FC<TTopBarSearchProps> = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchRoundedIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={HEADER_TOP_BAR_SEARCH_PLACEHOLDER}
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: alpha(theme.palette.common.black, 0.7)
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));