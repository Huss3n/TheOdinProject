// objects
const myObject = {
  property: "value",
  value: 1,
  myFn: function () {},
  more: "needed",
};

// accessing the items in the object
// dot notation
const value = myObject.value; // value

// bracket notation
const property = myObject["value"];
console.log(property);

const more = myObject["more"];
console.log(more);

// object constructor,
const playerOne = "hussein";
const playerOneamrker = "X";

const playerTwo = "muktar";
const playerTwoMarker = "O";

// the above can be used in objects easily like this
const playerOneObject = {
  name: "hussein",
  marker: "X",
};

const player = {
  name: "muktar",
  marker: "O",
};

// function printName(player) {
//   console.log(player.name);
// }
// printName();
function newPlayer(name, marker) {
  (this.name = name), (this.marker = marker);
}

const player1 = new newPlayer("hussein", "10");
console.log(player1.name);

// to re use the code below
// const playerOneObject = {
//     name: "hussein",
//     marker: "X",
//   };

//   const player = {
//     name: "muktar",
//     marker: "O",
//   };

function Game(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

// now to re use the code
const ply1 = new Game("hussein", "X");
const ply2 = new Game("muktar", "O");
console.log(ply2.sayName);

// exrcise

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = function () {
      return `${title} by ${author}, ${pages} pages ${
        read ? "read" : "not read"
      }`;
    });
}

const book1 = new Book("The Hobit", "J.R.R", 295, false);
const fn = book1.info();
console.log(fn);

//  prototypal inheritance
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const plyer1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

// player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

// player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'

// creating objects in js  => all objects have a prototype[[protoype]] -> internal property
const x = {};

//          or
const X = new Object();

// getting the prototype
console.log(Object.getPrototypeOf(x));
const myData = getData(); // if this is refactored to return a Promise...

myData.then(function (data) {
  // .then() tells it to wait until the promise is resolved
  const pieceOfData = data["whatever"]; // and THEN run the function inside
});

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// Don't do this!
// Use Object.setPrototypeOf(Player.prototype, Person.prototype)
Player.prototype = Person.prototype;

function Enemy(name) {
  this.name = name;
  this.marker = "^";
}

// Not again!
// Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
Enemy.prototype = Person.prototype;

Enemy.prototype.sayName = function () {
  console.log("HAHAHAHAHAHA");
};

const carl = new Player("carl", "X");
carl.sayName();

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
