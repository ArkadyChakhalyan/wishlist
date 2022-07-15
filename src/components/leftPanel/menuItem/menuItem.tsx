import { TMenuItemProps } from "./types";
import { alpha, Badge, IconButton, IconButtonProps, styled, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { theme } from "../../../styles/theme";
import { Link } from "react-router-dom";

export const MenuItem: FunctionComponent<TMenuItemProps> = ({
    active,
    icon,
    notifications,
    link,
    onClick,
    tooltip
}) => {
    const style = active ? {
        color: alpha(theme.palette.common.white, 1),
        backgroundColor: alpha(theme.palette.common.white, 0.1),
    } : {};

    return (
        <Tooltip
            title={
                <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                    {tooltip}
                </Typography>
            }
            placement='right'
            disableInteractive
            enterDelay={300}
            enterNextDelay={300}
        >
            <Link to={link}>
                <Button
                    size='large'
                    sx={style}
                    onClick={onClick}
                >
                    <Badge badgeContent={notifications} color='error'>
                        {icon}
                    </Badge>
                </Button>
            </Link>
        </Tooltip>
    );
}

const Button = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    color: alpha(theme.palette.common.white, 0.6),
    borderRadius: theme.spacing(0.5),
    width: theme.spacing(6),
    height: theme.spacing(6),
    '&:hover': {
        color: alpha(theme.palette.common.white, 1),
        backgroundColor: alpha(theme.palette.common.white, 0.1),
    },
}));



