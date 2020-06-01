import state from './state';
import formatCoordinates from './formatCoordinates';
import getWeather from './getWeather';
import getTimeData from './getTimeData';
import getImageTags from './getImageTags';
import getBackgroundImage from './getBackgroundImage';
import insertData from './insertData';
import getMap from './getMap';
import getErrorMessage from './getErrorMessage';

async function search() {
  const searchInput = document.getElementById('searchInput');
  const language = localStorage.getItem('language');
  const city = searchInput.value;

  if (!city) return;

  try {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=d8fe243f3ef6405a8e05c0c398f11296&language=${language}&limit=1`;
    const response = await fetch(url);
    const data = await response.json();

    state.coordinates.latitude = data.results[0].geometry.lat;
    state.coordinates.longitude = data.results[0].geometry.lng;
    state.location.country = data.results[0].components.country;

    if (data.results[0].components.city) {
      state.location.city = data.results[0].components.city;
    } else if (data.results[0].components.county) {
      state.location.city = data.results[0].components.county;
    } else {
      state.location.city = data.results[0].components.state;
    }

    formatCoordinates();
    await getWeather();
    getTimeData();
    getImageTags();
    getBackgroundImage();
    insertData();
    getMap();
  } catch (err) {
    if (err.message === "Cannot read property 'geometry' of undefined") {
      err.message = 'incorrect city or country';
    }
    getErrorMessage(err.message);
  }

  searchInput.value = '';
  searchInput.blur();
}

export default search;
