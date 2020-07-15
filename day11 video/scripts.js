const wrap = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');

const range = document.querySelectorAll('input[type=range]');

const skip = document.querySelectorAll('.skip');

const bar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');

const screen = document.querySelector('.screen');


// 视频播放与暂停
wrap.onclick = handlePlayerClick;
video.onplay = handleVideoPlay;
video.onpause = handleVideoPlay;
video.ontimeupdate = handleBarUpdate;

function handlePlayerClick(e){
    video.paused ? video.play() : video.pause();

}
function handleVideoPlay(e){
    toggle.textContent = video.paused ? '▶' : '||';
}
function handleBarUpdate(e){
    bar.style.width = video.currentTime / video.duration * 100 + '%';
}


// 声音调节
// 速度调节
range.forEach( v => {
    v.onclick = handleRangeClick;
    v.onchange = handleRangeChange;
    v.onmousemove = handleRangeMove;
})


function handleRangeClick(e){
    e.stopPropagation();
    video[`${this.name}`] = this.value; 
}
function handleRangeChange(e){
    video[`${this.name}`] = this.value; 
}
function handleRangeMove(e){
    video[`${this.name}`] = this.value; 
}

// 进度

skip.forEach(v => {
    v.onclick = handleSkip;
})

function handleSkip(e){
    e.stopPropagation();
    video.currentTime += this.dataset.skip * 1;
    console.log(video.currentTime, video.duration);
    // video.play();
}

// 进度拖拽
let down = false;
progress.onclick = handleBarClick;
progress.onmousedown = _ => down = true;
progress.onmousemove = down && handleBarClick;
progress.onmouseup = _ => down = false;

function handleBarClick(e){
    console.log('move');
    e.stopPropagation();
    let per = e.offsetX/progress.offsetWidth;
    video.currentTime = per * video.duration;
    bar.style.width = `${per * 100}%`
}

// 全屏切换
screen.onclick = handleScreen;
// window.onresize = handleScreen;
function handleScreen(e){
    e.stopPropagation();
    video.style.width = video.offsetWidth - 750 <= 0 ? window.innerWidth + 'px' : 750 + 'px';
}



