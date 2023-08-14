// 1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function odd(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
}

const oddPstn = odd(array);

console.log(oddPstn);

function largest(arr) {
  let large = 0;
  for (let i = 0; i < arr.length; i++) {}
}

// 2
let larger = Math.max(...array);
console.log(larger);

// 3
const percent = 5 / 100;
const years = 9;
const salary = 5000;
let netBonus = 0;

if (years > 5) {
  netBonus = salary * percent;
}
console.log(netBonus);

// 4
const discount = 10 / 100;
const quantity = 100;
let newPrice = 0;

if (quantity > 1000) {
  newPrice = quantity - quantity * discount;
}
console.log(newPrice);

// 5
const attendance = false;
const numOfClasses = 0;
const numOfClassesAttended = 0;

if ((numOfClassesAttended / numOfClasses) * 100 > 75) {
  !attendance;
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

// oop
function isGameOver() {
  // game over logic goes here!

  if (gameOver) {
    DOMStuff.gameOver(this.winner);
  }
}
