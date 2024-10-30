import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";
const initialState = {
  productList: [],
  cartItem: [],
  
};
 
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { dispatch }) => {
    try {
      await axios.delete(`http://localhost:5050/api/product/${id}`); // Update with your API endpoint
      dispatch(removeProductFromList(id)); // Dispatch an action to remove from state
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete the product.");
    }
  }
);
   
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    editCard: (state, action) => {
      const index = state.productList.findIndex(el => el._id === action.payload.id);
      
      if (index !== -1) {
        state.productList[index] = {
          ...state.productList[index],
          ...action.payload.edit, 
        };
        toast.success("Product updated successfully!"); 
      } else {
        toast.error("Product not found!"); 
      }
    },
    removeProductFromList: (state, action) => {
      const index = state.productList.findIndex((el) => el._id === action.payload);
      if (index !== -1) {
        state.productList.splice(index, 1);
      }
    },

    addCartItem: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      if (check) {
        toast("Already Item in Cart");
      } else {
        
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
    deleteCartItem: (state, action) => {
      toast("one Item Delete");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
      
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      const price = state.cartItem[index].price;
      const total = price * qtyInc;

      state.cartItem[index].total = total;
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDec = ++qty;
        state.cartItem[index].qty = qtyDec;

        const price = state.cartItem[index].price;
        const total = price * qtyDec;

        state.cartItem[index].total = total;
      }
    },
  },
});

export const {
  setDataProduct,
  editCard,
  removeProductFromList,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} = productSlice.actions;

export default productSlice.reducer;
