import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from "./header/GoogleAuth";
import TokenInfo from "./header/TokenInfo";
import ItemSearch from "./header/ItemSearch";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md  navbar-dark bg-dark shadow-sm">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#topLeft"
        aria-controls="topLeft"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <div className="collapse navbar-collapse" id="topLeft">
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
            <li className="nav-item mr-1">
              <GoogleAuth />
            </li>
            <li className="nav-item mr-1">
              <TokenInfo />
            </li>
          </ul>
          <ItemSearch />
        </div>
      </div>
    </nav>
  );
};

export default Header;
