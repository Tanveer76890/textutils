import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand bold" to="/">
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
                <NavLink
                  className="nav-link  active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
                  {props.contactText}
                </NavLink>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>

            {/* custom theme color code here
            <div className="d-flex">
            <div
            onClick={() => {
              props.toggleMode("warning");
            }}
            className="rounded bg-warning mx-2  "
            style={{ width: "27px", height: "27px", cursor: "pointer" }}
          ></div>

           
              <div
                onClick={() => {
                  props.toggleMode("primary");
                }}
                className="rounded bg-primary mx-2 hover-div  "
                style={{ width: "27px", height: "27px", cursor: "pointer" }}
              ></div>
              <div
                onClick={() => {
                  props.toggleMode("danger");
                }}
                className="rounded bg-danger mx-2  "
                style={{ width: "27px", height: "27px", cursor: "pointer" }}
              ></div>
              <div
                onClick={() => {
                  props.toggleMode("success");
                }}
                className="rounded bg-success mx-2  "
                style={{ width: "27px", height: "27px", cursor: "pointer" }}
              ></div>
              
              <div
                onClick={() => {
                  props.toggleMode("dark");
                }}
                className="rounded bg-dark mx-2  "
                style={{ width: "27px", height: "27px", cursor: "pointer",
              border: props.mode === 'dark' ? '1px solid gray' : '1px solid black' }}
              ></div>
              <div
                onClick={() => {
                  props.toggleMode("light");
                }}
                className="rounded bg-light mx-2 hover-light  "
                style={{ width: "27px", height: "27px", cursor: "pointer", border:"1px solid wheat" }}
              ></div>
             
            </div>
            */}

            <div className={`form-check form-switch mx-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                title="Enable Dark Mode"
                onClick={() => props.toggleMode(null)}
              />
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  contactText: PropTypes.string,
};

// default props set
Navbar.defaultProps = {
  title: "Website-Title",
  contactText: "Contact Us",
};

export default Navbar;
