import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../../models/IProduct";
import { AppDispatch } from "../store";
import { productSlice } from "./ProductSlice";


// export const fetchProducts = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(productSlice.actions.productFetching())
// 		const response  = await axios.get<IProduct[]>('http://localhost:7000/products')
// 		dispatch(productSlice.actions.productFetchingSuccess(response.data))
// 	} catch (error:any) {
// 		dispatch(productSlice.actions.productFetchingError(error.message))
// 	}
// }

export const fetchProducts = createAsyncThunk(
	'product/fetchAll',
	async(_, thunkAPI) => {
		try {
			const response = await axios.get<IProduct[]>('http://localhost:7000/products')
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue('Не удалось загрузить список товаров.')
		}

	}
) 