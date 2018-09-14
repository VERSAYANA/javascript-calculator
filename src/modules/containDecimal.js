function containDecimal(str) {
  for (let char of str) {
    if (char === '.') {
      return true;
    }
  }
  return false;
}

export default containDecimal;
