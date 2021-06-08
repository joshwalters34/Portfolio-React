import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Link className="navbar-brand" to="/">
        Home
      </Link> */}
       <div> Josh Walters </div>
      <div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <Link
              to="/AboutMe"
              className={
                window.location.pathname === "/" || window.location.pathname === "/AboutMe"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link> */}
          {/* </li>  */}
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/AboutMe"
              className={window.location.pathname === "/AboutMe" ? "nav-link active" : "nav-link"}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Projects"
              className={window.location.pathname === "/Projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ContactMe"
              className={window.location.pathname === "/ContactMe" ? "nav-link active" : "nav-link"}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
     
    </nav>
  );
}

export default Navbar;
