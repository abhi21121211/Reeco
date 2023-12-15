// productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const response = await fetch("http://localhost:3000/products");
 
   
  const data = await response.json();
  console.log(data);
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [], // Ensure products is initialized as an array
    loading: false,
    error: null,
  },
  reducers: {
    showProducts(state, action) {
      // Modify state as needed
    },
    productMissing(state, action) {
      // Modify state as needed
    },
    productApproved(state, action) {
      // Modify state as needed
    },
    productUpdate(state, action) {
      // Modify state as needed
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
        state.error = null;
        console.log(state.products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { showProducts, productMissing, productApproved, productUpdate } = productSlice.actions;

export default productSlice.reducer;
