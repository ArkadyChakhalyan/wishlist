import { TWishlistItemLinkProps } from "./types";
import { TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { WISHLIST_ITEM_LINK_LABEL, WISHLIST_ITEM_LINK_PLACEHOLDER } from "./constants";

export const WishlistItemLink: FC<TWishlistItemLinkProps> = ({
    link,
    onLinkChange,
    onClose
}) => {
    const [newLink, setNewLink] = useState(link);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewLink(e.target.value);
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
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setNewLink(link);
            onClose();
        }

        if (e.key === 'Enter') {
            onBlur();
            onClose();
        }

        if (
            (e.metaKey || e.ctrlKey) &&
            e.key === 'e'
        ) {
            onBlur();
        }
    };

    return (
        <TextField
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onClick={e => e.stopPropagation()}
            placeholder={WISHLIST_ITEM_LINK_PLACEHOLDER}
            label={WISHLIST_ITEM_LINK_LABEL}
            value={newLink}
            fullWidth
            size='small'
            sx={{ pointerEvents: 'all' }}
        />
    );
}