import {
  AUTOCOMPLETE_LOCATION,
  AUTOCOMPLETE_LOCATION_SUCCESS,
  AUTOCOMPLETE_LOCATION_ERROR,
  FIVE_DAY_FORECAST,
  FIVE_DAY_FORECAST_SUCCESS,
  FIVE_DAY_FORECAST_ERROR,
  GEOPOSITION_LOCATION,
  GEOPOSITION_LOCATION_SUCCESS,
  GEOPOSITION_LOCATION_ERROR,
} from './constants';

export function fetchAutocompleteLocations(query) {
  return {
    type: AUTOCOMPLETE_LOCATION,
    query,
  };
}

export function fetchAutocompleteLocationsSuccess(data) {
  return {
    type: AUTOCOMPLETE_LOCATION_SUCCESS,
    data,
  };
}

export function fetchAutocompleteLocationsError(error) {
  return {
    type: AUTOCOMPLETE_LOCATION_ERROR,
    error,
  };
}

export function fetchFiveDayForecast(locationKey) {
  return {
    type: FIVE_DAY_FORECAST,
    locationKey,
  };
}

export function fetchFiveDayForecastSuccess(data) {
  return {
    type: FIVE_DAY_FORECAST_SUCCESS,
    data,
  };
}

export function fetchFiveDayForecastError(error) {
  return {
    type: FIVE_DAY_FORECAST_ERROR,
    error,
  };
}

export function fetchGeoPositionLocation(lat, lon) {
  return {
    type: GEOPOSITION_LOCATION,
    lat,
    lon,
  };
}

export function fetchGeoPositionLocationSuccess(data) {
  return {
    type: GEOPOSITION_LOCATION_SUCCESS,
    data,
  };
}

export function fetchGeoPositionLocationError(error) {
  return {
    type: GEOPOSITION_LOCATION_ERROR,
    error,
  };
}
