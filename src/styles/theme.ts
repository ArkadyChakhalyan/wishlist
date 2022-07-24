import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[800],
            dark: blue[900]
        },
        error: {
            main: red[600],
            dark: red[700]
        }
    },
});