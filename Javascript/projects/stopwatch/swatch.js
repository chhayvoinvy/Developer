// Clock

const display = document.getElementById('display');
let timer = null;
let elapsed_time = 0;
let started_time = 0;
let isRunning = false;

function start() {
    if(!isRunning) {
        started_time = Date.now() - elapsed_time;
        timer = setInterval(initial, 10);
        isRunning = true;
    }
}

function pause() {
    if(isRunning) {
        clearInterval(timer);
        elapsed_time = Date.now() - started_time;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    started_time = 0;
    elapsed_time = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function initial() {
    const current_time = Date.now();
    elapsed_time = current_time - started_time;

    let hours = Math.floor(elapsed_time / (1000 * 60 * 60));
    let minites = Math.floor(elapsed_time / (1000 * 60) % 60);
    let seconds = Math.floor(elapsed_time / 1000 % 60);
    let milliseconds = Math.floor(elapsed_time % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minites = String(minites).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);

    display.textContent = `${hours}:${minites}:${seconds}:${milliseconds}`;

}