import React from "react";
import { NavLink } from "react-router-dom";
const header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/achievements">
          Achievement
        </NavLink>
      </div>
    </nav>
  );
};

export default header;
