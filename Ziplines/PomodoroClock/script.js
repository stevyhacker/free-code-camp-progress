function startTimer() {
    //window.clearInterval(secondsInterval);
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);

    var workTime = document.getElementById("work-length").textContent;
    var breakTime = document.getElementById("break-length").textContent;
    var secondsCounter = 60;

    workTime--;
    var secondsInterval = setInterval(countSeconds, 1000);

    function countSeconds() {
        secondsCounter--;
        if (secondsCounter < 1) {
            workTime--;
            document.getElementById("timer").innerHTML = workTime + ":" + secondsCounter;
            secondsCounter = 59;
        }
        else {
            document.getElementById("timer").innerHTML = workTime + ":" + secondsCounter;
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