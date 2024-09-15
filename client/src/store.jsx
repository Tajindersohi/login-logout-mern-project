// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import reducers from './redux/reducers';

const store = configureStore({
  reducer: {
    auth: reducers,
  },
});

export default store;
