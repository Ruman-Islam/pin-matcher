function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById("generate-btn").addEventListener('click', function () {
    const getInput = document.getElementById("pin-input");
    getInput.value = getPin();
})

document.getElementById("digit-btn").addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        // handle backspace
        // handle clear
        if (digit === 'C') {
            const typedDigit = document.getElementById("display");
        typedDigit.value = "";
        }
        if (digit === 'Back') {
            const typedDigit = document.getElementById("display");
            typedDigit.value = typedDigit.value.substr(0, typedDigit.value.length - 1);
        }
        
    }
    else {
        const typedDigit = document.getElementById("display");
        typedDigit.value = typedDigit.value + digit;
    }
})

document.getElementById("submit").addEventListener('click', function () {
    const pinDisplay = document.getElementById("pin-input");
    const typedDisplay = document.getElementById("display");
    if (pinDisplay.value === typedDisplay.value) {
        document.getElementById("correct").style.display = 'block';
        document.getElementById("correct").addEventListener('click', function () {
            document.body.style.backgroundColor = 'green';
        })
    }
    else {
        document.getElementById("incorrect").style.display = 'block';
    }
})