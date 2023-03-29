import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../../models/ICartItem";
import { ICart } from "../../../models/ICart";
import { IChangeQuantityPayload } from "./card.types";

const initialState: ICart = {
  cartList: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      itemIndex >= 0
        ? (state.cartList[itemIndex].count += 1)
        : state.cartList.push({ ...action.payload });
      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cartList = state.cartList.filter((i) => i.id !== action.payload);
      cartSlice.caseReducers.calculateCountAndPrice(state);
    },
		changeCount: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			console.log(action.payload);
			const { id, type } = action.payload
			const item = state.cartList.find(item => item.id === id)
			if (item) { if (item.count === 1 && type !== 'plus') return}
			if (item) type === 'plus' ? item.count++ : item.count--
			cartSlice.caseReducers.calculateCountAndPrice(state);
		},
    clearCart: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    calculateCountAndPrice: (state) => {
      state.totalCount = state.cartList.reduce((count, item) => count + item.count, 0);
      state.totalPrice = state.cartList.reduce((sum, item) => {
				return sum + item.product.price * item.count;
      }, 0);
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
	changeCount,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;