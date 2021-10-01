import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../API/index';

export const fetchUsers = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const response = await axios.get('users');

    return response.data;
  }
);

export const UsersSlice = createSlice({
  name: 'users',
  initialState: { users: [], status: '' },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.status = 'success';
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'failed';
      console.error(action.error.message, 'characters');
    },
  },
});

export default UsersSlice.reducer;
