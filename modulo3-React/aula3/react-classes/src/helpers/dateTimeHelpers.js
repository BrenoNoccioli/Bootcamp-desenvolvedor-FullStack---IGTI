function leftPad(value, count = 2, char = 0) {
  const stringValue = value.toString();
  let newValue = stringValue;
  console.log(newValue);

  if (stringValue.length < count) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }

  return newValue;
}

function getNewTimestamp() {
  const now = new Date();
  let result = '';

  result += leftPad(now.getDate());
  result += '/';
  result += leftPad(now.getMonth() + 1); //soma-se um porque o retorno é entre 0 e 11
  result += '/';
  result += now.getFullYear();
  result += ' ';
  result += leftPad(now.getHours());
  result += ':';
  result += leftPad(now.getMinutes());
  result += ':';
  result += leftPad(now.getSeconds());
  result += '.';
  result += leftPad(now.getMilliseconds(), 3);

  return result;
}

export { getNewTimestamp };
