import { SxProps } from "@mui/material";

export type TSelectButtonProps = {
    options: string[];
    selected: string;
    type: ESelectType;
    icons?: { [iconName: string]: JSX.Element };
    iconColor?: string;
    tooltip: string;
    sx?: SxProps;
    onSelect: (value: string) => void;
}

export enum ESelectType {
    ICON = 'icon',
    COLOR = 'color'
}
