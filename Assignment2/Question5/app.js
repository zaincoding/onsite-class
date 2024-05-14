function Calculator(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        var result = firstNumber + secondNumber;
        return result;
    }
    {
        var result1 = firstNumber - secondNumber;
        return result1;
    }
}
var firstNumber = 5;
var secondNumber = 9;
var operator = "-";
console.log(Calculator(firstNumber, secondNumber, operator));
