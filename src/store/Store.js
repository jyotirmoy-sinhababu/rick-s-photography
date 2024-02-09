import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../slice/AuthSlice';
import PostReducer from '../slice/PostSlice';

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    post: PostReducer,
  },
});

export default Store;
