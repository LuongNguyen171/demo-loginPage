import { createSlice } from '@reduxjs/toolkit';

export const isLogin = createSlice({
  name: 'ISLOGIN',
  initialState: false,
  reducers: {
    IS_LOGIN_REDUCER: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
