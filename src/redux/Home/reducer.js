import produce from 'immer';

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

export const initState = {
  autocompleteData: [],
  fiveDayForecastData: {},
  geoPositionData: {},
  isLoading: false
};

const HomeReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case AUTOCOMPLETE_LOCATION:
        draft.isLoading = true;
        break;

      case AUTOCOMPLETE_LOCATION_SUCCESS:
        draft.isLoading = false;
        draft.autocompleteData = action.data;
        break;

      case AUTOCOMPLETE_LOCATION_ERROR:
        draft.isLoading = false;
        draft.autocompleteData = [];
        break;

      case FIVE_DAY_FORECAST:
        draft.isLoading = true;
        break;

      case FIVE_DAY_FORECAST_SUCCESS:
        draft.isLoading = false;
        draft.fiveDayForecastData = action.data;
        break;

      case FIVE_DAY_FORECAST_ERROR:
        draft.isLoading = false;
        draft.fiveDayForecastData = {};
        break;

      case GEOPOSITION_LOCATION:
        draft.isLoading = true;
        break;

      case GEOPOSITION_LOCATION_SUCCESS:
        draft.isLoading = false;
        draft.geoPositionData = action.data;
        break;

      case GEOPOSITION_LOCATION_ERROR:
        draft.isLoading = false;
        draft.geoPositionData = {};
        break;

      default:
        break;
    }
  });

export default HomeReducer;
