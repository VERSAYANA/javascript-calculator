const isOperator = (char) => {
  if (char === '+' || char === '-' || char === 'x' || char === '/') {
    return true;
  }
  return false;
};

export default isOperator;