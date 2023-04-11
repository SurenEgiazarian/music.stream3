/* eslint-disable no-debugger */
/* eslint-disable default-param-last */
/* eslint-disable prefer-destructuring */
import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT,
    GET_TOKEN_START,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_ERROR,
    // TOKEN_REFRESH_START, TOKEN_REFRESH_SUCCESS, TOKEN_REFRESH_ERROR
} from '../actions/types/user';

const initialState = {
    loading: false,
    error: null,
    id: null,
    username: 'myUserName',
    firstName: 'Name',
    lastName: 'Sirname',
    email: null,
    password: null,
    token: {
        refresh: '',
        access: '',
    },
};

export default function userReducer(state = initialState, action) {
    console.log(`reducer. action: ${action.type}`);
    switch (action.type) {
        case SIGNUP_START: {
            return {
                ...state,
                loading: true,
            };
        }

        case SIGNUP_SUCCESS: {
            const id = action.response.data.id;
            const username = action.response.data.username;
            const firstName = action.response.data.first_name || 'Name';
            const lastName = action.response.data.last_name || 'Sirname';
            const email = action.response.data.email;
            return {
                ...state,
                loading: false,
                error: null,
                id,
                username,
                firstName,
                lastName,
                email,
            };
        }

        case SIGNUP_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        case LOGIN_START: {
            return {
                ...state,
                loading: true,
            };
        }

        case LOGIN_SUCCESS: {
            const id = action.response.data.id;
            const username = action.response.data.username;
            const firstName = action.response.data.first_name || 'Name';
            const lastName = action.response.data.last_name || 'Sirname';
            const email = action.response.data.email;
            return {
                ...state,
                loading: false,
                error: null,
                id,
                username,
                firstName,
                lastName,
                email,
            };
        }

        case LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        case LOGOUT: {
            return {
                ...initialState,
                token: {
                    ...initialState.token,
                },
            };
        }

        case LOGOUT_START: {
            return {
                ...state,
                loading: true,
            };
        }

        case LOGOUT_SUCCESS: {
            return {
                ...initialState,
                token: {
                    ...initialState.token,
                },
            };
        }

        case LOGOUT_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        case GET_TOKEN_START: {
            return {
                ...state,
                loading: true,
            };
        }

        case GET_TOKEN_SUCCESS: {
            const access = action.response.data.access;
            const refresh = action.response.data.refresh;
            return {
                ...state,
                loading: false,
                error: null,
                token: {
                    access,
                    refresh,
                },
            };
        }

        case GET_TOKEN_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        default:
            return state;
    }
}
