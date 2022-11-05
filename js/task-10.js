function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputValue: document.querySelector("#controls>input"),
  buttonCreate: document.querySelector(`button[data-create]`),
  buttonDestroy: document.querySelector(`button[data-destroy]`),
  boxes: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const onButtonCreateClick = () => {
  let boxesToAdd = createBoxes(refs.inputValue.value);

  refs.boxes.append(...boxesToAdd);
};
refs.buttonCreate.addEventListener("click", onButtonCreateClick);

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
};
const onButtonDestroyClick = () => {
  destroyBoxes.call();
};
refs.buttonDestroy.addEventListener("click", onButtonDestroyClick);

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
