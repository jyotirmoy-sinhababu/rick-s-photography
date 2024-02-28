import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../slice/AuthSlice';
import PostReducer from '../slice/PostSlice';
import UpdateReducer from '../slice/UpdateSlice';

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    post: PostReducer,
    update: UpdateReducer,
  },
});

export default Store;
