let displayText = "";

numbersNode = document.querySelector("#num-buttons");
displayNode = document.querySelector("#calc-display");

numbersNode.addEventListener("click", function(event) {
    if(displayText==="0") {
        displayText = "";
    }
    displayText += event.target.textContent;
    displayNode.textContent = displayText;
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