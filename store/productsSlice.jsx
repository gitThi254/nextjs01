"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "products/getCartItems",
  async (name, thunkAPI) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 },
      });
      return res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue("some thing wrong");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
