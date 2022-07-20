import React from "react";

export type TWishlistItemActionsProps = {
    done: boolean;
    link: string;
    edit: boolean;
    onToggleDone: () => void;
    onDelete: () => void;
    onSave: () => void;
    onLinkChange: (link: string) => void;
}