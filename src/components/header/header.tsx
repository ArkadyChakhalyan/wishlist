import { THeaderProps } from "./types";
import { alpha, Badge, IconButton, Stack, styled } from "@mui/material";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import React, { FunctionComponent } from "react";
import { Account } from "./account";
import { HEADER_NOTIFICATION_TOOLTIP } from "./constants";
import { TopBarSearch } from "./search";
import { Tooltip } from "../../UI/tooltip/tooltip";

export const Header: FunctionComponent<THeaderProps> = () => {
    return (
        <TopBar>
            <Stack
                direction='row'
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 64,
                }}
            >
                <TopBarSearch />
                <Stack
                    spacing={2}
                    direction='row'
                    sx={{
                        pr: 2,
                        alignItems: 'center'
                    }}
                >
                    <Tooltip title={HEADER_NOTIFICATION_TOOLTIP}>
                        <IconButton size='large' color={'primary'}>
                            <Badge badgeContent={17} color='error'>
                                <NotificationsNoneRoundedIcon/>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Account />
                </Stack>
            </Stack>
        </TopBar>
    );
}

const TopBar = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: theme.spacing(9),
    background: 'none',
    width: `calc(100% - ${theme.spacing(9)})`,
    height: theme.spacing(8),
    borderBottom: `${theme.spacing(0.25)} solid ${alpha(theme.palette.primary.main, 0.1)}`
}));