function getErrorMessage(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  const errorP = document.createElement('p');
  errorP.className = 'error__message';
  const errorButton = document.createElement('button');
  errorButton.className = 'error__button';
  errorP.innerHTML = `Error: ${message}`;
  errorButton.innerHTML = '&#10007';

  const fragment = new DocumentFragment();
  fragment.append(errorP);
  fragment.append(errorButton);
  errorDiv.append(fragment);

  document.body.append(errorDiv);

  errorButton.addEventListener('click', () => {
    errorDiv.remove();
  });
}

export default getErrorMessage;
