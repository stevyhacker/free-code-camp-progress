function startTimer() {
    //window.clearInterval(secondsInterval);
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);

    var workTime = document.getElementById("work-length").textContent;
    var breakTime = document.getElementById("break-length").textContent;
    var secondsCounter = 60;

    workTime--;
    var workInterval = setInterval(countSecondsWork, 1000);
    var breakInterval;

    function countSecondsWork() {
        secondsCounter--;
        if (secondsCounter < 1) {
            workTime--;
            document.getElementById("timer").innerHTML = workTime + ":0" + secondsCounter;
            if (workTime < 1) {
                if (secondsCounter == 0) {
                    document.getElementById("status-text").textContent = "Break!";

                    workTime = document.getElementById("work-length").textContent;
                    breakTime = document.getElementById("break-length").textContent;
                    breakTime--;
                    secondsCounter = 60;
                    clearInterval(workInterval);
                    breakInterval = setInterval(countSecondsBreak, 1000);
                }
            }
            else {
                secondsCounter = 60;
            }
        }
        else if (secondsCounter < 10 && secondsCounter > 0) {
            document.getElementById("timer").innerHTML = workTime + ":0" + secondsCounter;
        }
        else {
            document.getElementById("timer").innerHTML = workTime + ":" + secondsCounter;
        }


    }


    function countSecondsBreak() {
        secondsCounter--;
        if (secondsCounter < 1) {
            workTime--;
            document.getElementById("timer").innerHTML = breakTime + ":0" + secondsCounter;
            if (breakTime < 1) {
                if (secondsCounter == 0) {
                    document.getElementById("status-text").textContent = "Work";
                    workTime = document.getElementById("work-length").textContent;
                    breakTime = document.getElementById("break-length").textContent;
                    workTime--;
                    secondsCounter = 60;
                    clearInterval(breakInterval);
                    workInterval = setInterval(countSecondsWork, 1000);
                }
            }
            else {
                secondsCounter = 60;
            }
        }
        else if (secondsCounter < 10 && secondsCounter > 0) {
            document.getElementById("timer").innerHTML = breakTime + ":0" + secondsCounter;
        }
        else {
            document.getElementById("timer").innerHTML = breakTime + ":" + secondsCounter;
        }


    }
}

function minusBreak() {
    var time = document.getElementById("break-length").textContent;
    if (time > 1) {
        time--;
    }
    document.getElementById("break-length").textContent = time;
}

function minusWork() {
    var time = document.getElementById("work-length").textContent;
    if (time > 1) {
        time--;
    }
    document.getElementById("work-length").textContent = time;
}

function plusWork() {
    var time = document.getElementById("work-length").textContent;
    time++;
    document.getElementById("work-length").textContent = time;
}

function plusBreak() {
    var time = document.getElementById("break-length").textContent;
    time++;
    document.getElementById("break-length").textContent = time;
}