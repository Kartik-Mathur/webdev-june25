import React from "react";
import { NavLink, Outlet } from "react-router";

const Teams = () => {
  return (
    <div>
      Welcome to Teams page!!
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NavLink to="acads" className="navlink">
          Acads
        </NavLink>

        <NavLink to="management" className="navlink">
          Management
        </NavLink>
        <NavLink to="operations" className="navlink">
          Operations
        </NavLink>
         <NavLink to="/acads" className="navlink">
          Main Acads
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Teams;
