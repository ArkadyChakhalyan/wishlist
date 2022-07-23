import { TWishlistsItemButtonProps } from "./types";
import { Avatar, ListItemButton, Stack, Typography } from "@mui/material";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { WISHLIST_ICONS } from "../../../../../../common/wishlist/constants";
import { theme } from "../../../../../../../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "../../../../../../../UI/tooltip/tooltip";

export const WishlistsItemButton: FunctionComponent<TWishlistsItemButtonProps> = ({
    wishlist,
    folded
}) => {
    const {
        id,
        name,
        color,
        icon
    } = wishlist;

    const navigate = useNavigate();
    const location = useLocation();

    const [wrap, setWrap] = useState(false);
    const ref = useRef<HTMLElement>(null);

    const onClick = () => {
        navigate(`${id}`);
    };

    useEffect(() => {
        if (
            ref.current &&
            ref.current.offsetHeight > 24 // line height
        ) {
            setWrap(true);
        }
    }, [name]);

    const buttonStyle = {
        p: 1,
        pl: 2,
        pr: folded ? 2 : 9,
        display: 'flex',
        justifyContent: 'space-between'
    };

    return (
        <ListItemButton
            autoFocus
            selected={location.pathname.includes(String(id))}
            onClick={onClick}
            sx={buttonStyle}
        >
            <Stack
                direction='row'
                spacing={1.5}
                sx={{ alignItems: 'center', overflow: 'hidden' }}
            >
                <Avatar
                    sx={{
                        bgcolor: color,
                        height: theme.spacing(4),
                        width: theme.spacing(4)
                    }}
                    variant='rounded'
                >
                    {icon && WISHLIST_ICONS[icon]}
                </Avatar>
                {
                    !folded &&
                    <>
                        {
                            wrap ?
                                <Tooltip title={name}>
                                    <Typography noWrap={wrap} ref={ref}>
                                        {name}
                                    </Typography>
                                </Tooltip>
                                :
                                <Typography noWrap={wrap} ref={ref}>
                                    {name}
                                </Typography>
                        }
                    </>
                }
            </Stack>
        </ListItemButton>
    );
}