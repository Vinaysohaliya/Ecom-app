import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice'; 
import sortReducer from './sorting/sort'; 
import searchReducer from '../Redux/search/searchSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer, 
    sort: sortReducer,
    search:searchReducer,
  },
});

export default store;
