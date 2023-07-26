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

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobileScreen = useMediaQuery("(max-width: 768px)"); // Add the media query for mobile screen size
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-green-700 py-5 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-white font-bold text-2xl"
        >
          <img
            src={Logo}
            alt=""
            className="px-2 py-2 rounded-full w-16 h-16 mr-2 md:w-6 md:h-6"
          />
          <span className="text-base">Al Baqarah Farm </span>
        </Link>

        {/* Navbar Links Desktop */}
        <div className="hidden md:flex space-x-12">
          <Link
            to="/"
            className="text-white hover:text-green-200 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-green-200 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-green-200 transition duration-300 ease-in-out"
          >
            Services
          </Link>
          <Link
            to="/testimonials"
            className="text-white hover:text-green-200 transition duration-300 ease-in-out"
          >
            Testimonials
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-green-200 transition duration-300 ease-in-out"
          >
            Gallery
          </Link>
        </div>
        {/* Mobile Menu Links */}
        {isMobileMenuOpen && isMobileScreen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-green-500">
            {/* Add your mobile menu links here */}
            <Link
              to="/"
              className="block text-white px-4 py-2 hover:bg-green-200 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white px-4 py-2 hover:bg-green-200 transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-white  px-4 py-2 hover:text-green-200 transition duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/testimonials"
              className="block text-white  px-4 py-2 hover:text-green-200 transition duration-300 ease-in-out"
            >
              Testimonials
            </Link>
            <Link
              to="/gallery"
              className="block text-white  px-4 py-2 hover:text-green-200 transition duration-300 ease-in-out"
            >
              Gallery
            </Link>
          </div>
        )}

        {/* Contact Button */}
        <button
          className="bg-green-100 text-green-500 hover:bg-green-200 font-semibold px-4 py-2 rounded-lg shadow"
          onClick={() => {
            // Handle contact button click here
          }}
        >
          Contact
        </button>
        {/* Mobile Menu Icon (Hamburger) */}
        {isMobileScreen && ( // Conditionally render the hamburger icon when on mobile screen
          <div className="md:hidden px-2">
            <BiMenuAltRight
              className="text-white text-2xl focus:outline-none"
              onClick={toggleMobileMenu}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
