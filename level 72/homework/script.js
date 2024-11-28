            // Task 1: Function that logs a message after 3 seconds
            function logMessageAfter3Seconds() {
                setTimeout(() => {
                    console.log("Message displayed after 3 seconds");
                }, 3000);
            }

            // Task 2: Program that logs the current time every second
            setInterval(() => {
                let currentTime = new Date();
                let hours = currentTime.getHours().toString().padStart(2, '0');
                let minutes = currentTime.getMinutes().toString().padStart(2, '0');
                let seconds = currentTime.getSeconds().toString().padStart(2, '0');
                document.getElementById("currentTime").textContent = `${hours}:${minutes}:${seconds}`;
            }, 1000);

            // Task 3: Program that changes the background color every 3 seconds
            let colors = ["#FF5733", "#33FF57", "#3357FF", "#F4FF33", "#FF33F4"];
            let colorIndex = 0;
            setInterval(() => {
                document.body.style.backgroundColor = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
            }, 3000);

            // Task 4: Program that changes paragraph textContent every 5 seconds
            let paragraph = document.querySelector('p');
            let counter = 1;
            setInterval(() => {
                paragraph.textContent = `This is the new text content #${counter}`;
                counter++;
            }, 5000);

            // Task 5: Timer program with Start, Pause, and Reset buttons
            let timerInterval;
            let seconds = 0;
            let timerDisplay = document.getElementById("timerDisplay");

            function startTimer() {
                timerInterval = setInterval(() => {
                    seconds++;
                    timerDisplay.textContent = seconds;
                }, 1000);
            }

            function pauseTimer() {
                clearInterval(timerInterval);
            }

            function resetTimer() {
                clearInterval(timerInterval);
                seconds = 0;
                timerDisplay.textContent = seconds;
            }

            document.getElementById("startButton").addEventListener("click", startTimer);
            document.getElementById("pauseButton").addEventListener("click", pauseTimer);
            document.getElementById("resetButton").addEventListener("click", resetTimer);