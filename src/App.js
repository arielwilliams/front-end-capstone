import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// import page components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Logout from "./pages/Logout";
import Button from "./components/Button";

// wrapped <Router> around <div>
// created link tags for buttonswith path and name of each page (Home, Dashboard, Search, Logout)
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <Button varName="I am a button"></Button>
        <Button varName="Button #2"></Button>
      </div>
    </Router>
  );
}

export default App;
