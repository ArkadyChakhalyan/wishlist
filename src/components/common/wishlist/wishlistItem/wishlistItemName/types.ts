export type TWishlistItemNameProps = {
    name: string;
    edit: boolean;
    onSave: (name: string) => void;
    onDelete: () => void;
    onCancel: () => void;
}