import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORE = 'videoplayer-current-time';

function saveCurrentTimeVideo({ seconds }) {
    localStorage.setItem(LOCALSTORE, seconds);
}

player.on('timeupdate', saveCurrentTimeVideo);

const currentTime = localStorage.getItem(LOCALSTORE);
if (currentTime) {
    player.setCurrentTime(currentTime)
    throttle(currentTime, 300);
}
