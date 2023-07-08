import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState: 0,
  reducers: {
    calculateTotalPrice(state, action) {
      state = action.payload;
    },
  },
});

export const { calculateTotalPrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;
