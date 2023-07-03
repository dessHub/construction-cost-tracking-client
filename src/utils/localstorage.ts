import {User} from '../features/auth';

export const getToken = () => {
    return localStorage.getItem('token');
}

export const removeToken = () => {
    localStorage.removeItem('token');
}

export const setToken = (val: string) => {
    localStorage.setItem('token', val);
}

export const setUser = (val: User) => {
    localStorage.setItem('user', JSON.stringify(val))
}

export const getUser = () => localStorage.getItem('user');