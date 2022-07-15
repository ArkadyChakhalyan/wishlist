import { IAppState } from "../../../types";

export const getFolded = (
    state: IAppState
): boolean => {
    return state.wishlists.folded;
}