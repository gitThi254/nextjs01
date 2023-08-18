"use client";
const { createSlice } = require("@reduxjs/toolkit");

// const getCartItems = JSON.parse(localStorage.getItem("carts")) || [];
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    totalCheck: 0,
  },
  reducers: {
    add: (state, action) => {
      const newItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (newItem) {
        newItem.amount = newItem.amount + 1;
      } else {
        action.payload = { ...action.payload, amount: 1, isChecked: false };
        state.cartItems.push(action.payload);
      }
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    inscrease: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.amount = item.amount + 1;
      }
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    descrease: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.amount = item.amount - 1;
      }
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    isChecked: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.isChecked = action.payload.checked;
      }
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    calculatorTotals: (state) => {
      let total = 0;
      const cartIschecked = state.cartItems.filter((item) => item.isChecked);
      cartIschecked.forEach((item) => {
        total += item.amount * item.price;
      });
      state.totalCheck = cartIschecked.length;
      state.total = total;
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  add,
  remove,
  inscrease,
  descrease,
  calculatorTotals,
  clearCart,
  isChecked,
} = cartSlice.actions;
export default cartSlice.reducer;
