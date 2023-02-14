import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

player.on('timeupdate', throttle(writeCurrentTime, 1000));

function writeCurrentTime({ duration, seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
  if (seconds === duration) localStorage.removeItem(CURRENT_TIME);
}
