import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout } from "./actions";

export interface User {
  id: string,
  role: string,
  email: string,
  [key: string]: unknown
}
export interface Payload {
    user: User,
    token: string
}

export interface AuthState {
  loading: boolean;
  user: User | null;
  token: string | null;
  error: string | undefined;
}
const initialState: AuthState = {
  loading: false,
  user: null,
  token: null,
  error: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<Payload>) => {
      const {user, token} = action.payload;

      state.loading = false;
      state.user = user;
      state.token = token
      state.error = undefined
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = action.error.message;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.token = null
      state.error = undefined
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {}
})