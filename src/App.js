import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import page components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Logout from "./pages/Logout";
import Button from "./components/Button";
import Navigation from "./components/Navigation";

// wrapped <Router> around <div>
// created link tags for buttonswith path and name of each page (Home, Dashboard, Search, Logout)
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <Button varName="I am a button"></Button>
        <Button varName="Button #2"></Button>
      </div>
    </BrowserRouter>
  );
}

export default App;
