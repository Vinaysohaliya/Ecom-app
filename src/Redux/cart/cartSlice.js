import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    item:[],
    total:0
  },
  reducers: {
    // addToCart: (state, action) => {
    //   const existingItem = state.item.find((item) => item.id === action.payload.id);

    //   if (existingItem) {
    //     existingItem.quantity++;
    //   } else {
    //     state.item.push({ ...action.payload, quantity: 1 });
    //   }

    //   state.total = state.item.reduce((total, product) => {
    //     return total + product.price * product.quantity;
    //   }, 0);

    // },
    // removeFromCart: (state, action) => {
    //   return state.item.filter((item) => item.id !== action.payload.id);
    // },
    setCartData:(state,action)=>{
        state.item=action.payload;  
    }
   
  },
});



export const fetchCartData = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/cartData'); 
    const cartData = response.data;
    dispatch(setCartData(cartData)); 
  } catch (error) {

    console.error('Error fetching cart data:', error);
  }
};



export const { setCartData } = cartSlice.actions;


export default cartSlice.reducer;
