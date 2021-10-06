import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import citiesSlice from '../features/cities/redux/citiesSlice';

import usersSlice from '../features/users-list/redux/usersSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({
    users: usersSlice.reducer,
    cities: citiesSlice.reducer,
  }),
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
