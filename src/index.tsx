import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./components/app";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Browser} from "react-router-dom";
import { alpha, GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Browser>
                <ThemeProvider theme={theme}>
                    <GlobalStyles styles={{ body: { background: alpha(theme.palette.common.black, 0.03), margin: 0 }  }} />
                    <App />
                </ThemeProvider>
            </Browser>
        </Provider>
    </React.StrictMode>
);
