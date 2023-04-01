import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';

const initialState: IUser = {
  isAdmin: false,
  isServerOnline: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    setIsServerOnline: (state, action: PayloadAction<boolean>) => {
      state.isServerOnline = action.payload;
    },
  },
});

export const { setIsAdmin, setIsServerOnline } = userSlice.actions;
export default userSlice.reducer;
