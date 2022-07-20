import { TCreateWishlistModalProps } from "./types";
import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { theme } from "../../../../../../styles/theme";
import {
    DEFAULT_WISHLIST,
    WISHLISTS_CREATE_PLACEHOLDER,
    WISHLISTS_DEFAULT_NAME
} from "../../../../../common/wishlist/constants";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { WISHLISTS_PAGE_EMPTY_CREATE_MODAL_TEXT, WISHLISTS_PAGE_EMPTY_CREATE_MODAL_TITLE } from "./constants";
import { useDispatch } from "react-redux";
import { addWishlistAC } from "../../../../../../store/reducers/wishlistsReducer/wishlistsReducer";
import { WISHLISTS_CREATE_BUTTON } from "../../constants";

export const CreateWishlistModal: FunctionComponent<TCreateWishlistModalProps> = ({
    anchor,
    onClose
}) => {
    const dispatch = useDispatch();

    const [name, setName] = useState(WISHLISTS_DEFAULT_NAME);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const ref = useRef(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onSubmit = () => {
        if (!name || !name.length) {
            setError(true);
            setDisabled(true);
        } else {
            onClose();

            const wishlist = {
                ...DEFAULT_WISHLIST,
                name,
                id: Date.now()
            };

            dispatch(addWishlistAC(wishlist));
        }
    };

    useEffect(() => {
        setDisabled(false);
        setError(false);
    }, [name]);

    useEffect(() => {
        if (anchor) {
            setTimeout(() => {
                const input = ref.current as HTMLInputElement | null;
                if (input) {
                    input.focus();
                    input.select();
                }
            }, 0);
        }
    }, [anchor]);

    const style = {
        position: 'absolute' as 'absolute',
        top: `calc(50% + ${theme.spacing(4)})`,
        left: `calc(50% + ${theme.spacing(4.5)})`,
        transform: 'translate(-50%, -50%)',
        width: theme.spacing(42),
        borderRadius: theme.spacing(0.75),
        p: 2,
        bgcolor: 'background.paper'
    };

    return (
        <Modal
            open={!!anchor}
            onClose={onClose}
            tabIndex={0}
        >
            <Box sx={style}>
                <Typography
                    variant='h6'
                    sx={{ mb: 2 }}
                >
                    {WISHLISTS_PAGE_EMPTY_CREATE_MODAL_TITLE}
                </Typography>
                <Stack
                    spacing={1}
                    component='form'
                    onSubmit={onSubmit}
                >
                    <Typography sx={{ mb: 2 }}>
                        {WISHLISTS_PAGE_EMPTY_CREATE_MODAL_TEXT}
                    </Typography>
                    <TextField
                        label={WISHLISTS_CREATE_PLACEHOLDER}
                        value={name}
                        onChange={onChange}
                        size='small'
                        error={error}
                        id='name'
                        name='name'
                        inputRef={ref}
                        required
                    />
                    <Button
                        type='submit'
                        disabled={disabled}
                    >
                        {WISHLISTS_CREATE_BUTTON}
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
}