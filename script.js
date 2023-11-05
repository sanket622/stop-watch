// JavaScript (script.js)
let isRunning = false;  // Flag to track if the stopwatch is running
let startTime = 0;     // Variable to store the start time
let interval;

function startStop() {
    if (isRunning) {
        // If the stopwatch is running, stop it
        clearInterval(interval);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        // If the stopwatch is not running, start it
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateDisplay, 10);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;  // Toggle the running flag
}

function reset() {
    // Reset the stopwatch
    clearInterval(interval);
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;  // Reset the running flag
    startTime = 0;      // Reset the start time
}

function updateDisplay() {
    // Update the display with the elapsed time
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);

    const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    document.getElementById('display').textContent = display;
}
