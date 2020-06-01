import state from './state';

function getMap() {
  const { latitude } = state.coordinates;
  const { longitude } = state.coordinates;

  mapboxgl.accessToken = 'pk.eyJ1IjoidGFueWFrMTYwMSIsImEiOiJjazNocXd4eGowMGd2M2dsaGQ5MGtuOXJiIn0.1IZwbj-vwFcJtjv73u6WNA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
    center: [longitude, latitude],
    zoom: 11,
  });
}

export default getMap;
