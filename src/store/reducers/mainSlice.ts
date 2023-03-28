import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditParamsType } from "../../models/EditParamsType";
import { ICartItem } from "../../models/ICardItem";
import { IProduct } from "../../models/IProduct";
import { IState } from "../../models/IState";

const initialState: IState = {
  productList: [],
  cartList: [],
  totalPrice: 0,
  totalCount: 0,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
		setProducts:(state, action: PayloadAction<IProduct[]>) => {
			state.productList = action.payload;
		},
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.productList.unshift({
        ...action.payload,
        id: state.productList[state.productList.length - 1].id + 1,
      });
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.productList = state.productList.filter(
        (i) => !(i.id === action.payload)
      );
      state.cartList = state.cartList.filter((i) => i.id !== action.payload);
      mainSlice.caseReducers.calculateCountAndPrice(state);
    },
    editProduct: (state, action: PayloadAction<EditParamsType>) => {
      state.productList = state.productList.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, [action.payload.option]: action.payload.value };
        return { ...item };
      });
      mainSlice.caseReducers.calculateCountAndPrice(state);
    },
    addProductToCart: (state, action: PayloadAction<ICartItem>) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );
      itemIndex >= 0
        ? (state.cartList[itemIndex].count += 1)
        : state.cartList.push({ ...action.payload });
      mainSlice.caseReducers.calculateCountAndPrice(state);
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartList = state.cartList.filter((i) => i.id !== action.payload);
      mainSlice.caseReducers.calculateCountAndPrice(state);
    },
    clearCart: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    calculateCountAndPrice: (state) => {
      state.totalCount = state.cartList.reduce((count, item) => count + item.count, 0);
      state.totalPrice = state.cartList.reduce((sum, item) => {
        const product = state.productList.find(
          (product) => product.id === item.id);
        return sum + (product?.price || 0) * item.count;
      }, 0);
    },
  },
});

export const {
	setProducts,
  addProduct,
  deleteProduct,
  editProduct,
  addProductToCart,
  deleteProductFromCart,
  clearCart,
} = mainSlice.actions;
export default mainSlice.reducer;