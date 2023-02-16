import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const CURRENT_TIME = 'videoplayer-current-time';

putCurrentTime();

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime({ duration, seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
  console.log('fffgd');
  if (seconds === duration) localStorage.removeItem(CURRENT_TIME);
}

function putCurrentTime() {
  player.setCurrentTime(
    localStorage.getItem(CURRENT_TIME)
      ? localStorage.getItem(CURRENT_TIME)
      : 0.0
  );
}
