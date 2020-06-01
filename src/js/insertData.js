import state from './state';
import { days, month } from './glossary';
import updateTime from './updateTime';
import switchDegreeUnit from './switchDegreeUnit';

function insertData() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const location = document.getElementById('location');
  const date = document.getElementById('date');
  const time = document.getElementById('time');
  const weatherToday = document.getElementById('weatherToday');
  const weatherFuture1Day = document.getElementById('weatherFuture1Day');
  const weatherFuture2Day = document.getElementById('weatherFuture2Day');
  const weatherFuture3Day = document.getElementById('weatherFuture3Day');
  const zip = document.getElementById('zip');
  const weatherFutureItem1 = document.getElementById('weatherFutureItem1');
  const weatherFutureItem2 = document.getElementById('weatherFutureItem2');
  const weatherFutureItem3 = document.getElementById('weatherFutureItem3');


  if (localStorage.getItem('language') === 'ru') {
    searchInput.placeholder = 'Город, Cтрана';
    searchButton.innerHTML = 'Поиск';
    date.innerHTML = `${state.timeData.weekday} ${state.timeData.day} ${state.timeData.month}`;
    weatherFuture1Day.innerHTML = state.timeData.tomorrow;
    weatherFuture2Day.innerHTML = state.timeData.afterTomorrow;
    weatherFuture3Day.innerHTML = state.timeData.afterAfterTomorrow;
    zip.innerHTML = `Широта: ${state.formatLatitude}<br>Долгота: ${state.formatLongitude}`;
  } else if (localStorage.getItem('language') === 'be') {
    searchInput.placeholder = 'Горад, Краіна';
    searchButton.innerHTML = 'Пошук';
    date.innerHTML = `${days[state.timeData.weekday]} ${state.timeData.day} ${month[state.timeData.month]}`;
    weatherFuture1Day.innerHTML = days[state.timeData.tomorrow];
    weatherFuture2Day.innerHTML = days[state.timeData.afterTomorrow];
    weatherFuture3Day.innerHTML = days[state.timeData.afterAfterTomorrow];
    zip.innerHTML = `Шырата: ${state.formatLatitude}<br>Даўгата: ${state.formatLongitude}`;
  } else {
    searchInput.placeholder = 'City, Country';
    searchButton.innerHTML = 'Search';
    date.innerHTML = `${state.timeData.weekday} ${state.timeData.day} ${state.timeData.month}`;
    weatherFuture1Day.innerHTML = state.timeData.tomorrow;
    weatherFuture2Day.innerHTML = state.timeData.afterTomorrow;
    weatherFuture3Day.innerHTML = state.timeData.afterAfterTomorrow;
    zip.innerHTML = `Latitude: ${state.formatLatitude}<br>Longitude: ${state.formatLongitude}`;
  }

  location.innerHTML = `${state.location.city}, ${state.location.country}`;
  time.innerHTML = `${state.timeData.hour}:${state.timeData.minute}`;
  weatherToday.style.backgroundImage = `url('./src/assets/images/weather-icon/${state.weatherData.icon}.png')`;
  weatherFutureItem1.style.backgroundImage = `url('./src/assets/images/weather-icon/${state.weatherData.forecast1.icon}.png')`;
  weatherFutureItem2.style.backgroundImage = `url('./src/assets/images/weather-icon/${state.weatherData.forecast1.icon}.png')`;
  weatherFutureItem3.style.backgroundImage = `url('./src/assets/images/weather-icon/${state.weatherData.forecast1.icon}.png')`;

  updateTime();
  switchDegreeUnit();
}

export default insertData;
