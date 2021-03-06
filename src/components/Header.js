import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import TokenInfo from "./user/TokenInfo";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark shadow-sm">
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/achievements">
                Daily
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <GoogleAuth />
            </li>
            <li className="nav-item">
              <TokenInfo />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
