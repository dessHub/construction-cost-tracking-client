import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./actions";

export interface User {
  id: string,
  name: string,
  email: string
}
export interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
}
const initialState: UserState = {
  loading: false,
  users: [],
  error: undefined,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<User>>) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers: {}
})