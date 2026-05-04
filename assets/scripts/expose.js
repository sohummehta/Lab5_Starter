// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectedHorn = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playSoundButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  const selectedHornImage = document.querySelector('#expose img');
  const volumeImage = document.querySelector('#volume-controls img');
  
  selectedHorn.addEventListener('change', () => {
    const horn = selectedHorn.value;
    selectedHornImage.src = `assets/images/${horn}.svg`;
    selectedHornImage.alt = horn;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    audio.volume = volume / 100;
    let level = 0;
    if (volume === 0) {
      level = 0;
    } else if (volume < 33) {
      level = 1;
    } else if (volume < 67) {
      level = 2;
    } else {
      level = 3;
    }
    volumeImage.src = `assets/icons/volume-level-${level}.svg`;
    volumeImage.alt = `Volume level ${level}`;
  });

  playSoundButton.addEventListener('click', () => {
    if (selectedHorn.value === 'select') return;
    audio.currentTime = 0;
    audio.play();
    if (selectedHorn.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}