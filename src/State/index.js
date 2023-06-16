import { configureStore } from '@reduxjs/toolkit';

import cartSliceReducer from './Slice/cartSlice';
import authSliceReducer from './Slice/authSlice';
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;