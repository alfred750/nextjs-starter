import { configureStore } from '@reduxjs/toolkit';

import sessionReducer from './session';

export default configureStore({
  reducer: {
    session: sessionReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
