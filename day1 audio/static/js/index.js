// defer script excute after DOMContentLoaded

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
const audios = document.querySelectorAll('audio');
const ul = document.querySelectorAll('.board ul');
const li = document.querySelectorAll('.board li');

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


    
}
function handleKeyUp(e){
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!btn) return;
    btn.classList.remove('play')
    const key = btn.querySelector('span');
    key.classList.remove('light');

    ul.forEach(v => {
        Array.from(v.children).forEach((l,i) => {
            setTimeout( _ => {
                // l.style.opacity = (time % 30 + 1) * 0.1
            })
        })
    })
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




// const key = [65, 83, 68, 65];
// const input = [];
// window.addEventListener('keyup', handleKeyup);
//     function handleKeyup(e){
//     input.push(e.keyCode)
//     // input.splice(0, input.length - key.length);
//     input.splice(-key.length, input.length - key.length);
//     if(input.toString() === key.toString()) cornify_add();  
// }





















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
