import { store } from "./store";

export interface IAppState {

}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch