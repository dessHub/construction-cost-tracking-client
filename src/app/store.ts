import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/users'
import { authSlice } from '../features/auth';

export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        auth: authSlice.reducer
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;