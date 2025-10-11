import React from "react";
import { NavLink, Routes, Route } from "react-router";
import Teams from "./Teams";
import Contact from "./Contact";
import Acads from "./Acads";
import Management from "./Management";
import Operations from "./Operations";
import AllRoutes from "./AllRoutes";
import MyRoutes from "./MyRoutes";

const App = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink className="navlink" to="/teams">
          Teams
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contacts
        </NavLink>
      </div>

      <MyRoutes />
      {/* <Routes>
        <Route path="/teams" element={<Teams />}>
          <Route path="acads" element={<Acads />} />
          <Route path="management" element={<Management />} />
          <Route path="operations" element={<Operations />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/acads" element={<Acads />} />
      </Routes> */}
    </div>
  );
};

export default App;
