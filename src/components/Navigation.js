import React from "react";
import { Link } from "react-router-dom";


const Navigation = (props) => {
  if (Object.keys(props.user).length > 0) {
    return (
      <>
        <nav className="flex justify-between bg-blue-500 p-4">
          <Link
            to="/home"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Dashboard
          </Link>
          <Link
            to="/search"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Search
          </Link>
          <Link
            to="/logout"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Logout
          </Link>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="flex justify-between bg-blue-500 p-4">
          <Link
            to="/home"
            className="text-white hover:bg-blue-700 px-4 py-2 rounded"
          >
            Home
          </Link>
        </nav>
      </>
    );
  }
  
};

export default Navigation;
