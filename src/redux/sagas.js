import { all } from 'redux-saga/effects';
import homeSagas from './Home/saga';

export default function* rootSaga() {
  yield all([
    homeSagas(),
  ]);
}
