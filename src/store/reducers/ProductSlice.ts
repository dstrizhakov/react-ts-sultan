import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct"

interface ProductState {
	products: IProduct[];
	isLoading: boolean;
	error: string;
	count: number;
	
}

const initialState = {
	products: [],
	isLoading: false,
	error: '',
	count: 0
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
increment(state, action: PayloadAction<number>) {
	state.count += action.payload;
},
decrement(state, action: PayloadAction<number>) {
state.count -=action.payload;
}
	}
})

export default productSlice.reducer;