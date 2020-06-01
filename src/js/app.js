import getPosition from './getPosition';
import formatCoordinates from './formatCoordinates';
import getLocation from './getLocation';
import getWeather from './getWeather';
import getTimeData from './getTimeData';
import getImageTags from './getImageTags';
import getBackgroundImage from './getBackgroundImage';
import createHtml from './createHtml';
import insertData from './insertData';
import getMap from './getMap';
import addListeners from './addListeners';
import getVoiceSearch from './getVoiceSearch';
import getErrorMessage from './getErrorMessage';

const appWeather = {

  async init() {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }

    if (!localStorage.getItem('unit')) {
      localStorage.setItem('unit', 'Celsius');
    }

    try {
      await getPosition();
      formatCoordinates();
      await getLocation();
      await getWeather();
      getTimeData();
      getImageTags();
      getBackgroundImage();
      createHtml();
      insertData();
      getMap();
      addListeners();
      getVoiceSearch();
    } catch (err) {
      getErrorMessage(err.message);
    }
  },

};

window.addEventListener('DOMContentLoaded', () => {
  appWeather.init();
});
