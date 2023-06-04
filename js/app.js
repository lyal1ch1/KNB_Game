"use strict";

// const images = ["img/stone.svg", "img/scissors1.svg", "img/paper.svg"];
const images = [
  "img/hands/hand-rock.svg",
  "img/hands/hand-scissors.svg",
  "img/hands/hand-svgrepo.svg",
];

const time = 50;
let compSelect = 0;
let userSelect = 0;
let count = 0;
const userScoreHeading = document.getElementById("scoreUser");
const compScoreHeading = document.getElementById("scoreComp");
const button = document.getElementsByClassName("button");
console.log(button);
let userScore = 0;
let compScore = 0;

function changeImages() {
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = true;
  }
  let randNumber = Math.floor(Math.random() * images.length);
  let randomImage = images[randNumber];
  if (count === 30) {
    count = 0;
    return compSelect;
  }
  document.test.src = randomImage;
  compSelect = randNumber;
  count++;
  setTimeout(changeImages, time);
}

function setStone() {
  userSelect = 0;
  document.userSelect.src = images[0];
}
function setScissiors() {
  userSelect = 1;
  document.userSelect.src = images[1];
}
function setPaper() {
  userSelect = 2;
  document.userSelect.src = images[2];
}
function getScoreCount() {
  // Выбор камня
  if (userSelect === 0 && compSelect === 0) {
    console.log("ничья");
  }
  if (userSelect === 0 && compSelect === 1) {
    console.log("победа");
    userScore++;
    userScoreHeading.textContent = userScore;
  }
  if (userSelect === 0 && compSelect === 2) {
    compScore++;
    console.log("проиграл(");
    compScoreHeading.textContent = compScore;
  }
  // Выбор ножниц
  if (userSelect === 1 && compSelect === 0) {
    compScore++;
    console.log("проиграл");
    compScoreHeading.textContent = compScore;
  }
  if (userSelect === 1 && compSelect === 1) {
    console.log("ничья");
  }
  if (userSelect === 1 && compSelect === 2) {
    userScore++;
    console.log("выиграл");
    userScoreHeading.textContent = userScore;
  }
  // Выбор бумаги
  if (userSelect === 2 && compSelect === 0) {
    userScore++;
    console.log("победа");
    userScoreHeading.textContent = userScore;
  }
  if (userSelect === 2 && compSelect === 1) {
    compScore++;
    console.log("проиграл");
    compScoreHeading.textContent = compScore;
  }
  if (userSelect === 2 && compSelect === 2) {
    console.log("ничья");
  }
  for (let i = 0; i < button.length; i++) {
    button[i].disabled = false;
  }
}

function resetScore() {
  compScore = 0;
  userScore = 0;
  compScoreHeading.textContent = compScore;
  userScoreHeading.textContent = userScore;

  document.userSelect.src = "img/question.svg";
  document.test.src = "img/question.svg";
}
