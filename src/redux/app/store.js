import { configureStore } from '@reduxjs/toolkit';
import { isLogin } from '../slice';

const store = configureStore({
  reducer: {
    isLogin: isLogin.reducer,
  },
});
export default store;
