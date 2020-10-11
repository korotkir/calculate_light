// Добавляем событие, которое выполняеться после полной загрузки страницы
document.addEventListener('DOMContentLoaded', () => {

    // 1.Преобразование DOM-элеменов в переменные
    const numOne = document.querySelector('#numOne')
    const numTwo = document.querySelector('#numTwo')
    const BtnPlus = document.querySelector('#BtnPlus')
    const BtnMinus = document.querySelector('#BtnMinus')
    const output = document.querySelector('#output')

    // 2. Функция преобразования введенных данных из строки в число
    function toInt() {
        value1 = +numOne.value
        value2 = +numTwo.value
        return [value1, value2]
    }
    // 3. Функция обработчик сложения
    function toSum() {
        values = toInt()
        result = values[0] + values[1]
        output.textContent = `Результат: ${result}`
    }
    // 4. Функция обработчик вычитания
    function toSub() {
        values = toInt()
        result = values[0] - values[1]
        output.textContent = `Результат: ${result}`
    }
   
    // 6. Назначение кнопок + и -
    BtnPlus.addEventListener('click', toSum)
    BtnMinus.addEventListener('click', toSub)


})