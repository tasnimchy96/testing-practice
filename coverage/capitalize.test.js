const capitalize = require("./capitalize");

test("capitalize the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("throws an error if input is not a string", () => {
  expect(() => capitalize(123)).toThrowError("Input should be a string");
});
