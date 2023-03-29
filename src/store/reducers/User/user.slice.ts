import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

const initialState: IUser = {
  isAdmin: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
			state.isAdmin = action.payload
    }
  },
});

export const { setIsAdmin } = userSlice.actions;
export default userSlice.reducer;