import { TAppProps } from "./types";
import { Header } from "../header";
import { LeftPanel } from "../leftPanel";
import { Content } from "../content";
import { FunctionComponent } from "react";

export const App: FunctionComponent<TAppProps> = () => {
    return (
        <>
            <LeftPanel />
            <Header />
            <Content />
        </>
    );
}