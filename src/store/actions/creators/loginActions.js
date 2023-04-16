import { SIGN_UP } from "../types";

export const signUp = (content) => ({
    type: SIGN_UP,
    payload: content
});