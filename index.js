// Set initial time for soft boiled eggs (3 minutes)
let time = 180; // 3 minutes in seconds
const timerDisplay = document.getElementById("timerDisplay");

function updateTimer() {
    console.log("Timer running: ", time); // Log current time in seconds
    if (time > 0) {
        time--; // Decrease time by one second
        let minutes = Math.floor(time / 60); // Calculate minutes
        let seconds = time % 60; // Calculate seconds
        console.log(`Time left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`); // Log time left
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`; // Update display
    } else {
        clearInterval(timerInterval); // Stop the timer when it hits zero
        timerDisplay.textContent = "Egg is ready!"; // Display ready message
    }
}

// Start the timer when the button is clicked
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
    timerInterval = setInterval(updateTimer, 1000); // Update every second
});
