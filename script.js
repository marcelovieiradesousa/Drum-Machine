const playSound = e => {
    const keyCode = e.keyCode,
        keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

    if(!keyElement) return;

    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();
};
    window.addEventListener('keydown', playSound);