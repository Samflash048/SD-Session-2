// Function to play sound  
function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}


const drumButtons = document.querySelectorAll('.drum');
drumButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
    });
});

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            playSound('sounds/kick.wav');
            break;
        case 's':
            playSound('sounds/snare.wav');
            break;
        case 'd':
            playSound('sounds/hihat.wav');
            break;
        case 'f':
            playSound('sounds/crash.wav');
            break;
        case 'g':
            playSound('sounds/tom 1.wav');
            break;
        case 'h':
            playSound('sounds/tom 2.wav');
            break;
        case 'j':
            playSound('sounds/tom 3.wav');
            break;
        case 'k':
            playSound('sounds/tom 4.wav');
            break;
        default:
            break;
    }
});