import state from './state';

function updateTime() {
  if (state.interval) clearInterval(state.interval);

  let { hour } = state.timeData;
  let { minute } = state.timeData;
  let { second } = state.timeData;

  const time = document.getElementById('time');

  function clock() {
    if (second < 59) {
      second = (+second + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
    } else {
      second = (0).toLocaleString('en-US', { minimumIntegerDigits: 2 });

      if (minute < 59) {
        minute = (+minute + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
      } else {
        minute = (0).toLocaleString('en-US', { minimumIntegerDigits: 2 });

        if (hour < 23) {
          hour = (+hour + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
        } else {
          hour = (0).toLocaleString('en-US', { minimumIntegerDigits: 2 });
        }
      }
    }

    time.innerHTML = `${hour}:${minute}`;
  }

  state.interval = setInterval(clock, 1000);
}

export default updateTime;
