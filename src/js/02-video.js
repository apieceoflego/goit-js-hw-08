import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function timeSave(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

player.on('timeupdate', throttle(timeSave, 1000));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(currentTime);
