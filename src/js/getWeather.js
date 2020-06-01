import state from './state';

async function getWeather() {
  const { latitude } = state.coordinates;
  const { longitude } = state.coordinates;
  const language = localStorage.getItem('language');

  const url = `https://api.darksky.net/forecast/0045c11247533a57a9c2b21090a2efa4/${latitude},${longitude}?exclude=[minutely, hourly, alerts, flags]&lang=${language}&units=si`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const response = await fetch(proxyUrl + url);
  const data = await response.json();

  state.weatherData = {};
  state.weatherData.timezone = data.timezone;
  state.weatherData.temperature = Math.round(data.currently.temperature);
  state.weatherData.icon = data.currently.icon;
  state.weatherData.summary = data.currently.summary;
  state.weatherData.feelsLike = Math.round(data.currently.apparentTemperature);
  state.weatherData.windSpeed = Math.round(data.currently.windSpeed);
  state.weatherData.humidity = Math.round(data.currently.humidity * 100);

  state.weatherData.forecast1 = {};
  state.weatherData.forecast1.temperature = Math.round((data.daily.data[1].temperatureHigh
    + data.daily.data[1].temperatureLow) / 2);
  state.weatherData.forecast1.icon = data.daily.data[1].icon;

  state.weatherData.forecast2 = {};
  state.weatherData.forecast2.temperature = Math.round((data.daily.data[2].temperatureHigh
    + data.daily.data[2].temperatureLow) / 2);
  state.weatherData.forecast2.icon = data.daily.data[2].icon;

  state.weatherData.forecast3 = {};
  state.weatherData.forecast3.temperature = Math.round((data.daily.data[3].temperatureHigh
    + data.daily.data[3].temperatureLow) / 2);
  state.weatherData.forecast3.icon = data.daily.data[3].icon;
}

export default getWeather;
