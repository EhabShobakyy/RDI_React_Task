import React from "react";
// Routing init
import { NavLink } from "react-router-dom";
// Style
import "./navBar.css";
import { useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); // Toggle NavBar
  const Close = () => setClick(false); // Close Icon

  return (
    <div className="main-nav">
      <div className="container-lg">
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container col-12">
            {/*  Navigation Logo */}
            <div className="extra-logo col-2">
              <NavLink className="nav-link" to="/">
                <img
                  src={`https://rdi-eg.ai/wp-content/uploads/2020/10/logo-white-e1604579113422.png`}
                  alt="Extra Logo"
                />
              </NavLink>
            </div>
            {/* Navigation Page List */}
            <ul
              className={click ? "nav-menu active col-10" : "nav-menu col-10"}
            >
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? "bi bi-x-circle" : "bi bi-list"}></i>
              </div>
              <li className="nav-item">
                <NavLink
                  to={{ pathname: "/" }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/AboutPage",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to={{
                    pathname: "/NatiqPage",
                  }}
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Natiq
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "" : "bi bi-list"}></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
