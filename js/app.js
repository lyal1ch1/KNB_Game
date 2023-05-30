const images = ["img/paper.svg", "img/scissors.svg", "img/stone.svg"];
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
