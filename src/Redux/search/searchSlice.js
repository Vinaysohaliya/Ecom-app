import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an async thunk to fetch products from the backend
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await fetch('/api/fetchAllProduct'); 
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
    filteredProducts: null,
    products: [], // Add a products array to store the fetched products
    loading: false,
  },
  reducers: {
    handleSearch: (state, action) => {
      const trimmedQuery = action.payload.trim().toLowerCase();
      if (trimmedQuery === '') {
        state.filteredProducts = null;
      } else {
        const matchingProducts = state.products.filter((product) =>
          product.name.toLowerCase().includes(trimmedQuery)
        );
        state.filteredProducts = matchingProducts;
      }
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { handleSearch, setSearch } = searchSlice.actions;

export default searchSlice.reducer;
