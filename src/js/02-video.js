import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALESTORE = 'videoplayer-current-time';

function saveCurrentTimeVideo({ seconds }) {
    localStorage.setItem(LOCALESTORE, seconds);
}

player.on('timeupdate', saveCurrentTimeVideo);

const currentTime = localStorage.getItem(LOCALESTORE);
if (currentTime) {
    player.setCurrentTime(currentTime)
    throttle(currentTime, 300);
}
