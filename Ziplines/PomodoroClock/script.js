function startTimer() {
    var workTime = document.getElementById("work-length").textContent;
    var breakTime = document.getElementById("break-length").textContent;

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