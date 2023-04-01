import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from '../../../models/IFilters';

const initialState: IFilters = {
  price: [0, 10000],
  sort: [true, true],
  sortTarget: true,
  sortType: true,
};

export const filtersSlice = createSlice({
  name: 'filters',
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
    },
    setSortParam: (state, action: PayloadAction<boolean[]>) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilterPrice, setSortTarget, setSortType, setSortParam } = filtersSlice.actions;
export default filtersSlice.reducer;
