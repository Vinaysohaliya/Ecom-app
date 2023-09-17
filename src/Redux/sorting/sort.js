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
    handleCategory:(state,action)=>{
      const categery = action.payload;
       if (categery=='All') {
            state.sortedProducts=products
        }else{
            const categeryProducts=products.filter((p)=>p.category==categery)
            state.sortedProducts=categeryProducts;
        }
    }
  }
})

export const { handleSort,handleCategory } = sortSlice.actions;


export default sortSlice.reducer;
