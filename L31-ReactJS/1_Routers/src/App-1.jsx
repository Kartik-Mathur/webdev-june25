import React, { useState } from "react";
import Home from "./Home";
import Contact from "./Contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  function homeHandler() {
    setCurrentPage("home");
    window.location = "/home";
  }

  function contactHandler() {
    setCurrentPage("contact");
    window.location = "/contact";
  }
  return (
    <div>
      <a onClick={() => setCurrentPage("home")} href="/home">
        Home
      </a>
      <a onClick={() => setCurrentPage("contact")} href="/contact">
        Contact
      </a>

      <div onClick={homeHandler}>Home</div>
      <div onClick={contactHandler}>Contact</div>

      {currentPage == "home" ? <Home /> : <Contact />}
    </div>
  );
};

export default App;
