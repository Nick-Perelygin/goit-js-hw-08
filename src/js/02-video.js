import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};
  
player.on('timeupdate', getCurrentTime);
  
player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);