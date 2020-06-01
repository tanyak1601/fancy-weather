import getLocation from '../src/js/getLocation';
import mockState from '../src/js/state';

jest.mock('../src/js/state', () => ({
  coordinates: {
    latitude: 55.7574,
    longitude: 37.6011,
    location: {},
  },
}));

Storage.prototype.getItem = jest.fn(() => 'en');

describe('getLocation', () => {
  it('should determine location', async () => {
    fetch.mockResponseOnce(JSON.stringify({ results: [{ components: { city: 'Moscow', country: 'Russia' } }] }));
    await getLocation();
    expect(mockState.location.city).toBeDefined();
    expect(mockState.location.city).toEqual('Moscow');
  });
});
