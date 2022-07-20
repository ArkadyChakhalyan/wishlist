import { TWishlistItemNameProps } from "./types";
import { TextField, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { theme } from "../../../../../styles/theme";
import { WISHLIST_ITEM_NAME_LABEL, WISHLIST_ITEM_NAME_PLACEHOLDER } from "./constants";
import {
    deleteWishlistItemAC,
    editWishlistItemNameAC
} from "../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const WishlistItemName: FunctionComponent<TWishlistItemNameProps> = ({
    wishlistId,
    itemId,
    name,
    edit
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            if (!name) {
                dispatch(deleteWishlistItemAC({ wishlistId, itemId }));
                navigate(`${wishlistId}`);
            }

            setNewName(name);
            return;
        }

        dispatch(editWishlistItemNameAC({ wishlistId, itemId, name: newName }));
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setNewName(name);
            navigate(`${wishlistId}`);
        }

        if (e.key === 'Enter') {
            onBlur();
            navigate(`${wishlistId}`);
        }

        if (
            (e.metaKey || e.ctrlKey) &&
            e.key === 'e'
        ) {
            onBlur();
        }
    };

    useEffect(() => {
        if (
            nameRef.current &&
            nameRef.current.offsetHeight > 26 // line height
        ) {
            setWrap(true);
        } else {
            setWrap(false);
        }
    }, [name, wishlistId, edit]);

    useEffect(() => {
        const input = inputRef.current;
        if (input) {
            // get focus after ListItemButton in Wishlists
            setTimeout(() => {
                input.focus();
                input.select();
            }, 0);
        }
    }, [itemId]);

    return (
        <>
            {
                edit ?
                    <TextField
                        onChange={onNameChange}
                        onClick={e => e.stopPropagation()}
                        onBlur={onBlur}
                        onKeyDown={onKeyDown}
                        value={newName}
                        label={WISHLIST_ITEM_NAME_LABEL}
                        placeholder={WISHLIST_ITEM_NAME_PLACEHOLDER}
                        fullWidth
                        autoFocus
                        inputRef={inputRef}
                        size='small'
                        required
                    />
                    : wrap ?
                        <Tooltip
                            title={
                                <Typography fontSize={'small'}>
                                    {name}
                                </Typography>
                            }
                            disableInteractive
                            enterDelay={300}
                            enterNextDelay={300}
                        >
                            <Typography
                                noWrap
                                ref={nameRef}
                                variant='h6'
                                fontSize={16}
                                maxWidth={`calc(100% - ${theme.spacing(10)})`}
                                sx={{ mt: theme.spacing(0.5) }}
                            >
                                {name}
                            </Typography>
                        </Tooltip>
                        :
                        <Typography
                            ref={nameRef}
                            variant='h6'
                            fontSize={16}
                            sx={{ mt: theme.spacing(0.5) }}
                        >
                            {name}
                        </Typography>
            }
        </>
    );
}