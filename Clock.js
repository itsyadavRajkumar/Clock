var audio = document.createElement('audio');
audio.setAttribute('src', 'music.mp3'); 
audio.loop=true;
audio.play();

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hRotation = htime * 30 + mtime / 2;
    mRotation = 6 * mtime;
    sRotation = 6 * stime;

    hour.style.transform=`rotate(${hRotation}deg)`;
    minute.style.transform=`rotate(${mRotation}deg)`;
    second.style.transform=`rotate(${sRotation}deg)`;

}, 1000);