import Element from './classElement';
import elementsArray from './elementsArray';

function createHtml() {
  const wrapper = new Element(...elementsArray[0]).create();
  const header = new Element(...elementsArray[1]).create();
  const controls = new Element(...elementsArray[2]).create();
  const controlsRefresh = new Element(...elementsArray[3]).create();
  const controlsRefreshInner = new Element(...elementsArray[4]).create();
  const controlLanguage = new Element(...elementsArray[5]).create();
  const optionEN = new Element(...elementsArray[6]).create();
  const optionRU = new Element(...elementsArray[7]).create();
  const optionBE = new Element(...elementsArray[8]).create();
  const Celsius = new Element(...elementsArray[9]).create();
  const CelsiusLabel = new Element(...elementsArray[10]).create();
  const Fahrenheit = new Element(...elementsArray[11]).create();
  const FahrenheitLabel = new Element(...elementsArray[12]).create();
  const search = new Element(...elementsArray[13]).create();
  const searchInput = new Element(...elementsArray[14]).create();
  const searchMicrophone = new Element(...elementsArray[15]).create();
  const searchButton = new Element(...elementsArray[16]).create();
  const main = new Element(...elementsArray[17]).create();
  const weatherInfo = new Element(...elementsArray[18]).create();
  const weatherToday = new Element(...elementsArray[19]).create();
  const location = new Element(...elementsArray[20]).create();
  const date = new Element(...elementsArray[21]).create();
  const time = new Element(...elementsArray[22]).create();
  const weatherTodayWeather = new Element(...elementsArray[23]).create();
  const weatherTodayDegree = new Element(...elementsArray[24]).create();
  const weatherTodayInfo = new Element(...elementsArray[25]).create();
  const weatherFuture = new Element(...elementsArray[26]).create();
  const weatherFutureItem1 = new Element(...elementsArray[27]).create();
  const weatherFuture1Day = new Element(...elementsArray[28]).create();
  const weatherFuture1Temperature = new Element(...elementsArray[29]).create();
  const weatherFutureItem2 = new Element(...elementsArray[30]).create();
  const weatherFuture2Day = new Element(...elementsArray[31]).create();
  const weatherFuture2Temperature = new Element(...elementsArray[32]).create();
  const weatherFutureItem3 = new Element(...elementsArray[33]).create();
  const weatherFuture3Day = new Element(...elementsArray[34]).create();
  const weatherFuture3Temperature = new Element(...elementsArray[35]).create();
  const geoInfo = new Element(...elementsArray[36]).create();
  const map = new Element(...elementsArray[37]).create();
  const zip = new Element(...elementsArray[38]).create();

  if (localStorage.getItem('unit') === 'Celsius') {
    Celsius.checked = true;
  } else {
    Fahrenheit.checked = true;
  }

  wrapper.insertAdjacentElement('afterbegin', header);
  header.insertAdjacentElement('afterbegin', controls);
  controls.insertAdjacentElement('afterbegin', controlsRefresh);
  controlsRefresh.insertAdjacentElement('afterbegin', controlsRefreshInner);
  controlsRefresh.insertAdjacentElement('afterend', controlLanguage);
  controlLanguage.insertAdjacentElement('afterbegin', optionEN);
  optionEN.insertAdjacentElement('afterend', optionRU);
  optionRU.insertAdjacentElement('afterend', optionBE);
  controlLanguage.insertAdjacentElement('afterend', Celsius);
  Celsius.insertAdjacentElement('afterend', CelsiusLabel);
  CelsiusLabel.insertAdjacentElement('afterend', Fahrenheit);
  Fahrenheit.insertAdjacentElement('afterend', FahrenheitLabel);
  controls.insertAdjacentElement('afterend', search);
  search.insertAdjacentElement('afterbegin', searchInput);
  searchInput.insertAdjacentElement('afterend', searchMicrophone);
  searchMicrophone.insertAdjacentElement('afterend', searchButton);
  header.insertAdjacentElement('afterend', main);
  main.insertAdjacentElement('afterbegin', weatherInfo);
  weatherInfo.insertAdjacentElement('afterbegin', weatherToday);
  weatherToday.insertAdjacentElement('afterbegin', location);
  location.insertAdjacentElement('afterend', date);
  date.insertAdjacentElement('afterend', time);
  time.insertAdjacentElement('afterend', weatherTodayWeather);
  weatherTodayWeather.insertAdjacentElement('afterbegin', weatherTodayDegree);
  weatherTodayDegree.insertAdjacentElement('afterend', weatherTodayInfo);
  weatherToday.insertAdjacentElement('afterend', weatherFuture);
  weatherFuture.insertAdjacentElement('afterbegin', weatherFutureItem1);
  weatherFutureItem1.insertAdjacentElement('afterbegin', weatherFuture1Day);
  weatherFuture1Day.insertAdjacentElement('afterend', weatherFuture1Temperature);
  weatherFutureItem1.insertAdjacentElement('afterend', weatherFutureItem2);
  weatherFutureItem2.insertAdjacentElement('afterbegin', weatherFuture2Day);
  weatherFuture2Day.insertAdjacentElement('afterend', weatherFuture2Temperature);
  weatherFutureItem2.insertAdjacentElement('afterend', weatherFutureItem3);
  weatherFutureItem3.insertAdjacentElement('afterbegin', weatherFuture3Day);
  weatherFuture3Day.insertAdjacentElement('afterend', weatherFuture3Temperature);
  weatherInfo.insertAdjacentElement('afterend', geoInfo);
  geoInfo.insertAdjacentElement('afterbegin', map);
  map.insertAdjacentElement('afterend', zip);

  document.body.insertAdjacentElement('afterbegin', wrapper);

  controlLanguage.value = localStorage.getItem('language');
}


export default createHtml;
