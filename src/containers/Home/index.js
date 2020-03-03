import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { debounce } from 'debounce';
import { Typography } from 'antd';

import {
  makeSelectIsLoading,
  makeSelectAutocompleteData,
  makeSelectFiveDayForecastData,
  makeSelectGeoPositionData,
} from '../../redux/Home/selectors';
import {
  fetchAutocompleteLocations,
  fetchFiveDayForecast,
  fetchGeoPositionLocation,
} from '../../redux/Home/actions';

import LocationSearchBar from '../../components/LocationSearchBar';
import FiveDayForecast from '../../components/FiveDayForecast';

const { Title, Text } = Typography;

function Home({
  isLoading,
  autocompleteData,
  fiveDayForecastData,
  geoPositionData,
  onFetchAutocompleteLocations,
  onFetchFiveDayForecast,
  onFetchGeoPositionLocation,
}) {

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        onFetchGeoPositionLocation(coords.latitude, coords.longitude);
      });
    }
  }, [onFetchGeoPositionLocation]);

  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    if (!fiveDayForecastData || !fiveDayForecastData.DailyForecasts) {
      if (geoPositionData.Key) {
        onFetchFiveDayForecast(geoPositionData.Key);
        setSelectedLocation(geoPositionData.LocalizedName);
      }
    }
  }, [geoPositionData, fiveDayForecastData, onFetchFiveDayForecast]);

  return (
    <div>
      <div style={{textAlign: "center"}}>
        <Title>Weather App</Title>
        <Text type="secondary">Powered by AccuWeather</Text>
      </div>
      <LocationSearchBar
        autocompleteData={autocompleteData}
        onSelect={(value, opt) => {
          setSelectedLocation(opt.value)
          onFetchFiveDayForecast(opt.locationKey);
        }}
        onSearch={debounce(onFetchAutocompleteLocations, 800)}
        isLoading={isLoading}
      />
      <FiveDayForecast
        fiveDayForecastData={fiveDayForecastData}
        selectedLocation={selectedLocation}
      />
    </div>
  );
}

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  autocompleteData: PropTypes.array.isRequired,
  fiveDayForecastData: PropTypes.object.isRequired,
  geoPositionData: PropTypes.object.isRequired,
  onFetchAutocompleteLocations: PropTypes.func.isRequired,
  onFetchFiveDayForecast: PropTypes.func.isRequired,
  onFetchGeoPositionLocation: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  autocompleteData: makeSelectAutocompleteData(),
  fiveDayForecastData: makeSelectFiveDayForecastData(),
  geoPositionData: makeSelectGeoPositionData(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchAutocompleteLocations: (query) => dispatch(fetchAutocompleteLocations(query)),
    onFetchFiveDayForecast: (locationKey) => dispatch(fetchFiveDayForecast(locationKey)),
    onFetchGeoPositionLocation: (lat, lon) => dispatch(fetchGeoPositionLocation(lat, lon)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(Home);
