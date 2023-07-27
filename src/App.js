import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button varName="I am a button"></Button>
        <Button varName="Button #2"></Button>
      </header>
    </div>
  );
}

export default App;
