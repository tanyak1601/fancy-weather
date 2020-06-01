import formatCoordinates from '../src/js/formatCoordinates';
import mockState from '../src/js/state';

jest.mock('../src/js/state', () => ({
  coordinates: {
    latitude: 55.7574,
    longitude: 37.6011,
  },
}));

describe('formatCoordinates', () => {
  beforeEach(() => {
    formatCoordinates();
  });

  it('should format the coordinates', () => {
    expect(mockState.formatLatitude).toBeDefined();
    expect(mockState.formatLatitude).toMatch(/[0-9]{1,}&deg;[0-9]{1,}'/);
    expect(mockState.formatLatitude).toEqual("55&deg;45'");
  });
});
