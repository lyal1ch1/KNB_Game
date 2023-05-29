const images = ["../img/paper.svg", "../img/scissors.svg", "../img/stone.svg"];
const time = 20;
function myFunc() {
  for (let i = 0; i < 10; i++) {}
}
let count = 0;
function changeImages() {
  if (count === 30) {
    return randomImage;
  }
  const randNumber = Math.floor(Math.random() * images.length);
  const randomImage = images[randNumber];
  document.test.src = randomImage;
  count++;
  setTimeout(changeImages, time);
}

function resetCount() {
  count = 0;
}
function setStone() {
  document.userSelect.src = images[2];
}
function setScissiors() {
  document.userSelect.src = images[1];
}
function setPaper() {
  document.userSelect.src = images[0];
}

// function animationChangeImages() {

// }

// .....
// Задаем функцию, которую нужно выполнить
// function myFunction() {
//   console.log("Функция выполнена");
// }

// Задаем время задержки в миллисекундах
// const times = 5000; // 5000 миллисекунд = 5 секунд

// // Вызываем функцию через заданное время и сохраняем ID таймера в переменную
// const timerId = setTimeout(changeImages, times);

// // Останавливаем выполнение функции через 3 секунды
// setTimeout(
//         function () {
//             clearTimeout(timerId);
//             console.log("Функция остановлена");
//         }, 7000);
