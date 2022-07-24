export type TWishlistItemActionsProps = {
    link: string;
    edit: boolean;
    onDelete: () => void;
    onSave: () => void;
    onLinkChange: (link: string) => void;
}