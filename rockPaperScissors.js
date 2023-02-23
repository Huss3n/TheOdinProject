// rock paper scrissors project

const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");

const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) => button.addEventListener("click", () => ({
  player = button.textContent
  computerTurn()
})));

function   computerTurn(){
  const randomNum = Math.floor(Math.random() * 3) + 1

  switch(randomNum){
    case 1:
      computer = 'Rock'
      break
    case 2:
      computer = 'Paper'
      break
    case 3:
      computer = 'Scissors'
      break
  }
}