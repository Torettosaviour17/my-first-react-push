import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.w3schools.com/react/react_getstarted.asp")
              }
              className="hover:text-gray-400 bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.w3schools.com/react/react_getstarted.asp")
              }
              className="hover:text-gray-400 bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.w3schools.com/react/react_getstarted.asp")
              }
              className="hover:text-gray-400 bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
