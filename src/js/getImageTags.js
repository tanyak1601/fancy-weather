import state from './state';

function getImageTags() {
  const { timeData } = state;
  const weather = state.weatherData.icon;

  state.tags = `${weather},`;

  switch (timeData.month) {
    case 'December':
    case 'January':
    case 'February':
    case 'декабрь':
    case 'январь':
    case 'февраль':
      state.tags += 'winter,';
      break;
    case 'March':
    case 'April':
    case 'May':
    case 'март':
    case 'апрель':
    case 'май':
      state.tags += 'spring,';
      break;
    case 'June':
    case 'July':
    case 'August':
    case 'июнь':
    case 'июль':
    case 'август':
      state.tags += 'summer,';
      break;
    default:
      state.tags += 'autumn,';
  }

  switch (timeData.hour) {
    case '00':
    case '01':
    case '02':
    case '03':
    case '04':
      state.tags += 'night';
      break;
    case '05':
    case '06':
    case '07':
    case '08':
    case '09':
    case '10':
    case '11':
      state.tags += 'morning';
      break;
    case '12':
    case '13':
    case '14':
    case '15':
    case '16':
      state.tags += 'day';
      break;
    default:
      state.tags += 'even';
  }
}

export default getImageTags;
