// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const response = await fetch("https://reeco-server1.onrender.com/products");
  const data = await response.json();
  return data;
});


// Async thunk for marking a product as approved
export const approveProduct = createAsyncThunk("product/approveProduct", async (productId) => {
  // Perform an API call to update the status on the server
  const response = await fetch(`https://reeco-server1.onrender.com/products/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: "Approved" }),
  });
  const updatedProduct = await response.json();
  return updatedProduct;
});

// Async thunk for marking a product as missing
export const markProductMissing = createAsyncThunk("product/markProductMissing", async ({ productId, urgent }) => {
  // Perform an API call to update the status on the server
  const status = urgent ? "Missing - Urgent" : "Missing";
  const response = await fetch(`https://reeco-server1.onrender.com/products/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  const updatedProduct = await response.json();
  return updatedProduct;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    
    showProducts(state, action) {
     
    },
    productUpdate(state, action) {
      
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
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle the approval action
      .addCase(approveProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex((pro) => pro.id === updatedProduct.id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      // Handle the mark missing action
      .addCase(markProductMissing.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex((pro) => pro.id === updatedProduct.id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex((pro) => pro.id === updatedProduct.id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
  },
});

export const editProduct = createAsyncThunk("product/editProduct", async ({ productId, price, quantity }) => {
  // Perform an API call to update the price and quantity on the server
  const response = await fetch(`https://reeco-server1.onrender.com/products/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ price, quantity }),
  });
  const updatedProduct = await response.json();
  return updatedProduct;
});

export const { showProducts, productUpdate } = productSlice.actions;

export default productSlice.reducer;
