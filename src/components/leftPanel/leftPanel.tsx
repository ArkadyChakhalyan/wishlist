import { TLeftPanelProps } from "./types";
import { Stack, styled } from "@mui/material";
import React, { FunctionComponent } from "react";
import { LEFT_PANEL_MENU } from "./constants";
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import { MenuItem } from "./menuItem";
import { useLocation } from "react-router-dom";
import { theme } from "../../styles/theme";

export const LeftPanel: FunctionComponent<TLeftPanelProps> = () => {
    const location = useLocation();

    return (
        <LeftPanelContainer>
            <Stack
                spacing={4}
                width={1}
                sx={{
                    alignItems: 'center',
                    pt: 1.5
                }}
            >
                <CardGiftcardRoundedIcon
                    sx={{
                        width: theme.spacing(4.5),
                        height: theme.spacing(4.5),
                        color: theme.palette.common.white
                    }}
                />
                <Stack spacing={1}>
                    {
                        LEFT_PANEL_MENU.map((item, index) => (
                            <MenuItem
                                key={index}
                                active={location.pathname.includes((item.link))}
                                tooltip={item.tooltip}
                                icon={item.icon}
                                onClick={() => {}}
                                link={item.link}
                                notifications={item.notifications}
                            />
                        ))
                    }
                </Stack>
            </Stack>
        </LeftPanelContainer>
    );
}

const LeftPanelContainer = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.dark,
    width: theme.spacing(9),
    height: '100%',
}));
