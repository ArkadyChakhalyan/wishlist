import { TWishlistItemProps } from "./types";
import { alpha, Checkbox, Paper, Stack, styled } from "@mui/material";
import React, { FunctionComponent, useRef } from "react";
import { theme } from "../../../../styles/theme";
import { useDispatch } from "react-redux";
import {
    deleteWishlistItemAC,
    editWishlistItemLinkAC,
    toggleWishlistItemDoneAC
} from "../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { WishlistItemName } from "./wishlistItemName";
import { useLocation, useNavigate } from "react-router-dom";
import { WishlistItemActions } from "./wishlistItemActions";
import { WishlistItemLink } from "./wishlistItemLink";

export const WishlistItem: FunctionComponent<TWishlistItemProps> = ({
    wishlistId,
    item
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        id,
        done,
        name,
        link = ''
    } = item;

    const edit = location.pathname.includes(`${id}`);
    const ref = useRef(null);

    const onToggleDone = () => {
        dispatch(toggleWishlistItemDoneAC({ wishlistId, itemId: id }));
    };

    const onCardToggle = () => {
        if (edit) {
            navigate(`${wishlistId}`);
        } else {
            navigate(`${wishlistId}/${id}`);
        }
    };

    const onCardClick = (e: React.MouseEvent) => {
        if (e && ref.current !== e.target) return;

        onCardToggle();
    };

    const onDelete = () => {
        dispatch(deleteWishlistItemAC({ wishlistId, itemId: id }));
        navigate(`${wishlistId}`);
    };

    const onLinkChange = (link: string) => {
        dispatch(editWishlistItemLinkAC({ wishlistId, itemId: id, link }));
    };

    const cardStyle = {
        position: 'relative',
        height: edit && name ? theme.spacing(21) : name ? theme.spacing(7) : theme.spacing(10),
        width: 1,
        cursor: 'pointer',
        opacity: done && !edit ? 0.6 : 1,
        background: edit ? alpha(theme.palette.primary.light, 0.1) : 'none'
    };

    const checkboxStyle = {
        position: 'absolute',
        top: theme.spacing(0.75),
        left: theme.spacing(0.75),
        '& .MuiSvgIcon-root': { fontSize: theme.spacing(3.5) }
    };

    const contentStyle = {
        height: 1,
        justifyContent: edit ? 'flex-start' : 'center',
        px: edit ? 3 : 1,
        pt: edit ? 2.75 : 0,
        pl: edit ? 3 : 6.25,
        pointerEvents: edit ? 'all' : 'none'
    };

    return (
        <Card
            sx={cardStyle}
            elevation={edit ? 7 : 4}
            onClick={onCardClick}
            ref={ref}
        >
            {
                !edit &&
                <Checkbox
                    checked={done}
                    onChange={onToggleDone}
                    sx={checkboxStyle}
                />
            }
            <Stack
                spacing={1.5}
                sx={contentStyle}
            >
                <WishlistItemName
                    itemId={id}
                    name={name}
                    wishlistId={wishlistId}
                    edit={edit}
                />
                {
                    name && edit &&
                    <WishlistItemLink
                        link={link}
                        onLinkChange={onLinkChange}
                        onClose={onCardToggle}
                    />
                }
            </Stack>
            {
                name &&
                <WishlistItemActions
                    onDelete={onDelete}
                    onLinkChange={onLinkChange}
                    onSave={onCardToggle}
                    onToggleDone={onToggleDone}
                    edit={edit}
                    link={link}
                    done={done}
                />
            }
        </Card>
    );
}

const Card = styled(Paper)(({ theme }) => ({
    '&:hover': {
        opacity: 1,
        background: alpha(theme.palette.primary.light, 0.1)
    }
}));