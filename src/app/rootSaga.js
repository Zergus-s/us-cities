import { all } from 'redux-saga/effects';
import citiesWatcher from '../features/cities/redux/citiesSagas';
import usersWatcher from '../features/users-list/redux/usersSagas';

export default function* rootSaga() {
  yield all([usersWatcher(), citiesWatcher()]);
}
