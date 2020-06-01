import getLocation from './getLocation';
import getWeather from './getWeather';
import getTimeData from './getTimeData';
import insertData from './insertData';
import getErrorMessage from './getErrorMessage';

async function changeLanguage(e) {
  localStorage.setItem('language', e.target.value);

  try {
    await getLocation();
    await getWeather();
    getTimeData();
    insertData();
  } catch (err) {
    getErrorMessage(err.message);
  }
}

export default changeLanguage;
