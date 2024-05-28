let displayText = "";
let op1 = "";
let op2 = "";
let operand = "";
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
                displayText = `${op1} ${operand} ${op2}`;
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
                displayText = "";
                op1 = "";
                op2 = "";
                operand = "";
                currentState = "operand 1";
                break;
        }
        displayNode.textContent = displayText;
    }
})

operatorsNode.addEventListener("click", function(event) {
    if(event.target.childElementCount === 0) {
        if(currentState==="operand 1") {
            currentState = "operand 2";
            if(op1==="") {
                op1 = "0";
            }
            operand = event.target.textContent;
            displayText = `${op1} ${operand} `;
            displayNode.textContent = displayText;
        } 
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
            result = divide(operand1, operand2);
            break;
    }
    return result;
}