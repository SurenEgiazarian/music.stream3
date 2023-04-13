import { objValuesToArray } from '../../utils/objValuesToArray';

export const userSelector = (store) => store.user;

export const userLoadingSelector = (store) => userSelector(store)?.loading;

export const userErrorSelector = (store) => userSelector(store)?.error;

export const userErrorMessageSelector = (store) =>
    userErrorSelector(store)?.message;

export const userErrorResponseSelector = (store) =>
    userErrorSelector(store)?.response;

export const userErrorResponseDataSelector = (store) =>
    userErrorResponseSelector(store)?.data;

export const allErrorsSelector = (store) => {
    const data = userErrorResponseDataSelector(store);
    return data ? objValuesToArray(data) : [];
};

export const userIdSelector = (store) => userSelector(store)?.id;

export const userTokenSelector = (store) => userSelector(store)?.token;

export const userAccessSelector = (store) => userTokenSelector(store)?.access;
