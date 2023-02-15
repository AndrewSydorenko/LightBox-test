import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOKALESTORE = 'videoplayer-current-time';

function saveCurrentTimeVideo({ seconds }) {
    localStorage.setItem(LOKALESTORE, seconds);
}

player.on('timeupdate', saveCurrentTimeVideo);

const currentTime = localStorage.getItem(LOKALESTORE);
if (currentTime) {
    player.setCurrentTime(currentTime, throttle = 1000)
}