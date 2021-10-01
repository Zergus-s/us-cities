import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CitiesSlice from '../features/cities/redux/CitiesSlice';
import UsersSlice from '../features/users-list/redux/UsersSlice';

export const store = configureStore({
  reducer: combineReducers({ users: UsersSlice, cities: CitiesSlice }),
});
