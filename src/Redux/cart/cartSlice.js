import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    item:[],
    total:0
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.item.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }

      state.total = state.item.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);

    },
    removeFromCart: (state, action) => {
      return state.item.filter((item) => item.id !== action.payload.id);
    },
   
  },
});




export const { addToCart, removeFromCart } = cartSlice.actions;


export default cartSlice.reducer;
