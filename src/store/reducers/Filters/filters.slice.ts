import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilters } from "../../../models/IFilters";

const initialState: IFilters = {
  price: [0, 10000],
	sortTarget: false,
	sortType: false,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterPrice: (state, action: PayloadAction<number[]>) => {
			state.price = action.payload;
    },
		setSortTarget: (state, action: PayloadAction<boolean>) => {
			state.sortTarget = action.payload;
    },
		setSortType: (state, action: PayloadAction<boolean>) => {
			state.sortType = action.payload;
    }
  },
});

export const { 
	setFilterPrice, 
	setSortTarget, 
	setSortType } = filtersSlice.actions;
export default filtersSlice.reducer;