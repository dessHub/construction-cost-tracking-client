import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    () => {
      const res = fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json());
      return res;
    }
)