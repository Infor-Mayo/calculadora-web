let calculation = '';

function insert(value) {
    calculation += value;
    document.getElementById('result').value = calculation;
}

function clearScreen() {
    calculation = '';
    document.getElementById('result').value = calculation;
}

function backspace() {
    calculation = calculation.slice(0, -1);
    document.getElementById('result').value = calculation;
}

function calculate() {
    let result;
    try {
        result = eval(calculation);
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert('Invalid calculation');
        }
    }
    document.getElementById('result').value = result;
    calculation = result;
}

