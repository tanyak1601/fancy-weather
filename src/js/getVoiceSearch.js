import getErrorMessage from './getErrorMessage';

function getVoiceSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchMicrophone = document.getElementById('searchMicrophone');
  const searchButton = document.getElementById('searchButton');
  let placeholder;

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (window.SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.onstart = function onstart() {
      searchMicrophone.classList.add('search__microphone_animate');
    };

    recognition.onspeechend = function onspeechend() {
      searchMicrophone.classList.remove('search__microphone_animate');
    };

    recognition.onresult = function onresult(e) {
      const speechOutput = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      searchInput.value = speechOutput;
    };

    recognition.onerror = function onerror(e) {
      if (e.error === 'no-speech') {
        searchMicrophone.classList.remove('search__microphone_animate');
      } else {
        getErrorMessage(e.error);
      }

      searchInput.placeholder = placeholder;
    };

    recognition.onend = function onend() {
      if (searchInput.value) {
        const event = new Event('click', { bubbles: true });
        const targetElement = searchButton;
        targetElement.dispatchEvent(event);
      } else {
        searchInput.placeholder = placeholder;
      }
    };

    searchMicrophone.addEventListener('click', () => {
      searchInput.value = '';
      placeholder = searchInput.placeholder;
      searchInput.placeholder = 'Listening...';
      searchInput.focus();
      recognition.start();
    });
  } else {
    searchMicrophone.className = 'search__microphone_none';
  }
}

export default getVoiceSearch;
