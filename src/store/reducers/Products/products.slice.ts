import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../models/IProduct';

interface IProductListType {
  products: IProduct[];
}

const initialState: IProductListType = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLocalProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    removeLocalProduct: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    changeLocalProduct: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload.id) return { ...action.payload };
        return { ...item };
      });
    },
    addLocalProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.unshift({
        ...action.payload,
        id: state.products[state.products.length - 1].id + 1,
      });
    },
  },
});

export const { setLocalProducts, removeLocalProduct, changeLocalProduct, addLocalProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
