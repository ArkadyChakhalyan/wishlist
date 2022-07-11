import { store } from "./store";
import { TWishlistsState } from "./reducers/wishlistsReducer/types";

export interface IAppState {
    wishlists: TWishlistsState;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch