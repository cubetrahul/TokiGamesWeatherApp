import { createSelector } from 'reselect';
import { initState } from './reducer';

const home = state => state.home || initState;

const makeSelectIsLoading = () =>
  createSelector(
    home,
    homeState => homeState.isLoading,
  );

const makeSelectAutocompleteData = () =>
  createSelector(
    home,
    homeState => homeState.autocompleteData,
  );

const makeSelectFiveDayForecastData = () =>
  createSelector(
    home,
    homeState => homeState.fiveDayForecastData,
  );

const makeSelectGeoPositionData = () =>
  createSelector(
    home,
    homeState => homeState.geoPositionData,
  );

export {
  makeSelectIsLoading,
  makeSelectAutocompleteData,
  makeSelectFiveDayForecastData,
  makeSelectGeoPositionData,
};
