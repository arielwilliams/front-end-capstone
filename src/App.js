import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState} from "react";

// import page components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Logout from "./pages/Logout";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";


// wrapped <Router> around <div>
// created link tags for buttonswith path and name of each page (Home, Dashboard, Search, Logout)
function App() {
  const [user, setUser] = useState({});

  const userCallback = (userInfo) => {
    setUser(userInfo);
  };


  return (
    <div>
      <BrowserRouter>
        <Login userCallback={userCallback} />
        <div className="App py-4">
          <header className="App-header">
            <Navigation user={user} />
          </header>
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard user={user}/>} />
              <Route path="/search" element={<Search />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
