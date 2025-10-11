import React from "react";
import { NavLink, Routes, Route } from "react-router";
import Teams from "./Teams";
import Acads from "./Acads";
import Management from "./Management";
import Operations from "./Operations";
import Contact from "./Contact";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/teams" element={<Teams />}>
          <Route path="acads" element={<Acads />} />
          <Route path="management" element={<Management />} />
          <Route path="operations" element={<Operations />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/acads" element={<Acads />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
