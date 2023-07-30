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

// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Logo from "../assets/logo.jpeg";
import { BiMenuAltRight } from "react-icons/bi";
import { useMediaQuery } from "@react-hook/media-query"; // Import the useMediaQuery hook
