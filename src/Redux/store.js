import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice'; 
import productsSlice from './sorting/sort'; 
import searchReducer from '../Redux/search/searchSlice'
import categoryReducer from '../Redux/category/category'

const store = configureStore({
  reducer: {
    cart: cartReducer, 
    sort: productsSlice,
    search:searchReducer,
    category:categoryReducer
  },
});

export default store;
