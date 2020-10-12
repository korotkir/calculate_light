document.addEventListener('DOMContentLoaded', () => {

	const num1 = document.querySelector('#num1')
	const num2 = document.querySelector('#num2')
	const btnPlus = document.querySelector('#btnPlus')
	const btnMinus = document.querySelector('#btnMinus')
	const btnMult = document.querySelector('#btnMult')
	const btnSplit = document.querySelector('#btnSplit')
	const btnRel = document.querySelector('#btnRel')
	const output = document.querySelector('#output')
	document.querySelector('#num1').value = ''
	document.querySelector('#num2').value = ''

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
	
	function toReload() {
		return (document.querySelector('#num1').value = '')
		return (document.querySelector('#num2').value = '')
	}


	btnPlus.addEventListener('click', toSum)
	btnMinus.addEventListener('click', toSub)
	btnMult.addEventListener('click', toMult)
	btnSplit.addEventListener('click', toSplit)
	btnRel.addEventListener('click', toReload)


})





