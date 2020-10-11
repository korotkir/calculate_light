"use strict";

// Добавляем событие, которое выполняеться после полной загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
  // 1.Преобразование DOM-элеменов в переменные
  var numOne = document.querySelector('#numOne');
  var numTwo = document.querySelector('#numTwo');
  var BtnPlus = document.querySelector('#BtnPlus');
  var BtnMinus = document.querySelector('#BtnMinus');
  var output = document.querySelector('#output'); // 2. Функция преобразования введенных данных из строки в число

  function toInt() {
    value1 = +numOne.value;
    value2 = +numTwo.value;
    return [value1, value2];
  } // 3. Функция обработчик сложения


  function toSum() {
    values = toInt();
    result = values[0] + values[1];
    output.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result);
  } // 4. Функция обработчик вычитания


  function toSub() {
    values = toInt();
    result = values[0] - values[1];
    output.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result);
  } // 6. Назначение кнопок + и -


  BtnPlus.addEventListener('click', toSum);
  BtnMinus.addEventListener('click', toSub);
});