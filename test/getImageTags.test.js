import getImageTags from '../src/js/getImageTags';
import mockState from '../src/js/state';

jest.mock('../src/js/state', () => ({
  weatherData: { icon: 'clear' },
  timeData: {
    month: 'February',
    hour: '10',
  },
}));

describe('getImageTags', () => {
  it('should create image tags', () => {
    getImageTags();
    expect(mockState.tags).toBeDefined();
    expect(mockState.tags).toEqual('clear,winter,morning');
  });

  it('should create image tags', () => {
    mockState.weatherData.icon = 'cloudy';
    mockState.timeData.month = 'апрель';
    mockState.timeData.hour = '01';
    getImageTags();
    expect(mockState.tags).toBeDefined();
    expect(mockState.tags).toEqual('cloudy,spring,night');
  });
});
