import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../models/IProduct';

export interface IProductListType {
  products: IProduct[];
  types: string[];
}

const initialState: IProductListType = {
  products: [],
  types: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLocalProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      const uniqueTypes = Array.from(new Set(state.products.flatMap((product) => product.type)));
      state.types = uniqueTypes;
    },
    setLocalTypes: (state, action: PayloadAction<string[]>) => {
      state.types = action.payload;
    },
    addLocalType: (state, action: PayloadAction<string>) => {
      state.types = [...state.types, action.payload];
    },
    removeLocalType: (state, action: PayloadAction<string>) => {
      state.types = state.types.filter((type) => type !== action.payload);
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

export const {
  setLocalProducts,
  setLocalTypes,
  removeLocalProduct,
  changeLocalProduct,
  addLocalProduct,
  addLocalType,
  removeLocalType,
} = productsSlice.actions;
export default productsSlice.reducer;
