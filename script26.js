let currentInputValue = ""
function clearDisplay() {
    currentInputValue = "";
    document.getElementById("result").value = "";
    
}
function appendValue(value) {
    currentInputValue += value;
    console.log(currentInputValue)
    document.getElementById("result").value = currentInputValue;
}
function calculateResult() {
  try {
    currentInputValue = eval(currentInputValue);
    document.getElementById("result").value = currentInputValue;
} catch {
    document.getElementById("result").value = "Error";
}
}
function dot(value) {
    currentInputValue += "0.";
    document.getElementById("result").value = currentInputValue;
}
function changeSign(value) {
    currentInputValue = currentInputValue * -1;
    document.getElementById("result").value = currentInputValue;
}

