// defer script excute after DOMContentLoaded

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
const audios = document.querySelectorAll('audio');
const show = document.querySelector('.show')
const li = document.getElementsByTagName('li');

const keys = [
    {key: 'a', code: 65}, {key: 's', code: 83}, {key: 'd', code: 68}, {key: 'f', code: 70}, 
    {key: 'g', code: 71},
    {key: 'h', code: 72}, {key: 'j', code: 74}, {key: 'k', code: 75}, {key: 'l', code: 76}
];
let index = 0;




function handleKeyDown(e){
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!btn) return;
    playSound(btn);   
    lightKey(e);
}
function handleKeyUp(e){
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!btn) return;
    btn.classList.remove('play')
    const key = btn.querySelector('span');
    key.classList.remove('light');
    show.classList.remove('active');
}

function playSound(btn){
    btn.classList.add('play');
    const key = btn.querySelector('span');
    key.classList.add('light');
    const audio = btn.querySelector('audio');
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function lightKey(e){
    console.log(e.key)
    show.textContent = e.key.toUpperCase(); 
    show.classList.add('active');
}



















// function outter(){
//     let a = 1;
//     // function inner(){
//     //     console.log(a);
//     // }
//     inner();
// }
// function inner(){
//     console.log(a)
// }
// outter();
