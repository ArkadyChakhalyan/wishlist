import React, { FC } from "react";
import { Tooltip as MUITooltip, TooltipProps, Typography } from "@mui/material";

export const Tooltip: FC<TooltipProps> = (props) => (
    <MUITooltip
        {...props}
        title={
            <Typography sx={{ p: 0.25 }} fontSize={'small'}>
                {props.title}
            </Typography>
        }
        disableInteractive
        enterDelay={300}
        enterNextDelay={300}
    >
        {props.children}
    </MUITooltip>
)