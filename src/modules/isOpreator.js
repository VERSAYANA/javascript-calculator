const isOperator = (char) => {
  if (char === '+' || char === '-' || char === 'x' || char === '/' || char === '=') {
    return true;
  }
  return false;
};

export default isOperator;