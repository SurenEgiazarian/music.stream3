import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './reducers/user';
import catalogReducer from './reducers/catalog';

export const store = configureStore({
    reducer: {
        user: userReducer,
        catalog: catalogReducer,
    },
    middleware: [thunk],
});
