const stringLength = require("./stringLength");

test("returns the correct number", () => {
  expect(stringLength("Hello")).toBe(5);
  expect(stringLength("world!")).toBe(6);
});

test("throws an error if the string is less than 1 and greater than 10", () => {
  expect(() => {
    stringLength("this string is long");
  }).toThrowError("String can not be smaller than 1 and longer than 10");

  expect(() => {
    stringLength("Hello World!");
  }).toThrowError("String can not be smaller than 1 and longer than 10");
});
