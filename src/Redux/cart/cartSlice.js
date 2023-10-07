import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    setCartData: (state, action) => {
      state.total = state.items.reduce((total, product) => {
        return total + product.price*product.quantity;
      }, 0);
      state.items = action.payload.map(product => ({
        productId: product.productId,
        quantity: product.quantity,
        category:product.category,
        price:product.price,
        subcategory:product.subcategory,
        name:product.name,
        description:product.description,
        imageUrl:product.imageUrl,
      }));
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.items = state.items.filter((product) => product.productId !== productIdToRemove);
      state.total = state.items.reduce((total, product) => total + product.price * product.quantity, 0);
    },
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



export const { setCartData, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
