/* eslint-disable no-debugger */
import {
    signupStartAC,
    signupSuccessAC,
    signupErrorAC,
    loginStartAC,
    loginSuccessAC,
    loginErrorAC,
    logoutAC,
    getTokenStartAC,
    getTokenSuccessAC,
    getTokenErrorAC,
    tokenRefreshStartAC,
    tokenRefreshSuccessAC,
    tokenRefreshErrorAC,
} from '../creators/user';

import { userAPI } from '../../../api/api';
import { cookies } from '../../../utils/cookies';

export const signup = (username, email, password) => async (dispatch) => {
    dispatch(signupStartAC());

    try {
        const response = await userAPI.signup(username, email, password);
        debugger;
        dispatch(signupSuccessAC(response));
    } catch (error) {
        dispatch(signupErrorAC(error));
    }
};

export const getToken = (email, password) => async (dispatch, getState) => {
    console.log('getTokenThunk');

    dispatch(getTokenStartAC());

    try {
        const response = await userAPI.getToken(email, password);

        dispatch(getTokenSuccessAC(response));
        const state = getState();
        cookies.set('token', state.user.token.access);
    } catch (error) {
        dispatch(getTokenErrorAC(error));
    }
};

export const login = (email, password) => async (dispatch) => {
    console.log('loginThunk');
    dispatch(loginStartAC());

    try {
        const loginResponse = await userAPI.login(email, password);

        dispatch(loginSuccessAC(loginResponse));

        dispatch(getToken(email, password));
    } catch (error) {
        dispatch(loginErrorAC(error));
    }
};

export const logout = () => (dispatch) => {
    dispatch(logoutAC());
    cookies.delete('token');
};

export const tokenRefresh = (refresh) => async (dispatch) => {
    dispatch(tokenRefreshStartAC());

    try {
        const response = await userAPI.tokenRefresh(refresh);

        dispatch(tokenRefreshSuccessAC(response));
    } catch (error) {
        dispatch(tokenRefreshErrorAC(error));
    }
};
