import state from './state';

async function getLocation() {
  const { latitude } = state.coordinates;
  const { longitude } = state.coordinates;
  const language = localStorage.getItem('language');

  state.location = {};

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=d8fe243f3ef6405a8e05c0c398f11296&language=${language}`;
  const response = await fetch(url);

  const data = await response.json();

  state.location.country = data.results[0].components.country;
  state.location.city = data.results[0].components.city;
}

export default getLocation;
