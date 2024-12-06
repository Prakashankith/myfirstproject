function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let display = document.getElementById('display');
        let result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            throw new Error('Invalid operation');
        }
        display.value = result;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}
