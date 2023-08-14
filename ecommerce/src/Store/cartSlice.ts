// src/app/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../models/cart';
import { RootState } from './store';
const initialState: CartState = {
  items:[],
  cartQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.subtotal += action.payload.price;
      } else {
        state.items.push(action.payload);
      }
      initialState.cartQuantity++;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(item => item.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;
