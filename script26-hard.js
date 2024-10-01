let currentInput = ""
function clearDisplay() {
    currentInput = "";
    document.getElementById("result").value = "";
}
function appendValue(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}
function calculateResult() {
    try {
        currentInput = eval(currentInput)
        document.getElementById("result").value = currentInput;
    } catch {
        document.getElementById("result").value = "Error"
    }
}
function dot(value) {
    currentInput += "0.";
    document.getElementById("result").value = currentInput;
}
function clearLast() {
    currentInput = currentInput.slice(0, -1); 
    document.getElementById("result").value = currentInput;
}

