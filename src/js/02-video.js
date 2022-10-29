import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeSave, 1000));

function timeSave(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
