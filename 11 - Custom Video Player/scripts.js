// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
// write out functions
const togglePlay = () => video[video.paused ? 'play' : 'pause']();

const updateButton = () => toggle.textContent = video.paused ? '►' : '❚ ❚';

const skip = function () {
  video.currentTime = parseFloat(this.dataset.skip);
};

const handleRangeUpdate = function (params) {
  video[this.name] = this.value;
};

const handleProgress = function (params) {
  
};

// hook up eventlisteners between functions and elements
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
[...skipButtons].map(btn => btn.addEventListener('click', skip));

[...ranges].map(range => range.addEventListener('click', handleRangeUpdate));
[...ranges].map(range => range.addEventListener('mousemove', handleRangeUpdate));
