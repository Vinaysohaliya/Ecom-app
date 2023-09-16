import { createSlice } from '@reduxjs/toolkit';
import products from '../../pages/product.json'

const searchSlice = createSlice({
  name: 'search',
  initialState:{
    search:'',
    FilteredProducts:null,
  },
  reducers: {
   
     handleSearch : (state,action) => {
        const trimmedQuery = action.payload.trim().toLowerCase();
        if (trimmedQuery === '') {
            state.FilteredProducts=null // Reset to all products if the query is empty
        } else {
            const matchingProducts = products.filter((product) =>
                product.name.toLowerCase().includes(trimmedQuery)
            );
            state.FilteredProducts=matchingProducts;
        }
    },
    setsearch:(state,action)=>{
        state.search=action.payload;
    }



   
  },
});




export const { handleSearch, setsearch } = searchSlice.actions;


export default searchSlice.reducer;
