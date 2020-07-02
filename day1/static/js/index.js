// defer script excute after DOMContentLoaded

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
const audios = document.querySelectorAll('audio');





function handleKeyDown(e){
    console.log(e.keyCode);
    playSound(e);   
}
function handleKeyUp(e){
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!btn) return;
    btn.classList.remove('play')
    const key = btn.querySelector('span');
    key.classList.remove('light');
}

function playSound(e){
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!btn) return;
    btn.classList.add('play');
    const key = btn.querySelector('span');
    key.classList.add('light');
    const audio = btn.querySelector('audio');
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function createBtn(){
    let random = Math.floor(Math.random()*9);
    if(nums[random] == keyCode) random ++;
    keyCode = nums[random];
    const btn = document.querySelector(`div[data-key="${nums[random]}"]`);
    if(!btn) return;
    btn.classList.add('play');
}

