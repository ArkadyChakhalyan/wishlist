import { TAppProps } from "./types";
import { Header } from "../header";
import { LeftPanel } from "../leftPanel";
import { Content } from "../content";
import { FC } from "react";

export const App: FC<TAppProps> = () => {
    return (
        <>
            <LeftPanel />
            <Header />
            <Content />
        </>
    );
}