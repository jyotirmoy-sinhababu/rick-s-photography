import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../slice/AuthSlice';

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default Store;
