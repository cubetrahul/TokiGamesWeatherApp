import request from './request';

const accuWeatherApiKey = 'loKnNlyBNpGOyA1QDACpjzshfHAkxYxw';
const accuWeatherBaseUrl = 'http://dataservice.accuweather.com';

const API = {
  accuWeather: {
    autoComplete: (query) => {
      const requestURL = `${accuWeatherBaseUrl}/locations/v1/cities/autocomplete?apikey=${accuWeatherApiKey}&q=${query}`;
      return request(requestURL);
    },
    fiveDayForecase: (locationKey) => {
      const requestURL = `${accuWeatherBaseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${accuWeatherApiKey}`;
      return request(requestURL);
    },
    geoPosition: (lat, lon) => {
      const requestURL = `${accuWeatherBaseUrl}/locations/v1/cities/geoposition/search?apikey=${accuWeatherApiKey}&q=${lat},${lon}`
      return request(requestURL);
    }
  },
};

export default API;