export interface IMenuItemProps {
    active?: boolean;
    icon: JSX.Element;
    notifications?: number;
    link: string;
    onClick?: () => void;
    tooltip: string;
}