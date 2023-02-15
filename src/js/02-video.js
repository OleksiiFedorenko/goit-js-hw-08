import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const CURRENT_TIME = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime({ duration, seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
  if (seconds === duration) localStorage.removeItem(CURRENT_TIME);
}
