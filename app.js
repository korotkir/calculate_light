document.addEventListener('DOMContentLoaded', () => {

	const num1 = document.querySelector('#num1')
	const num2 = document.querySelector('#num2')
	const BtnPlus = document.querySelector('#BtnPlus')
	const BtnMinus = document.querySelector('#BtnMinus')
	const BtnMult = document.querySelector('#BtnMult')
	const BtnSplit = document.querySelector('#BtnSplit')
	const output = document.querySelector('#output')

	function toInt() {
		value1 = Number(num1.value)
		value2 = Number(num2.value)
		return [value1, value2]
	}

	function toSum() {
		const values = toInt()
		const sum = values[0] + values[1]
		output.innerHTML = `Ваш результат: <b>${sum}</b>`
	}

	function toSub() {
		const values = toInt()
		const sub = values[0] - values[1]
		output.innerHTML = `Ваш результат: <b>${sub}</b>`
	}

	function toMult() {
		const values = toInt()
		const mult = values[0] * values[1]
		output.innerHTML = `Ваш результат: <b>${mult}</b>`
	}

	function toSplit() {
		const values = toInt()
		const split = values[0] / values[1]
		output.innerHTML = `Ваш результат: <b>${split}</b>`
	}

	BtnPlus.addEventListener('click', toSum)
	BtnMinus.addEventListener('click', toSub)
	BtnMult.addEventListener('click', toMult)
	BtnSplit.addEventListener('click', toSplit)


})





