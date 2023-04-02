import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from '../../../models/IFilters';

const initialState: IFilters = {
  price: [0, 10000],
  sort: [true, true],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterPrice: (state, action: PayloadAction<number[]>) => {
      state.price = action.payload;
    },
    setSortParam: (state, action: PayloadAction<boolean[]>) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilterPrice, setSortParam } = filtersSlice.actions;
export default filtersSlice.reducer;
