// src/app/store.ts
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productSlice'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


