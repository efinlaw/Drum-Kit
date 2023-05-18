
window.addEventListener('keydown', (e) => {
    const {keyCode}= e;
    const audio = document.querySelector(`audio[data-key='${keyCode}'`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`div[data-key='${keyCode}']`);
    key.classList.add('playing');
});

window.addEventListener('keyup', () => {
    const key = document.querySelector('.playing');
    if(!key) return;
    key.classList.remove('playing');
});

