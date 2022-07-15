import { TAccountProps } from "./types";
import { alpha, Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { HEADER_ACCOUNT_SETTINGS_ACCOUNT, HEADER_ACCOUNT_SETTINGS_LOGOUT, HEADER_ACCOUNT_TOOLTIP } from "./constants";
import { theme } from "../../../styles/theme";

export const Account: FunctionComponent<TAccountProps> = () => {
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
            <Tooltip
                title={
                    <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                        {HEADER_ACCOUNT_TOOLTIP}
                    </Typography>
                }
                disableInteractive
                enterDelay={300}
                enterNextDelay={300}
            >
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