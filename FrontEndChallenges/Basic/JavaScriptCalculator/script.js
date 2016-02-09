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

function clickSqrt() {
    document.getElementById("calculator-output").textContent += "√";
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

function clickCE() {
    var output = document.getElementById("calculator-output").textContent;

    if (output[output.length - 1] == "+" || output[output.length - 1] == "-" || output[output.length - 1] == "/" || output[output.length - 1] == "*" || output[output.length - 1] == "%" || output[output.length - 1] == "√" || output[output.length - 1] == ".") {
        document.getElementById("calculator-output").textContent = output.slice(0, -1);
    }
    else {
        var i = 1;
        var breakActivated = false;
        while (output[output.length - i] != "+" && output[output.length - i] != "-" && output[output.length - i] != "/" && output[output.length - i] != "*" && output[output.length - i] != "%" && output[output.length - i] != "√") {
            //alert(output.slice(0, -i) + "last element= " + output[output.length - i]);
            i++;
            if (i >= output.length) {
                document.getElementById("calculator-output").textContent = "0";
                breakActivated = true;
                break;
            }
        }
        if (!breakActivated) {
            document.getElementById("calculator-output").textContent = output.slice(0, -i + 1);
        }
    }
}

function clickEquals() {
    var output = document.getElementById("calculator-output").textContent;
    document.getElementById("calculator-output").textContent = eval(output).toString();

}