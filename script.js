const calculatorScreen = document.getElementById('calculator-screen')
const buttons = document.querySelectorAll('.button')
const clearButton = document.getElementById('clear')
const equalSignButton = document.getElementById('equal-sign')

let currentInput = ''
let previousInput = ''
let operator = ''

buttons.forEach(button => {
	button.addEventListener('click', () => {
		if (button.classList.contains('operator')) {
			operator = button.value
			previousInput = currentInput
			currentInput = ''
		} else {
			currentInput += button.value
		}
		calculatorScreen.value = currentInput
	})
})

equalSignButton.addEventListener('click', () => {
	if (previousInput && currentInput && operator) {
		currentInput = eval(previousInput + operator + currentInput).toString()
		calculatorScreen.value = currentInput
		operator = ''
		previousInput = ''
	}
})

clearButton.addEventListener('click', () => {
	currentInput = ''
	previousInput = ''
	operator = ''
	calculatorScreen.value = ''
})
