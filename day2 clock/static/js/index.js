const sec = document.querySelector('.sec');

const min = document.querySelector('.min');
const hour = document.querySelector('.hour');
const marks = document.querySelectorAll('.mark');   

setMarks();
setClock();

// settimeout, setinterval, requestanimationframe
// setInterval(setClock, 1000);
// setTimeout(setClock, 1000);
// requestAnimationFrame(setClock);

function setClock(){
    const date = new Date();
    const secdeg = date.getSeconds() * 6;
    const mindeg = date.getMinutes() * 6 + date.getSeconds() / 60 * 6;
    const hourdeg = date.getHours() * 30 + date.getMinutes() / 60 * 30;
    sec.style.transform = `rotate(${secdeg}deg)`;
    min.style.transform = `rotate(${mindeg}deg)`;
    hour.style.transform = `rotate(${hourdeg}deg)`;
    // setTimeout(setClock, 1000);
    requestAnimationFrame(setClock);
}

function setMarks(){
    marks.forEach((v, i) => {
        v.style.transform = `rotate(${i * 30}deg) translate(-50%, -500%)`;
    })
}
