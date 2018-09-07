"use strict"
function calResult(input) {
  const numbers = input.split(/[\/+x-]/);
  const operators = input.split(/[^\/+x-]/).filter((x) => x);

  return calImmediateExecutionResult(numbers, operators)
}

function calImmediateExecutionResult(numbers, operators) {
  if (numbers.length === 1) {
    return numbers[0];
  }

  const number1 = parseFloat(numbers[0]);
  const number2 = parseFloat(numbers[1]);
  const operator = operators[0];
  const opResult = operate(number1, number2, operator);

  return calImmediateExecutionResult(
    [opResult, ...numbers.slice(2)],
    operators.slice(1),
  );
}

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      return a / b;
    default:
      return 0;
  }
}

export default calResult;