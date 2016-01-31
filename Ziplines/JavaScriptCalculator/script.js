function clickPlus() {
    document.getElementById("calculator-output").textContent += "+";
}

function clickDivide() {
    document.getElementById("calculator-output").textContent += "/";
}

function clickMultiply() {
    document.getElementById("calculator-output").textContent += "*";
}

function clickMinus() {
    document.getElementById("calculator-output").textContent += "-";
}

function clickPercent() {
    document.getElementById("calculator-output").textContent += "%";
}

function clickPoint() {
    document.getElementById("calculator-output").textContent += ".";
}

function enterOne() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "1";
    }
    else {
        document.getElementById("calculator-output").textContent += "1";
    }
}

function enterTwo() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "2";
    }
    else {
        document.getElementById("calculator-output").textContent += "2";
    }
}

function enterThree() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "3";
    }
    else {
        document.getElementById("calculator-output").textContent += "3";
    }
}

function enterFour() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "4";
    }
    else {
        document.getElementById("calculator-output").textContent += "4";
    }
}

function enterFive() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "5";
    }
    else {
        document.getElementById("calculator-output").textContent += "5";
    }
}

function enterSix() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "6";
    }
    else {
        document.getElementById("calculator-output").textContent += "6";
    }
}

function enterSeven() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "7";
    }
    else {
        document.getElementById("calculator-output").textContent += "7";
    }
}

function enterEight() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "8";
    }
    else {
        document.getElementById("calculator-output").textContent += "8";
    }
}

function enterNine() {
    if (document.getElementById("calculator-output").textContent == "0") {
        document.getElementById("calculator-output").textContent = "9";
    }
    else {
        document.getElementById("calculator-output").textContent += "9";
    }
}

function enterZero() {
    if (document.getElementById("calculator-output").textContent != "0") {
        document.getElementById("calculator-output").textContent += "0";
    }
}

function clickAC() {
    document.getElementById("calculator-output").textContent = "0";
}