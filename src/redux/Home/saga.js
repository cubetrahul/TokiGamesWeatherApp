import { all, call, takeEvery, put, fork } from 'redux-saga/effects';
import API from '../../utils/API';
import {
  AUTOCOMPLETE_LOCATION,
  FIVE_DAY_FORECAST,
  GEOPOSITION_LOCATION,
} from './constants';
import {
  fetchAutocompleteLocationsSuccess,
  fetchAutocompleteLocationsError,
  fetchFiveDayForecastSuccess,
  fetchFiveDayForecastError,
  fetchGeoPositionLocationSuccess,
  fetchGeoPositionLocationError,
} from './actions';

export function* fetchAutocompleteLocationsRequest() {
  yield takeEvery(AUTOCOMPLETE_LOCATION, function* (action) {
    const { query } = action;
    try {
      if (query.length > 3) {
        const response = yield call(API.accuWeather.autoComplete, query);
  
        if (response) {
          yield put(fetchAutocompleteLocationsSuccess(response));
        } else {
          yield put(fetchAutocompleteLocationsError(new Error("An error has occurred")));
        }
      } else {
        yield put(fetchAutocompleteLocationsError(new Error("Min 4 characters required")));
      }
    } catch (err) {
      yield put(fetchAutocompleteLocationsError(err));
    }
  });
}

export function* fetchFiveDayForecastRequest() {
  yield takeEvery(FIVE_DAY_FORECAST, function* (action) {
    const { locationKey } = action;
    try {
      const response = yield call(API.accuWeather.fiveDayForecase, locationKey);

      if (response) {
        yield put(fetchFiveDayForecastSuccess(response));
      } else {
        yield put(fetchFiveDayForecastError(new Error("An error has occurred")));
      }
    } catch (err) {
      yield put(fetchFiveDayForecastError(err));
    }
  });
}

export function* fetchGeoPositionLocationRequest() {
  yield takeEvery(GEOPOSITION_LOCATION, function* (action) {
    const { lat, lon } = action;
    try {
      const response = yield call(API.accuWeather.geoPosition, lat, lon);

      if (response) {
        yield put(fetchGeoPositionLocationSuccess(response));
      } else {
        yield put(fetchGeoPositionLocationError(new Error("An error has occurred")));
      }
    } catch (err) {
      yield put(fetchGeoPositionLocationError(err));
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(fetchAutocompleteLocationsRequest),
    fork(fetchFiveDayForecastRequest),
    fork(fetchGeoPositionLocationRequest),
  ]);
}
