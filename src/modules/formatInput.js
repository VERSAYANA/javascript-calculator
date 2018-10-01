function formatInput(str) {
  let result = [];
  const regex = /[0-9.]/;
  for (let i = 0; i < str.length; i++) {
    if (!regex.test(str[i])) {
      result.push(` ${str[i]} `);
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}

export default formatInput;
