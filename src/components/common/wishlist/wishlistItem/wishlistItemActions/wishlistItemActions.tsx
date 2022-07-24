import { TWishlistItemActionsProps } from "./types";
import React, { FC, useEffect, useRef, useState } from "react";
import { Button, IconButton, Popover, Stack, styled, TextField } from "@mui/material";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AddLinkRoundedIcon from '@mui/icons-material/AddLinkRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import { theme } from "../../../../../styles/theme";
import {
    WISHLIST_ITEM_DELETE_TOOLTIP,
    WISHLIST_ITEM_LINK_LABEL,
    WISHLIST_ITEM_LINK_PLACEHOLDER,
    WISHLIST_ITEM_LINK_TOOLTIP_ADD,
    WISHLIST_ITEM_LINK_TOOLTIP_OPEN,
    WISHLIST_ITEM_SETTINGS_COPY_BUTTON,
    WISHLIST_ITEM_SETTINGS_DELETE_BUTTON,
    WISHLIST_ITEM_SETTINGS_SAVE_BUTTON
} from "./constants";
import { Tooltip } from "../../../../../UI/tooltip/tooltip";

export const WishlistItemActions: FC<TWishlistItemActionsProps> = ({
    edit,
    link,
    onLinkChange,
    onDelete,
    onSave
}) => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
    const [newLink, setNewLink] = useState(link);

    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewLink(e.target.value);
    };

    const onAddLink = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget);
    };

    const onClose = () => {
        setAnchor(null);
    };

    const onBlur = () => {
        if (
            newLink === link ||
            !newLink.length
        ) {
            setNewLink(link);
            return;
        }

        onLinkChange(newLink);
        onClose();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setNewLink(link);
            onClose();
        }

        if (e.key === 'Enter') {
            e.preventDefault();
            onBlur();
        }
    };

    const onLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.open(link,'_blank');
    };

    useEffect(() => {
        setTimeout(() => {
            if (inputRef.current && anchor) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }, 0);
    }, [anchor]);

    const containerStyle = {
        position: 'absolute',
        width: edit ? `calc(100% - ${theme.spacing(6)})` : 'unset',
        px: edit ? 3 : 0,
        right: edit ? 0 : theme.spacing(),
        top: edit ? 'unset' : theme.spacing(),
        bottom: edit ? theme.spacing(2) : 'unset',
        pointerEvents: 'none'
    };

    return (
        <Stack
            direction='row'
            sx={containerStyle}
        >
            {
                edit ?
                    <Stack spacing={1} sx={{ width: 1 }}>
                        <Stack direction='row' spacing={1}>
                            <Button
                                fullWidth
                                sx={{ pointerEvents: 'all' }}
                                variant='outlined'
                            >
                                {WISHLIST_ITEM_SETTINGS_COPY_BUTTON}
                            </Button>
                            <Button
                                fullWidth
                                sx={{ pointerEvents: 'all' }}
                                variant='outlined'
                            >
                                {WISHLIST_ITEM_SETTINGS_COPY_BUTTON}
                            </Button>
                            <Button
                                onClick={onSave}
                                fullWidth
                                sx={{ pointerEvents: 'all' }}
                                variant='outlined'
                            >
                                {WISHLIST_ITEM_SETTINGS_SAVE_BUTTON}
                            </Button>
                        </Stack>
                        <Button
                            onClick={onDelete}
                            fullWidth
                            color='error'
                            variant='contained'
                            sx={{ pointerEvents: 'all' }}
                        >
                            {WISHLIST_ITEM_SETTINGS_DELETE_BUTTON}
                        </Button>
                    </Stack>
                    :
                    <>
                        {
                            link ?
                                <Tooltip title={WISHLIST_ITEM_LINK_TOOLTIP_OPEN}>
                                    <IconButton
                                        sx={{ pointerEvents: 'all' }}
                                        onClick={onLinkClick}
                                    >
                                        <LinkRoundedIcon />
                                    </IconButton>
                                </Tooltip>
                                :
                                <Tooltip title={WISHLIST_ITEM_LINK_TOOLTIP_ADD}>
                                    <LinkButton
                                        sx={{ pointerEvents: 'all' }}
                                        onClick={onAddLink}
                                    >
                                        <AddLinkRoundedIcon />
                                    </LinkButton>
                                </Tooltip>
                        }
                        <Popover
                            open={!!anchor}
                            anchorEl={anchor}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            onClose={onClose}
                            PaperProps={{sx: { overflow: 'visible' }}}
                        >
                            <TextField
                                onChange={onChange}
                                value={newLink}
                                onKeyDown={onKeyDown}
                                onBlur={onBlur}
                                placeholder={WISHLIST_ITEM_LINK_PLACEHOLDER}
                                label={WISHLIST_ITEM_LINK_LABEL}
                                size='small'
                                inputRef={inputRef}
                            />
                        </Popover>
                        <Tooltip title={WISHLIST_ITEM_DELETE_TOOLTIP}>
                            <DeleteButton
                                onClick={onDelete}
                                sx={{ pointerEvents: 'all' }}
                            >
                                <DeleteOutlineRoundedIcon />
                            </DeleteButton>
                        </Tooltip>
                    </>
            }
        </Stack>
    );
}

const DeleteButton = styled(IconButton)(({ theme }) => ({
    '&:focus': {
        color: theme.palette.error.main,
    },
    '&:hover': {
        color: theme.palette.error.main,
    }
}))

const LinkButton = styled(IconButton)(({ theme }) => ({
    '&:focus': {
        color: theme.palette.success.main,
    },
    '&:hover': {
        color: theme.palette.success.main,
    }
}))