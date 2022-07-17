import { TEmptyProps } from "./types";
import { Button, Stack, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

export const Empty: FunctionComponent<TEmptyProps> = ({
    text,
    buttonText,
    icon,
    onClick
}) => (
    <Stack sx={{height: 1, alignItems: 'center'}}>
        <Stack
            spacing={1}
            sx={{
                width: 'fit-content',
                alignItems: 'center',
                justifyContent: 'center',
                height: 1
            }}
        >
            {icon}
            <Typography>
                {text}
            </Typography>
            <Button
                onClick={onClick}
                fullWidth
            >
                {buttonText}
            </Button>
        </Stack>
    </Stack>
)