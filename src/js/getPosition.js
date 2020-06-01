import state from './state';

async function getPosition() {
  const url = 'https://ipinfo.io/json?token=578ba642845d9c';
  const response = await fetch(url);
  const data = await response.json();
  const loc = data.loc.split(',');

  state.coordinates = {};

  state.coordinates.latitude = +loc[0];
  state.coordinates.longitude = +loc[1];
}

export default getPosition;
