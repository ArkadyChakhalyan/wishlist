export type TSelectButtonProps = {
    options: string[];
    selected: string;
    type: ESelectType;
    icons?: { [iconName: string]: JSX.Element };
    iconColor?: string;
    tooltip: string;
    onSelect: (value: string) => void;
}

export enum ESelectType {
    ICON = 'icon',
    COLOR = 'color'
}
