// productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },

  reducers: {
    setAllProducts: (state, action) => {
      console.log("action....",action)
      state.products = action.payload;  // ✅ direct mutation allowed (Immer)
    },
  },
});

export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;