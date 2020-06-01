import state from './state';

function switchDegreeUnit(e) {
  const weatherTodayDegree = document.getElementById('weatherTodayDegree');
  const weatherTodayInfo = document.getElementById('weatherTodayInfo');
  const weatherFuture1Temperature = document.getElementById('weatherFuture1Temperature');
  const weatherFuture2Temperature = document.getElementById('weatherFuture2Temperature');
  const weatherFuture3Temperature = document.getElementById('weatherFuture3Temperature');
  const language = localStorage.getItem('language');

  let { temperature } = state.weatherData;
  let { feelsLike } = state.weatherData;
  let forecast1Temperature = state.weatherData.forecast1.temperature;
  let forecast2Temperature = state.weatherData.forecast2.temperature;
  let forecast3Temperature = state.weatherData.forecast3.temperature;

  if (e && e.target.id === 'Celsius') localStorage.setItem('unit', 'Celsius');

  if ((e && e.target.id === 'Fahrenheit') || localStorage.getItem('unit') === 'Fahrenheit') {
    temperature = Math.round((temperature * (9 / 5)) + 32);
    feelsLike = Math.round((feelsLike * (9 / 5)) + 32);
    forecast1Temperature = Math.round((forecast1Temperature * (9 / 5)) + 32);
    forecast2Temperature = Math.round((forecast2Temperature * (9 / 5)) + 32);
    forecast3Temperature = Math.round((forecast3Temperature * (9 / 5)) + 32);

    localStorage.setItem('unit', 'Fahrenheit');
  }

  weatherTodayDegree.innerHTML = `${temperature}<span>&deg;</span>`;

  switch (language) {
    case 'be':
      weatherTodayInfo.innerHTML = `${state.weatherData.summary}<br>
                                    Адчуваецца як:  ${feelsLike}&deg;<br>
                                    Вецер:  ${state.weatherData.windSpeed} m/s<br>
                                    Вільготнасць:  ${state.weatherData.humidity}%`;
      break;

    case 'ru':
      weatherTodayInfo.innerHTML = `${state.weatherData.summary}<br>
                                    Ощущается как:  ${feelsLike}&deg;<br>
                                    Ветер:  ${state.weatherData.windSpeed} m/s<br>
                                    Влажность:  ${state.weatherData.humidity}%`;
      break;

    default:
      weatherTodayInfo.innerHTML = `${state.weatherData.summary}<br>
                                    Feels like:  ${feelsLike}&deg;<br>
                                    Wind:  ${state.weatherData.windSpeed} m/s<br>
                                    Humidity:  ${state.weatherData.humidity}%`;
  }

  weatherFuture1Temperature.innerHTML = `${forecast1Temperature}&deg;`;
  weatherFuture2Temperature.innerHTML = `${forecast2Temperature}&deg;`;
  weatherFuture3Temperature.innerHTML = `${forecast3Temperature}&deg;`;
}

export default switchDegreeUnit;
