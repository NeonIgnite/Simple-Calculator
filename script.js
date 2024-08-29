// let addButton = document.getElementById('addButton');
// let minusButton = document.getElementById('minusButton');
// let multiplyButton = document.getElementById('multiplyButton');
// let divideButton = document.getElementById('divideButton');

let calcSwitch = false;
let screenCalc = document.getElementById('screen');
let switchButton = document.getElementById('calcSwitch');
let firstNo = document.getElementById('firstNo');
let secondNo = document.getElementById('secondNo');
let operationButton = document.getElementById('operationButton');
let screenResult = document.getElementById('resultNumber');

let calculateButton = document.getElementById('calculateResult');
let result;
let firstNumber;
let secondNumber;
let operationSymbol;
let chechkResult;



function switchingCalc() {
    if (!calcSwitch) {
        calcSwitch = true;
        switchButton.style.color = 'green';
        switchButton.innerText = 'ON';
        firstNo.style.display = 'flex';
        operationButton.style.display = 'flex';
        secondNo.style.display = 'flex';

        screenCalc.style.backgroundColor = '#8ca564';
        calculateResult();
    }
    else {
        calcSwitch = false;
        switchButton.style.color = 'red';
        switchButton.innerText = 'OFF';
        screenCalc.style.backgroundColor = '#323C26';
    }
}
function calculateResult() {
    if (result == undefined) {
        console.log("VALUES MUST BE ENTERED FIRST BEFORE CALCULATING!");

        firstNumber = +prompt('Please enter the first Number');
        firstNo.innerText = firstNumber;

        secondNumber = +prompt('Please enter the second Number');
        secondNo.innerText = secondNumber;

        operationSymbol = prompt('Please choose the Operating ( + , - , / , *)');
        operationButton.innerText = operationSymbol;

        // checkOperation(operationSymbol);

        screenResult.innerText = checkOperation(operationSymbol);

        setTimeout(() => {
            firstNo.style.display = 'none';
            operationButton.style.display = 'none';
            secondNo.style.display = 'none';
            screenResult.style.display = 'flex';
        }, 500);


    }
    else if (result) {
        chechkResult = confirm('Do you wish to continue with the same result ');
        if (chechkResult) {
            firstNumber = result;
            secondNumber = +prompt('Please enter the second Number');
            secondNo.innerText = secondNumber;

            operationSymbol = prompt('Please choose the Operating ( + , - , / , *)');
            operationButton.innerText = operationSymbol;

            // checkOperation(operationSymbol);

            screenResult.innerText = checkOperation(operationSymbol);

            setTimeout(() => {
                firstNo.style.display = 'none';
                operationButton.style.display = 'none';
                secondNo.style.display = 'none';
                screenResult.style.display = 'flex';
            }, 500);
        }
        else if (!chechkResult) {
            firstNumber = +prompt('Please enter the first Number');
            firstNo.innerText = firstNumber;

            secondNumber = +prompt('Please enter the second Number');
            secondNo.innerText = secondNumber;

            operationSymbol = prompt('Please choose the Operating ( + , - , / , *)');
            operationButton.innerText = operationSymbol;

            // checkOperation(operationSymbol);

            screenResult.innerText = checkOperation(operationSymbol);

            setTimeout(() => {
                firstNo.style.display = 'none';
                operationButton.style.display = 'none';
                secondNo.style.display = 'none';
                screenResult.style.display = 'flex';
            }, 500);

        }
    }
}
function checkOperation(operationSymbol) {
    if (operationSymbol == '+') {
        result = firstNumber + secondNumber;
        console.log("the addition of the 2 numbers will be: " + result);
        return result;
    }
    else if (operationSymbol == '-') {
        result = firstNumber - secondNumber;
        console.log("the subtraction of the 2 numbers will be: " + result);
        return result;
    }
    else if (operationSymbol == '*') {
        result = firstNumber * secondNumber;
        console.log("the multiplication of the 2 numbers will be: " + result);
        return result;
    }
    else if (operationSymbol == '/') {
        if (secondNumber == 0) {
            console.log('You cant divide by Zero!')
        }
        else {
            result = firstNumber / secondNumber;
            console.log("the division of the 2 numbers will be: " + result);
            return result;
        }

    }
    else {
        console.log('Please enter a valid Operation ( + , - , / , *)');
    }
}



// }


