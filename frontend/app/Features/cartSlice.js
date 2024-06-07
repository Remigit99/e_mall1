import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].productQuantity += 1;
        toast.info(`${action.payload.title} increased`, {position: "top-right"})
      } else {
        const tempProduct = { ...action.payload, productQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {position: "top-right"})
      }

      state.cartTotalQuantity++;

    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
