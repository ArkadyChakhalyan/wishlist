import React, { FunctionComponent } from "react";
import { Tooltip as MUITooltip, TooltipProps, Typography } from "@mui/material";

export const Tooltip: FunctionComponent<TooltipProps> = (props) => (
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