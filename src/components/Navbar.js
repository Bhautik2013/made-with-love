import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.colorMode==null?props.mode:(props.colorMode.bgClass==='darkblue'?"primary":"warning")}`}
      data-bs-theme={props.colorMode==null?props.mode:(props.colorMode.bgClass==='darkblue'?"bg-primary":"bg-warning")}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <div className="d-flex flex-row">
            <button type="button" className="dark-blue-box" onClick={props.changeColorMode('darkblue','blue','white')}></button>
            <button type="button" className="gray-box mx-2" onClick={props.changeColorMode('blue','darkgray','black')}></button>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="toggleDarkMode"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="toggleDarkMode">
              Enable {props.mode === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.bool,
};

Navbar.defaultProps = {
  title: "TextUtils",
};
