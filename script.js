// display number in the text box
function displayNum(value) {
    result.value += value
};

// clear text box
function clearBox(){
    result.value=""
}

// get result
function evaluateExpression(){
    expression = result.value;
    output = eval(expression);
    result.value = output
}

// remove last item
function removeLastItem() {
    currentExp = result.value;
    result.value = currentExp.slice(0, -1);
}





