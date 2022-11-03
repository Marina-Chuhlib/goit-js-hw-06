const decrementBtn = document.querySelector(`[data-action="decrement"]`);

const incrementBtn = document.querySelector(`[data-action="increment"]`);

const valueRef = document.querySelector("#value");

let counterValue = 0;

const render = () => {
  valueRef.textContent = counterValue;
};

const handleClickDecrement = () => {
  counterValue -= 1;

  valueRef.textContent = counterValue;
  render();
};

const handleClickIncremen = () => {
  counterValue += 1;

  valueRef.textContent = counterValue;
  render();
};

decrementBtn.addEventListener("click", handleClickDecrement);

incrementBtn.addEventListener("click", handleClickIncremen);

render();

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
