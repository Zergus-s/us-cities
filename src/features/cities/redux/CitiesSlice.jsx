import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: { states: [], cities: [], loading: false, error: null },
  reducers: {
    fetchCities: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStates: (state) => {
      state.loading = true;
      state.error = null;
    },
    setCities: (state, action) => {
      state.cities = action.payload;
      state.loading = false;
      state.error = null;
    },
    setStates: (state, action) => {
      state.states = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCityStatus: () => {},
    createCity: () => {},
    deleteCity: () => {},
    updateCity: () => {},
  },
});

export default citiesSlice;
