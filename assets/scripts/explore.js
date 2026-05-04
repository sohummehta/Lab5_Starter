// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const smilyImage = document.querySelector('#explore img');
  const text = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const selectedVoice = document.getElementById('voice-select');

  function populateVoiceList() {
    const voices = window.speechSynthesis.getVoices();
    selectedVoice.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      selectedVoice.appendChild(option);
    });
  }

  populateVoiceList();
  window.speechSynthesis.addEventListener('voiceschanged', populateVoiceList);

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(text.value);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[selectedVoice.value];

    utterance.addEventListener('start', () => {
      smilyImage.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      smilyImage.src = 'assets/images/smiling.png';
    });

    window.speechSynthesis.speak(utterance);
  });

}