import state from './state';
import getErrorMessage from './getErrorMessage';

async function getBackgroundImage() {
  const spinner = document.getElementById('controlsRefreshInner');

  if (spinner) {
    spinner.classList.add('rotate');
    setTimeout(() => {
      spinner.classList.remove('rotate');
    }, 2000);
  }

  const { tags } = state;

  try {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${tags}&client_id=1d6a28e91c2384025e9e08bb1959d51992d044ec37f28e56898152595c13e941`;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(proxyUrl + url);
    const data = await response.json();
    const imageUrl = data.urls.regular;

    document.body.style.backgroundImage = `url('${imageUrl}')`;
  } catch (err) {
    getErrorMessage('background-image request error');
  }
}

export default getBackgroundImage;
