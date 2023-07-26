/**
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
 */

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operator. Please use one of +, -, *, or /.");
    }
}

const number1 = 10;
const operator = '/';
const number2 = 5;

try {
    const result = calculate(number1, number2, operator);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(error.message);
}
