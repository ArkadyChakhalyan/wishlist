import { TAccountProps } from "./types";
import { alpha, Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { HEADER_ACCOUNT_SETTINGS_ACCOUNT, HEADER_ACCOUNT_SETTINGS_LOGOUT, HEADER_ACCOUNT_TOOLTIP } from "./constants";
import { theme } from "../../../styles/theme";
import { Tooltip } from "../../../UI/tooltip/tooltip";

export const Account: FC<TAccountProps> = () => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    const onOpen = (e: React.MouseEvent<HTMLElement>) => {
        setAnchor(e.currentTarget);
    };

    const onClose = () => {
        setAnchor(null);
    };

    const onClick = (event: () => void) => {
        event();
        onClose();
    };

    const settings = [
        {
            title: HEADER_ACCOUNT_SETTINGS_ACCOUNT,
            event: () => onClick(() => {})
        },
        {
            title: HEADER_ACCOUNT_SETTINGS_LOGOUT,
            event: () => onClick(() => {})
        }
    ];

    return (
        <>
            <Tooltip title={HEADER_ACCOUNT_TOOLTIP}>
                <IconButton onClick={onOpen} sx={{ p: 0, height: theme.spacing(5) }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={!!anchor}
                onClose={onClose}
                sx={{ mt: 1.75 }}
            >
                {
                    settings.map(({ title, event  }) => (
                        <MenuItem
                            key={title}
                            onClick={event}
                            sx={{ minWidth: theme.spacing(12) }}
                        >
                            <Typography color={alpha(theme.palette.common.black, 0.8)}>
                                {title}
                            </Typography>
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    );
}