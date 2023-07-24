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

const playerTwoObject = {
  name: "muktar",
  marker: "O",
};
