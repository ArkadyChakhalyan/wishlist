import { TWishlistItemNameProps } from "./types";
import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { FC, useEffect, useRef, useState } from "react";
import { theme } from "../../../../../styles/theme";
import { WISHLIST_ITEM_NAME_ADD_BUTTON, WISHLIST_ITEM_NAME_LABEL, WISHLIST_ITEM_NAME_PLACEHOLDER } from "./constants";
import { Tooltip } from "../../../../../UI/tooltip/tooltip";

export const WishlistItemName: FC<TWishlistItemNameProps> = ({
    name,
    edit,
    onSave,
    onDelete,
    onCancel
}) => {
    const [wrap, setWrap] = useState(false);
    const [newName, setNewName] = useState(name);

    const nameRef = useRef<HTMLElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const onBlur = (e?: React.FocusEvent) => {
        if (buttonRef.current && e?.relatedTarget === buttonRef?.current) return;

        if (
            newName === name ||
            !newName.length
        ) {
            if (!name) onDelete()

            setNewName(name);
            return;
        }

        onSave(newName);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setNewName(name);

            if (!name) onDelete();

            onCancel();
        }

        if (e.key === 'Enter') {
            onBlur();
            onCancel();
        }

        if (
            (e.metaKey || e.ctrlKey) &&
            e.key === 'e'
        ) {
            onBlur();
        }
    };

    const onAdd = () => {
        onBlur();
        onCancel();
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
    }, [name, edit]);

    useEffect(() => {
        const input = inputRef.current;
        if (input) {
            // get focus after ListItemButton in Wishlists
            setTimeout(() => {
                input.focus();
                input.select();
            }, 0);
        }
    }, []);

    return (
        <Stack direction='row' spacing={1}>
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
                        sx={{ pointerEvents: 'all' }}
                    />
                    : wrap ?
                        <Tooltip title={name}>
                            <Typography
                                noWrap
                                ref={nameRef}
                                variant='h6'
                                fontSize={16}
                                maxWidth={`calc(100% - ${theme.spacing(10)})`}
                                sx={{ mt: theme.spacing(0.5), pointerEvents: 'all' }}
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
            {
                !name &&
                <Button
                    ref={buttonRef}
                    onClick={onAdd}
                    variant='contained'
                    disabled={!newName}
                    sx={{ width: '20%', pointerEvents: 'all' }}
                >
                    {WISHLIST_ITEM_NAME_ADD_BUTTON}
                </Button>
            }
        </Stack>
    );
}