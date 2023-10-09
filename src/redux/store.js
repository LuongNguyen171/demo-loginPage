import { configureStore } from '@reduxjs/toolkit';
import { isLogin } from './reducers';

const store = configureStore({
  reducer: {
    isLogin: isLogin.reducer,
  },
});
export default store;
