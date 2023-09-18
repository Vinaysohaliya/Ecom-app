import { createSlice } from '@reduxjs/toolkit';
import products from '../../pages/product.json';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    sortedProducts: products
  },
  reducers: {
    handleSort: (state, action) => {

      const sortType = action.payload;

      let newSortedProducts = [...state.sortedProducts];


      if (sortType === 'asc') {
        newSortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortType === 'desc') {
        newSortedProducts.sort((a, b) => b.price - a.price);
      }

     state.sortedProducts=newSortedProducts;
    },
    handlesubCategory:(state,action)=>{
      const subcategery = action.payload;
       if (subcategery=='All') {
            state.sortedProducts=products
        }else{
            const subcategeryProducts=products.filter((p)=>p.category==subcategery)
            state.sortedProducts=subcategeryProducts;
        }
    }
  }
})

export const { handleSort,handlesubCategory } = sortSlice.actions;


export default sortSlice.reducer;
