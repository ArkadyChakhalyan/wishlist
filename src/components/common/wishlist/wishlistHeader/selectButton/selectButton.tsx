import { ESelectType, TSelectButtonProps } from "./types";
import React, { FunctionComponent, useState } from "react";
import { alpha, Box, IconButton, IconButtonProps, Popover, Stack, styled, Tooltip, Typography } from "@mui/material";
import { theme } from "../../../../../styles/theme";

export const SelectButton: FunctionComponent<TSelectButtonProps> = ({
    options,
    type,
    icons,
    iconColor,
    selected,
    tooltip,
    onSelect
}) => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

    const onOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget);
    };

    const onClose = () => {
        setAnchor(null);
    };

    const onItemSelect = (value: string) => {
        onSelect(value);
        onClose();
    };

    const buttonStyle = {
        border: `${!!anchor ? 'solid 2px' : 'solid 1px'} !important`,
        borderColor: `${!!anchor ? theme.palette.primary.main : alpha(theme.palette.common.black, 0.25)} !important`,
        '.MuiSvgIcon-root': { background: iconColor }
    };

    const boxStyle = {
        width: theme.spacing(3.4),
        height: theme.spacing(3.4),
        bgcolor: selected,
        borderRadius: theme.spacing(0.5)
    };

    return (
        <>
            <Tooltip
                title={
                    <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                        {tooltip}
                    </Typography>
                }
                disableInteractive
                enterDelay={300}
                enterNextDelay={300}
            >
                <Button
                    onClick={onOpen}
                    sx={buttonStyle}
                >
                    {
                        type === ESelectType.COLOR ?
                            <Box sx={boxStyle} />
                            : icons && icons[selected]
                    }
                </Button>
            </Tooltip>
            <Popover
                open={!!anchor}
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={onClose}
                sx={{ mt: 1 }}
            >
                <Stack
                    direction='row'
                    sx={{
                        width: theme.spacing(23),
                        height: theme.spacing(11),
                        p: 1,
                        flexWrap: 'wrap',
                        gap: theme.spacing()
                    }}
                >
                    {
                        options.map((option) => {
                            const buttonStyle = {
                                border: `${option === selected ? 'solid 2px' : 'none'} !important`,
                                borderColor: `${option === selected ? theme.palette.primary.main : alpha(theme.palette.common.black, 0.25)} !important`,
                                '.MuiSvgIcon-root': { background: iconColor }
                            };

                            return (
                                <Button
                                    key={option}
                                    onClick={() => onItemSelect(option)}
                                    sx={buttonStyle}
                                >
                                    {
                                        type === ESelectType.COLOR ?
                                            <Box sx={{ ...boxStyle, bgcolor: option }} />
                                            : icons && icons[option]
                                    }
                                </Button>
                            );
                        })
                    }
                </Stack>
            </Popover>
        </>
    );
}

const Button = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    padding: 0,
    borderRadius: theme.spacing(0.5),
    border: `1px solid`,
    borderColor: alpha(theme.palette.common.black, 0.25),
    width: theme.spacing(5),
    height: theme.spacing(5),
    color: theme.palette.common.white,
    '.MuiSvgIcon-root': {
        padding: theme.spacing(0.5),
        borderRadius: theme.spacing(0.5)
    },
    '&:hover': {
        borderColor: theme.palette.common.black,
        background: theme.palette.common.white
    },
    '&:focus': {
        border: '2px solid',
        borderColor: theme.palette.primary.main,
        background: theme.palette.common.white
    }
}));