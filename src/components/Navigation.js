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
