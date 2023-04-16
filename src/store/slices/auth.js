import { createSlice } from '@reduxjs/toolkit';
import getCookie from '../../utils/getCookie';


const initialState = {
  token: getCookie('tokenAccess'),
  isLogin: Boolean(getCookie('username')),
  id: getCookie('id'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = true;
      state.id = action.payload.id;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.token = '';
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

export const { setLogin, setToken, setLogout } = authSlice.actions;
export default authSlice.reducer;