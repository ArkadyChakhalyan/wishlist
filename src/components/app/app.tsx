import { IAppProps } from "./types";
import { Header } from "../header";
import { LeftPanel } from "../leftPanel";
import { Content } from "../content";

export const App = ({}:IAppProps) => {
    return (
        <>
            <LeftPanel />
            <Header />
            <Content />
        </>
    );
}