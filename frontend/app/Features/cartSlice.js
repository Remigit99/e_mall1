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
        toast.info("Item added to cart", {position: "top-right"})
      } else {
        const tempProduct = { ...action.payload, productQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("New items added to cart", {position: "top-right"})

      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
