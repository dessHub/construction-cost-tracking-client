import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, removeToken, removeUser, setToken, setUser } from '../../utils';

export const login = createAsyncThunk('auth/login', async (payload) => {
    try {
        const response = await api.post('/authentication', payload);
<<<<<<< HEAD
=======
        console.log('data', response)
>>>>>>> 93399ba (Integrate login)
        const token = response.data.accessToken;
        const user = response.data.user;
        setToken(token);
        setUser(user)
        return {user, token};
    } catch(e) {
        throw('Invalid logins, try again!!')
    }
});

export const logout = createAsyncThunk('auth/logout', () => {
    try {
        removeToken();
        removeUser()
        return;
    } catch(e) {
        throw('error login out')
    }
});