import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">YourLogo</div>
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              {/* <a
                href="https://www.w3schools.com/react/react_getstarted.asp "
                className="block text-white py-2 md:py-0 md:px-2 hover:text-gray-400"
              >
                Home
              </a> */}
              <Link
                to={"/"}
                className="block text-white py-2 md:py-0 md:px-2 hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li></li>
            <li>
            <Link
                to={"/product"}
                className="block text-white py-2 md:py-0 md:px-2 hover:text-gray-400"
              >
                Product
              </Link>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/react/react_getstarted.asp"
                className="block text-white py-2 md:py-0 md:px-2 hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
