const reverseString = (string) => {
  const input = [];
  for (let i = string.length - 1; i >= 0; i--) {
    input.push(string[i]);
  }
  return input.join("");
};

module.exports = reverseString;
