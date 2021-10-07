import { takeLatest, call, put, select } from '@redux-saga/core/effects';
import axios from '../../../API/index';

import citiesSlice from './citiesSlice';

function* deleteCitySaga({ payload }) {
  const { token } = yield select((state) => state.users.authData);
  yield call(axios.delete, `cities/${payload}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  yield put(citiesSlice.actions.fetchCities());
}

function* createCitySaga({ payload }) {
  const { token } = yield select((state) => state.users.authData);
  yield call(
    axios.post,
    `/cities/`,
    {
      name: payload.values.name,
      stateId: payload.values.stateId,
      population: payload.values.population,
      imageUrl: payload.values.imageURL,
      visited: payload.values.visited ? true : false,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  payload.close();
  yield put(citiesSlice.actions.fetchCities());
}

function* updateCitySaga({ payload }) {
  const { token } = yield select((state) => state.users.authData);
  yield call(
    axios.put,
    `/cities/${payload.values.id}`,
    {
      name: payload.values.name,
      stateId: payload.values.stateId,
      population: payload.values.population,
      imageUrl: payload.values.imageURL,
      visited: payload.values.visited ? true : false,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  payload.close();
  yield put(citiesSlice.actions.fetchCities());
}
function* updateCityStatusSaga({ payload }) {
  const { token } = yield select((state) => state.users.authData);
  yield call(
    axios.put,
    `/cities/${payload.id}`,
    {
      name: payload.name,
      stateId: payload.state.id,
      population: payload.population,
      imageUrl: payload.imageUrl,
      visited: true,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  yield put(citiesSlice.actions.fetchCities());
}

function* fetchStatesSaga() {
  const { token } = yield select((state) => state.users.authData);
  const response = yield call(axios.get, 'cities/states', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  yield put(citiesSlice.actions.setStates(response.data.states));
}

function* fetchCitiesSaga() {
  try {
    const { userId, token } = yield select((state) => state.users.authData);
    const response = yield call(axios.get, `cities/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    yield put(citiesSlice.actions.setCities(response.data.cities));
  } catch (e) {
    yield put(citiesSlice.actions.setError(e.response.data.message));
  }
}

export default function* citiesWatcher() {
  yield takeLatest(citiesSlice.actions.fetchCities, fetchCitiesSaga);
  yield takeLatest(citiesSlice.actions.updateCityStatus, updateCityStatusSaga);
  yield takeLatest(citiesSlice.actions.updateCity, updateCitySaga);
  yield takeLatest(citiesSlice.actions.fetchStates, fetchStatesSaga);
  yield takeLatest(citiesSlice.actions.createCity, createCitySaga);
  yield takeLatest(citiesSlice.actions.deleteCity, deleteCitySaga);
}
