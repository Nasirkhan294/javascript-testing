const {stringLength, reverseString, calculator, capitalize} = require('./index.js')

test('HelloWorld', () => {
	expect(stringLength('HelloWorld')).toBe(10)
});

test('validate strings length', () => {
	expect(() => stringLength('')).toThrow('String must be at least 1 character long');
	expect(() => stringLength('12345678901')).toThrow('String cannot be longer than 10 characters');
	expect(stringLength('a')).toBe(1);
});


test('reverse apple to elppa', () => {
	expect(reverseString('apple')).toBe('elppa');
})

describe("add", () => {
	test("adds two positive numbers", () => {
		expect(calculator.add(2, 3)).toBe(5);
	});

	test("adds a positive and a negative number", () => {
		expect(calculator.add(-2, 3)).toBe(1);
	});

	test("adds two negative numbers", () => {
		expect(calculator.add(-2, -3)).toBe(-5);
	});
});

describe("subtract", () => {
	test("subtracts two positive numbers", () => {
		expect(calculator.subtract(5, 3)).toBe(2);
	});

	test("subtracts a positive and a negative number", () => {
		expect(calculator.subtract(2, -3)).toBe(5);
	});

	test("subtracts two negative numbers", () => {
		expect(calculator.subtract(-2, -3)).toBe(1);
	});
});

describe("multiply", () => {
	test("multiplies two positive numbers", () => {
		expect(calculator.multiply(2, 3)).toBe(6);
	});

	test("multiplies a positive and a negative number", () => {
		expect(calculator.multiply(-2, 3)).toBe(-6);
	});

	test("multiplies two negative numbers", () => {
		expect(calculator.multiply(-2, -3)).toBe(6);
	});
});

describe("divide", () => {
	test("divides two positive numbers", () => {
		expect(calculator.divide(6, 3)).toBe(2);
	});

	test("divides a positive and a negative number", () => {
		expect(calculator.divide(-6, 3)).toBe(-2);
	});

	test("throws an error when dividing by zero", () => {
		expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
	});
});


test('Capitalizes the first letter of a string', () => {
	expect(capitalize('hello')).toBe('Hello');
})