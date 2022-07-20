import { TWishlistNameProps } from "./types";
import { Avatar, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { theme } from "../../../../../styles/theme";
import { WISHLIST_COLORS, WISHLIST_ICONS } from "../../constants";
import {
    WISHLIST_ICONS_NAMES, WISHLIST_SETTINGS_COLOR_TOOLTIP,
    WISHLIST_SETTINGS_ICON_TOOLTIP,
    WISHLIST_SETTINGS_NAME_LABEL,
    WISHLIST_SETTINGS_NAME_PLACEHOLDER
} from "./constants";
import {
    editWishlistColorAC,
    editWishlistIconAC,
    editWishlistNameAC
} from "../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { useDispatch } from "react-redux";
import { WishlistFavorite } from "../../../wishlistFavorite";
import { useNavigate } from "react-router-dom";
import { SelectButton } from "../selectButton";
import { ESelectType } from "../selectButton/types";
import { EWishlistIcon } from "../../../../../store/reducers/wishlistsReducer/types";
import { WishlistCounter } from "./wishlistCounter";

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
        id,
        counter,
        items
    } = wishlist;

    const [wrap, setWrap] = useState(false);
    const [newName, setNewName] = useState(name);

    const nameRef = useRef<HTMLElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const onSelectIcon = (value: string) => {
        const icon = value as EWishlistIcon;
        dispatch(editWishlistIconAC({ id, icon }));
    };

    const onSelectColor = (color: string) => {
        dispatch(editWishlistColorAC({ id, color }));
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
        setTimeout(() => {
            if (
                nameRef.current &&
                nameRef.current.offsetHeight > 29 // line height
            ) {
                setWrap(true);
            } else {
                setWrap(false);
            }
        }, 0);

        return () => {
            setWrap(false);
        }
    }, [name, id, counter, edit]);

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
    }, [id]);

    return (
        <Stack
            direction='row'
            sx={{
                alignItems: 'center',
                width: `calc(100% - ${theme.spacing(5)})`
            }}
        >
            {
                edit ?
                    <Stack
                        direction='row'
                        spacing={1}
                        sx={{ mr: 1 }}
                    >
                        <SelectButton
                            options={WISHLIST_ICONS_NAMES}
                            selected={icon}
                            icons={WISHLIST_ICONS}
                            iconColor={color}
                            type={ESelectType.ICON}
                            tooltip={WISHLIST_SETTINGS_ICON_TOOLTIP}
                            onSelect={onSelectIcon}
                        />
                        <SelectButton
                            tooltip={WISHLIST_SETTINGS_COLOR_TOOLTIP}
                            options={WISHLIST_COLORS}
                            selected={color}
                            type={ESelectType.COLOR}
                            onSelect={onSelectColor}
                        />
                    </Stack>
                    :
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
            }
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
                                fontSize={18}
                                maxWidth={`calc(100% - ${theme.spacing(5)})`}
                            >
                                {name}
                            </Typography>
                        </Tooltip>
                        :
                        <Typography ref={nameRef} variant='h6' fontSize={18}>
                            {name}
                        </Typography>
            }
            {!edit && <WishlistFavorite id={id} sx={{ ml: 0.25 }} />}
            <WishlistCounter
                items={items}
                id={id}
                edit={edit}
                type={counter}
            />
        </Stack>
    );
}