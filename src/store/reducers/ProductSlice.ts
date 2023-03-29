//================= УДАЛИТЬ ЭТОТ ФАЙЛ В КОНЦЕ
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct"
import { fetchProducts } from "./ActionCreators";

interface ProductState {
	products: IProduct[];
	isLoading: boolean;
	error: string;
}

const initialState = {
	products: [],
	isLoading: false,
	error: ''
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		// productFetching(state){
		// 	state.isLoading = true;
		// },
		// productFetchingSuccess(state, action: PayloadAction<IProduct[]>){
		// 	state.isLoading = false;
		// 	state.error = '';
		// 	state.products = action.payload; 
		// },
		// productFetchingError(state, action: PayloadAction<string>) {
		// 	state.isLoading = false;
		// 	state.error = action.payload;
		// }
	},
	extraReducers: {
		[fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
			state.isLoading = false;
			state.error = '';
			// state.products = action.payload;
		},
		[fetchProducts.pending.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = true;
		},
		[fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
})

export default productSlice.reducer;