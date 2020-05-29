import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import GoogleAuth from "./top-nav/GoogleAuth";
import LogOut from "./top-nav/LogOut";

const TopNav = () => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

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
              <LogOut />
            </li>
            { isSignedIn
              ?  (
                <li className="nav-item">
                  <LogOut />
                </li>
              ) : (
                <li className="nav-item">
                  <Link to='/sign-in' className='btn btn-primary'>
                    Sign In
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
