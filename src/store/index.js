// store.js

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // Import the reducer, not the entire slice

const store = configureStore({
  reducer: {
    products: productReducer, // Use the reducer, not the entire slice
  },
});

export default store;
