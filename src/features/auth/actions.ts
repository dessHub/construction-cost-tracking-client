import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setToken, setUser } from '../../utils';

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
        console.log('eee', e)
        throw('invalid logins')
    }
});