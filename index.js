const stringLength = (string) => {
	const length = string.length;
	if (length < 1) {
		throw new Error('String must be at least 1 character long');
	} else if (length > 10) {
		throw new Error('String cannot be longer than 10 characters');
	}
	return length;
}


const reverseString = (string) => {
	return string.split('').reverse().join('');
}

class Calculator  {
	add = (a, b) => {
		return a + b;
	}
	subtract = (a, b) => {
		return a - b;
	}
	multiply = (a, b) => {
		return a * b;
	}
	divide = (a, b) => {
		if(b === 0) {
			throw new Error('Cannot divide by zero');
		}

		return a / b;
	}
}

const calculator = new Calculator;

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {stringLength, reverseString, calculator, capitalize};
