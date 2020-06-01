import getBackgroundImage from './getBackgroundImage';
import switchDegreeUnit from './switchDegreeUnit';
import search from './search';
import changeLanguage from './changeLanguage';

function addListeners() {
  const refreshImageBtn = document.getElementById('controlsRefresh');
  const fahrenheitBtn = document.getElementById('Fahrenheit');
  const celsiusBtn = document.getElementById('Celsius');
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const controlLanguage = document.getElementById('controlLanguage');

  refreshImageBtn.addEventListener('click', getBackgroundImage);

  fahrenheitBtn.addEventListener('change', switchDegreeUnit);
  celsiusBtn.addEventListener('change', switchDegreeUnit);

  searchButton.addEventListener('click', search);
  document.addEventListener('keydown', (e) => {
    if (searchInput === document.activeElement && e.code === 'Enter') {
      searchButton.click();
    }
  });

  controlLanguage.addEventListener('change', changeLanguage);
}

export default addListeners;
