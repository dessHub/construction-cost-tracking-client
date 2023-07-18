import axios from 'axios'

const baseURL = 'http://localhost:3030/';

export const api = axios.create({
    baseURL
})
