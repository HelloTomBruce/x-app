import XFullpage from 'x-fullpage';
import XTouch from 'x-touch';
import XLoad from 'x-load';
import XMusic from 'x-music';
import 'animate.css';
const src = require('../assets/media/bg.mp3');
const playImg = require('../assets/images/audio-cover.jpg');

const xTouch = new XTouch();

const xFullpage = new XFullpage({
    root: '#root',
    pageClassName: 'x-page',
    loop: false
});

new XLoad({
    wrapper: '#root',
    attr: 'data-src',
    prior: 'prior'
});

const xMusicObj = new XMusic({ src, playImg, pauseImg: playImg });

xTouch.init();
xFullpage.init();
xMusicObj.init();