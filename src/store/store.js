import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import totalPriceReducer from "./totalPriceSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    totalPrice: totalPriceReducer,
  },
});

export default store;
