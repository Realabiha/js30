const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const MEDIA = navigator.mediaDevices; 
const OPTIONS = {video: true, raido: false}

strip.onclick = takePhoto;

MEDIA.getUserMedia(OPTIONS)
    .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = handleLoaded;
    })
    .catch(err => {
        console.log(err);
    })

function handleLoaded(e){
    const {videoWidth: x, videoHeight: y} = video;
    this.play()
    requestAnimationFrame(drawImage.bind(this, x, y));
}

function drawImage(x, y){
    ctx.drawImage(this, 0, 0, x, y);
    let pixels = ctx.getImageData(0, 0, x, y);
    // console.log(pixels, 'pixels')
    imageEffect(pixels);
    ctx.putImageData(pixels, 0, 0);
    requestAnimationFrame(drawImage.bind(this, x, y))
}

function imageEffect(pixels){
    // R * 0.3 + G * 0.59 + B * 0.11 灰度算法
    for(let i = 0; i < pixels.data.length; i += 4){
        let R = pixels.data[i],
            G = pixels.data[i+1],
            B = pixels.data[i+2],
            gray = R * 0.3 + G * 0.59 + B * 0.11;
        pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = gray;
    }
}

function takePhoto(){
    snap.currentTime = 0;

    let base64image = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.setAttribute('download', 'canvastoimage');
    link.href = base64image;
    link.innerHTML = `<img src="${base64image}" alt="canvastoimage"/>`
    strip.insertBefore(link, strip.firstChild);

    snap.play();
}