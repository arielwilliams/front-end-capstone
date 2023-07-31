// initial code in Navigation.js
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

// some tailwind css implementation
// import React from "react";
// import { Link } from "react-router-dom";

// const Navigation = () => {
//   return (
//     <nav className="flex justify-between bg-blue-500 p-4">
//       <Link
//         to="/home"
//         className="text-white hover:bg-blue-700 px-4 py-2 rounded"
//       >
//         Home
//       </Link>
//       <Link
//         to="/dashboard"
//         className="text-white hover:bg-blue-700 px-4 py-2 rounded"
//       >
//         Dashboard
//       </Link>
//       <Link
//         to="/search"
//         className="text-white hover:bg-blue-700 px-4 py-2 rounded"
//       >
//         Search
//       </Link>
//       <Link
//         to="/logout"
//         className="text-white hover:bg-blue-700 px-4 py-2 rounded"
//       >
//         Logout
//       </Link>
//     </nav>
//   );
// };

// export default Navigation;
