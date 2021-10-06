import { takeLatest, call, put } from '@redux-saga/core/effects';
import usersSlice from './usersSlice';
import axios from '../../../API/index';

function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, 'users');
    yield put(usersSlice.actions.setUsers(response.data.users));
  } catch (e) {
    yield put(usersSlice.actions.setError(e.response.data.message));
  }
}

function* loginSaga({ payload }) {
  try {
    const response = yield call(axios.post, 'users/login', payload);
    yield put(usersSlice.actions.setToken(response.data));
  } catch (e) {
    yield put(usersSlice.actions.setError(e.response.data.message));
  }
}
function* signUpSaga({ payload }) {
  delete payload.confirmPassword;

  try {
    const response = yield call(axios.post, 'users/signup', payload);

    yield put(usersSlice.actions.setToken(response.data));
  } catch (e) {
    yield put(usersSlice.actions.setError(e.response.data.message, e.response));
  }
}

export default function* usersWatcher() {
  yield takeLatest(usersSlice.actions.fetchUsers, fetchUsersSaga);
  yield takeLatest(usersSlice.actions.logIn, loginSaga);
  yield takeLatest(usersSlice.actions.signUp, signUpSaga);
}
