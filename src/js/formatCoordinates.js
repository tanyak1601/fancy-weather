import state from './state';

function formatCoordinates() {
  const latitude = state.coordinates.latitude.toString();
  const longitude = state.coordinates.longitude.toString();

  const latitudeDeg = latitude.split('.')[0];
  const longitudeDeg = longitude.split('.')[0];

  state.formatLatitude = `${latitudeDeg}&deg;${Math.round(Math.abs(latitude - latitudeDeg) * 60)}'`;
  state.formatLongitude = `${longitudeDeg}&deg;${Math.round(Math.abs(longitude - longitudeDeg) * 60)}'`;
}

export default formatCoordinates;
