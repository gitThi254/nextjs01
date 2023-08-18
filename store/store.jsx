const { configureStore } = require("@reduxjs/toolkit");
import { Modern_Antiqua } from "next/font/google";
import productReducer from "./ProductsSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";
import conFirmReducer from "./conFirmSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    modal: modalReducer,
    confirm: conFirmReducer,
  },
});

export default store;
