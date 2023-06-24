const stringLength = (string) => {
  const length = string.length;

  if (length >= 1 && length <= 10) {
    return length;
  } else {
    throw new Error("String can not be smaller than 1 and longer than 10");
  }
};

module.exports = stringLength;
