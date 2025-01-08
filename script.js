console.log("JS успешно подключен!");

// Получение элементов из DOM
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const historyList = document.getElementById("history-list");
const clearHistoryButton = document.querySelector(".clear-history");
const percentButton = document.getElementById("percent");


// Функция для калькуляции
function calculate(operation) {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // Проверка корректности ввода
  if (isNaN(num1)) {
    alert("Первое значение введено не корректно");
    return 0;
  }
  else if (isNaN(num2)) {
    alert("Второе значение введено не корректно");
    return 0;
  }

  let result;
  let operationSymbol;

  switch (operation) {
    case "+":
      result = num1 + num2;
      operationSymbol = "+";
      break;
    case "-":
      result = num1 - num2;
      operationSymbol = "−";
      break;
    case "*":
      result = num1 * num2;
      operationSymbol = "×";
      break;
    case "/":
      if (num2 === 0) {
        alert("Деление на ноль невозможно.");
        return 0;
      }
      result = num1 / num2;
      operationSymbol = "÷";
      break;
    case "%": /*Для бонусного задания*/
        result = num1 * num2 / 100;
        operationSymbol = "%";
        break;
    default:
      alert("Неизвестная операция.");
      return;
  }

  // Добавляем результат в историю
  addHistoryItem(num1, operationSymbol, num2, result);
}

// Функция для добавления записи в историю
function addHistoryItem(num1, operation, num2, result) {
    const historyItem = document.createElement("li");
    historyItem.textContent = `${num1} ${operation} ${num2} = ${result}`;
    historyList.append(historyItem);
  }  

// Функция для очистки истории
function clearHistory() {
  historyList.innerHTML = "";
}

// Обработчики событии
addButton.addEventListener("click", () => calculate("+"));
subtractButton.addEventListener("click", () => calculate("-"));
multiplyButton.addEventListener("click", () => calculate("*"));
divideButton.addEventListener("click", () => calculate("/"));
percentButton.addEventListener("click", () => calculate("%"));
clearHistoryButton.addEventListener("click", () => clearHistory());