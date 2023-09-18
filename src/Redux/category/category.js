// categorySlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios for making HTTP requests

const initialState = {
  categoryProducts: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategoryProductsStart: (state) => {
      state.loading = true;
    },
    fetchCategoryProductsSuccess: (state, action) => {
      state.categoryProducts = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCategoryProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoryProductsStart,
  fetchCategoryProductsSuccess,
  fetchCategoryProductsFailure,
} = categorySlice.actions;

// Async action to fetch products by category from the backend
export const fetchCategoryProducts = (category) => async (dispatch) => {
  dispatch(fetchCategoryProductsStart());

  try {
    const response = await axios.get(`/api/${category}`); // Replace with your backend API endpoint
    console.log(response.data);
    const categoryProducts = response.data;

    dispatch(fetchCategoryProductsSuccess(categoryProducts));
  } catch (error) {
    dispatch(fetchCategoryProductsFailure(error.message));
  }
};

export default categorySlice.reducer;
