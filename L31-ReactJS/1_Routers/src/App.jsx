import React from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router";
import Contact from "./Contact";
import Home from "./Home";

const App = () => {
  const navigate = useNavigate();
  function navigateHomeHandler(){
    navigate('/home');
  }

  function navigateContactHandler(){
    navigate('/contact');
  }

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <button onClick={navigateHomeHandler}>Home</button>
      <button onClick={navigateContactHandler}>Contact</button>
    </div>
  );
};

export default App;
