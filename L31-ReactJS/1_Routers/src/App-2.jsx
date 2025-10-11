import React from "react";
import { Routes, Route, Link, NavLink } from "react-router";
import Contact from "./Contact";
import Home from "./Home";

const App = () => {
  return (
    <div>
      {/* <Link className="navlink" to="/home">
        Home
      </Link>
      <Link className="navlink" to="/contact">
        Contact
      </Link> */}

      <NavLink className="navlink" to="/home">
        Home
      </NavLink>
      <NavLink className="navlink" to="/contact">
        Contact
      </NavLink>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
