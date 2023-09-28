function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteDisplay() {
    let Display = document.getElementById("display").value;
    console.log(Display);
    document.getElementById("display").value = Display.substring(0, Display.length - 1);
    console.log(Display);
}

function calculateResult() {
    const expression = document.getElementById("display").value;
    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}