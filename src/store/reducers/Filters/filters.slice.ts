import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from '../../../models/IFilters';

const initialState: IFilters = {
  price: [0, 10000],
  sort: [true, true],
  type: [],
  manufacturers: {},
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterPrice: (state, action: PayloadAction<number[]>) => {
      state.price = action.payload;
    },
    setFilterType: (state, action: PayloadAction<string[]>) => {
      state.type = action.payload;
    },
    setFilterManufact: (state, action: PayloadAction<{ [key: string]: boolean }>) => {
      console.log(action.payload);
      state.manufacturers = action.payload;
    },
    setSortParam: (state, action: PayloadAction<boolean[]>) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilterPrice, setSortParam, setFilterType, setFilterManufact } =
  filtersSlice.actions;
export default filtersSlice.reducer;
