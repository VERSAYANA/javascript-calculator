function calResult(input, logic) {
  const numbers = input.split(/[/+x-]/);
  const operators = input.split(/[^/+x-]/).filter((x) => x);

  if(logic === "formula") {
    return +calFormulaExpression(numbers, operators).toFixed(6);
  }
  if (logic === "immidiate") {
    return +calImmediateExecutionResult(numbers, operators).toFixed(6);
  }
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

function calFormulaExpression(numbers, operators) {
  if (numbers.length === 1) {
    return numbers[0];
  }

  const firstMultiplyDivideIndex = findFirstMultiplyDivideIndex(operators);
  const number1 = parseFloat(numbers[firstMultiplyDivideIndex]);
  const number2 = parseFloat(numbers[firstMultiplyDivideIndex + 1]);
  const operator = operators[firstMultiplyDivideIndex];

  const opResult = operate(number1, number2, operator);

  return calFormulaExpression(
    [
      ...numbers.slice(0, firstMultiplyDivideIndex),
      opResult,
      ...numbers.slice(firstMultiplyDivideIndex + 2),
    ],
    [
      ...operators.slice(0, firstMultiplyDivideIndex),
      ...operators.slice(firstMultiplyDivideIndex + 1),
    ],
  );
}

function findFirstMultiplyDivideIndex(operators) {
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === 'x' || operators[i] === '/') {
      return i;
    }
  }
  return 0;
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
