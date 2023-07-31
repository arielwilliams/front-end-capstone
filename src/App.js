import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

// import page components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Logout from "./pages/Logout";
import Button from "./components/Button";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";

// wrapped <Router> around <div>
// created link tags for buttonswith path and name of each page (Home, Dashboard, Search, Logout)
function App() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }


  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "865937179776-r5timpp1f57epgi3q06blrv8ftvu5qev.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )
  }, []);

  // if we have no user: sign in button
  // if we have a user: show the log out button

  return (
    <BrowserRouter>
      <div className="App">
        <div id="signInDiv"></div>
        { Object.keys(user).length != 0 &&
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        }
    
        { user && 
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
        </div>
        }
          <Navigation />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/logout" element={<Logout />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </main>
        <Button varName="I am a button"></Button>
        <Button varName="Button #2"></Button>
      </div>
    </BrowserRouter>
  );
}

export default App;
