const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const loadBtn = document.getElementById('loadBtn');
const songLink = document.getElementById('songLink');
const songTitle = document.getElementById('songTitle');
const downloadBtn = document.getElementById('download');
const fileInput = document.getElementById('fileInput');

// Load from direct link
loadBtn.addEventListener('click', () => {
  const url = songLink.value.trim();

  if (!url.endsWith('.mp3')) {
    alert('Please paste a direct .mp3 file link!');
    return;
  }

  // Prevent reloading if same song
  if (audio.src !== url) {
    audio.src = url;
    songTitle.textContent = url.split('/').pop();
    downloadBtn.href = url;
    downloadBtn.download = songTitle.textContent;
    audio.load();
    audio.play();
  }
});

// Load from local file
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    audio.src = fileURL;
    songTitle.textContent = file.name;
    downloadBtn.href = fileURL;
    downloadBtn.download = file.name;
    audio.load();
    audio.play();
  }
});

// Play / Pause controls
playBtn.addEventListener('click', () => audio.play());
pauseBtn.addEventListener('click', () => audio.pause());

// Ensure smooth playback
audio.addEventListener('ended', () => {
  songTitle.textContent = "Playback finished 🎵";
});

