import { createSlice } from '@reduxjs/toolkit';

export const CitiesSlice = createSlice({
  name: 'characters',
  initialState: { characters: [], status: null },
  reducers: {},
});

export default CitiesSlice.reducer;
