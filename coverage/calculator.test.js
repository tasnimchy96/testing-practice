const Calculator = require("./calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    test("adds two positive numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("adds a positive number and zero correctly", () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test("adds a positive number and a negative number correctly", () => {
      expect(calculator.add(5, -3)).toBe(2);
    });
  });

  describe("subtract", () => {
    test("subtracts two positive numbers correctly", () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test("subtracts a positive number and zero correctly", () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test("subtracts a negative number from a positive number correctly", () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });
  });

  describe("divide", () => {
    test("divides two positive numbers correctly", () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test("throws an error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrowError(
        "Cannot divide by zero"
      );
    });

    test("divides a negative number by a positive number correctly", () => {
      expect(calculator.divide(-12, 3)).toBe(-4);
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers correctly", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("multiplies a positive number by zero correctly", () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test("multiplies a negative number by a positive number correctly", () => {
      expect(calculator.multiply(-5, 3)).toBe(-15);
    });
  });
});
