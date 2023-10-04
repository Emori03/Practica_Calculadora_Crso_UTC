function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteDisplay() {
    let Display = document.getElementById("display").value;
    document.getElementById("display").value = Display.substring(0, Display.length - 1);
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

document.addEventListener('keydown', function(event) {
    let button
    if (event.key === 'Enter'){
        button = document.getElementById('btn=');
    } else if (event.key === 'Delete'){
        button = document.getElementById('btnDelete');
    } else if (event.key === 'Backspace'){
        button = document.getElementById('btnC');
    }
    if (event.key === '0') {
        button = document.getElementById('btn0');
    } else if (event.key === '1'){
        button = document.getElementById('btn1');
    } else if (event.key === '2'){
        button = document.getElementById('btn2');
    } else if (event.key === '3'){
        button = document.getElementById('btn3');
    } else if (event.key === '4'){
        button = document.getElementById('btn4');
    } else if (event.key === '5'){
        button = document.getElementById('btn5');
    } else if (event.key === '6'){
        button = document.getElementById('btn6');
    } else if (event.key === '7'){
        button = document.getElementById('btn7');
    } else if (event.key === '8'){
        button = document.getElementById('btn8');
    } else if (event.key === '9'){
        button = document.getElementById('btn9');
    } else if (event.key === '+'){
        button = document.getElementById('btn+');
    } else if (event.key === '-'){
        button = document.getElementById('btn-');
    } else if (event.key === '/'){
        button = document.getElementById('btn/');
    } else if (event.key === '*'){
        button = document.getElementById('btn*');
    }
    button.click();
  });