let displayText = "";
let op1 = "";
let op2 = "";
let operator = "";
let result = NaN;
let currentState = "operand 1"

numbersNode = document.querySelector("#num-buttons");
cntrlNode = document.querySelector("#ctrl-buttons");
operatorsNode = document.querySelector("#op-buttons");
displayNode = document.querySelector("#calc-display");

numbersNode.addEventListener("click", function(event) {
    if(event.target.childElementCount === 0) {
        switch(currentState) {
            case "operand 1":
                if(op1==="0") {
                    op1="";
                }
                op1 += event.target.textContent;
                displayText = op1;
                break;
            case "operand 2":
                if(op2==="0") {
                    op2="";
                }
                op2 += event.target.textContent;
                displayText = `${op1} ${operator} ${op2}`;
                break;
        }
        displayNode.textContent = displayText;
    }
})

cntrlNode.addEventListener("click", function(event) {
    if(event.target.childElementCount === 0) {
        switch(event.target.textContent)
        {
            case "clear":
                resetCalculator();
                break;
            case "=":
                if(currentState==="operand 2") {    
                    result = operate(operator, op1, op2);
                    if(result===undefined) {
                        displayError();
                    }
                    else {
                        displayText = `${op1} ${operator} ${op2} = ${result}`;
                        currentState = "result";
                    }
                }
        }
        displayNode.textContent = displayText;
    }
})

operatorsNode.addEventListener("click", function(event) {
    if(event.target.childElementCount === 0) {
        if(currentState==="operand 1") {
            if(op1==="") {
                op1 = "0";
            }
        }
        else {
            op1 = operate(operator, op1, op2);
            op2 = "";
        }

        if(op1===undefined) {
            displayError();
        }
        else {
            currentState = "operand 2";
            operator = event.target.textContent;
            displayText = `${op1} ${operator} `;
        }
        
        displayNode.textContent = displayText;
    }
})



function add(operand1, operand2) {
    return (Number(operand1) + Number(operand2));
}

function subtract(operand1, operand2) {
    return (Number(operand1) - Number(operand2));
}

function multiply(operand1, operand2) {
    return (Number(operand1) * Number(operand2));
}

function divide(operand1, operand2) {
    return (Number(operand1) / Number(operand2));
}

function operate(operator, operand1, operand2) {
    let result = NaN;
    switch(operator) {
        case '+':
            result = add(operand1, operand2);
            break;
        case '-':
            result = subtract(operand1, operand2);
            break;        
        case '*':
            result = multiply(operand1, operand2);
            break;
        case '/':
            if(Number(operand2)===0) {
                result = undefined;
            }
            else {
                result = divide(operand1, operand2);
            }
            break;
    }
    return result;
}

function resetCalculator() {
    displayText = "";
    op1 = "";
    op2 = "";
    operator = "";
    currentState = "operand 1";
}

function displayError() {
    resetCalculator();
    displayText = "Error: division by 0"
}