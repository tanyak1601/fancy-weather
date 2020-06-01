import state from './state';

function getTimeData() {
  const local = localStorage.getItem('language');
  const { timezone } = state.weatherData;

  state.timeData = {};

  const date = new Date();

  state.date = date;
  state.timeData.weekday = date.toLocaleString(local, { weekday: 'short', timeZone: timezone });
  state.timeData.day = date.toLocaleString(local, { day: 'numeric', timeZone: timezone });
  state.timeData.month = date.toLocaleString(local, { month: 'long', timeZone: timezone });

  const time = date.toLocaleString(local, {
    hour12: false,
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timezone,
  }).split(':');

  [state.timeData.hour, state.timeData.minute, state.timeData.second] = time;
  date.setDate(date.getDate() + 1);
  state.timeData.tomorrow = date.toLocaleString(local, { weekday: 'long' });
  date.setDate(date.getDate() + 1);
  state.timeData.afterTomorrow = date.toLocaleString(local, { weekday: 'long' });
  date.setDate(date.getDate() + 1);
  state.timeData.afterAfterTomorrow = date.toLocaleString(local, { weekday: 'long' });
}

export default getTimeData;
