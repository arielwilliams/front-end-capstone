import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const loggedIn = Object.keys(props.user).length > 0;

  if (loggedIn) {
    return (
      <>
        <nav className="flex justify-between bg-emerald-900 p-4">
          <Link
            to="/home"
            className="text-white hover:bg-emerald-700 px-4 py-2 rounded font-black text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-emerald-700 px-4 py-2 rounded font-black text-lg"
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="text-white hover:bg-emerald-700 px-4 py-2 rounded font-black text-lg"
          >
            Dashboard
          </Link>
          <Link
            to="/search"
            className="text-white hover:bg-emerald-700 px-4 py-2 rounded font-black text-lg"
          >
            Search
          </Link>
        </nav>
      </>
    );
  } else {
    return (
      <nav className="flex justify-between bg-emerald-900 p-4">
        <div className="flex">
          <Link
            to="/home"
            className="text-white hover:bg-emerald-700 px-4 py-2 rounded font-black text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-emerald-700 px-4 py-2 rounded font-black text-lg"
          >
            About
          </Link>
        </div>
      </nav>
    );
  }
};

export default Navigation;
