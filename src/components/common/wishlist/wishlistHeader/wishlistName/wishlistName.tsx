import { TWishlistNameProps } from "./types";
import { Avatar, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { theme } from "../../../../../styles/theme";
import { WISHLIST_ICONS } from "../../constants";
import { WISHLIST_SETTINGS_NAME_LABEL, WISHLIST_SETTINGS_NAME_PLACEHOLDER } from "./constants";
import { editWishlistNameAC } from "../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { useDispatch } from "react-redux";
import { WishlistFavorite } from "../../../wishlistFavorite";
import { useNavigate } from "react-router-dom";

export const WishlistName: FunctionComponent<TWishlistNameProps> = ({
    wishlist,
    edit
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        icon,
        name,
        color,
        id
    } = wishlist;

    const [wrap, setWrap] = useState(false);
    const [newName, setNewName] = useState(name);

    const nameRef = useRef<HTMLElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const onBlur = () => {
        if (
            newName === name ||
            !newName.length
        ) {
            setNewName(name);
            return;
        }

        dispatch(editWishlistNameAC({ id, name: newName }));
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setNewName(name);
        }

        if (e.key === 'Enter') {
            onBlur();
            navigate(`${id}`);
        }
    };

    useEffect(() => {
        if (
            nameRef.current &&
            nameRef.current.offsetHeight > 24 // line height
        ) {
            setWrap(true);
        }
    }, []);

    useEffect(() => {
        setNewName(name);
    }, [wishlist]);

    useEffect(() => {
        const input = inputRef.current;
        if (input) {
            // get focus after ListItemButton in Wishlists
            setTimeout(() => {
                input.focus();
                input.select();
            }, 0);
        }
    }, [wishlist]);

    return (
        <Stack
            direction='row'
            sx={{
                alignItems: 'center',
                width: `calc(100% - ${theme.spacing(5)})`
            }}
        >
            <Avatar
                sx={{
                    bgcolor: color,
                    height: theme.spacing(4),
                    width: theme.spacing(4),
                    mr: 1.5
                }}
                variant='rounded'
            >
                {icon && WISHLIST_ICONS[icon]}
            </Avatar>
            {
                edit ?
                    <TextField
                        onChange={onNameChange}
                        onBlur={onBlur}
                        onKeyDown={onKeyDown}
                        value={newName}
                        label={WISHLIST_SETTINGS_NAME_LABEL}
                        placeholder={WISHLIST_SETTINGS_NAME_PLACEHOLDER}
                        fullWidth
                        autoFocus
                        inputRef={inputRef}
                    />
                    : wrap ?
                        <Tooltip
                            title={
                                <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                                    {name}
                                </Typography>
                            }
                            disableInteractive
                            enterDelay={300}
                            enterNextDelay={300}
                        >
                            <Typography
                                noWrap={wrap}
                                ref={nameRef}
                                variant='h6'
                                fontSize={18}
                                maxWidth={`calc(100% - ${theme.spacing(6)})`}
                            >
                                {name}
                            </Typography>
                        </Tooltip>
                        :
                        <Typography ref={nameRef} variant='h6' fontSize={18}>
                            {name}
                        </Typography>
            }
            <WishlistFavorite id={id} />
        </Stack>
    );
}