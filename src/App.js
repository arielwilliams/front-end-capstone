import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// import page components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import List from "./components/List";

// wrapped <Router> around <div>
// created link tags for buttonswith path and name of each page (Home, Dashboard, Search, Logout)
function App() {
  const [user, setUser] = useState({});
  const [listData, setListData] = useState([]);

  const userCallback = (userInfo) => {
    setUser(userInfo);
  };

  useEffect(() => {
    const fetchListData = async () => {
      try {
        const response = await fetch(`https://jakd-backend-capstone.onrender.com/dashboard`);
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const data = await response.json();
        setListData(data);
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchListData();
  }, []);


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
              <Route path="/dashboard" element={<Dashboard user={user} lists={listData}/>} />
              <Route path="/list/:listId" element={<List />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
