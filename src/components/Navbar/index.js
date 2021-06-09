import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="container bg-primary text-white">
  <div className="row justify-content-center">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="col-6">
    <div>
        <ul className="navbar-nav">
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
          {/* <li className="nav-item">
            <Link
              to="/ContactMe"
              className={window.location.pathname === "/ContactMe" ? "nav-link active" : "nav-link"}
            >
              Contact Me
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
    {/* <div className="col-6">
      2 of 3 (wider)
    </div> */}
    <div className="col">
    <div className="col-5">
      <span className="navbar-text">
          Josh Walters
      </span>
      </div>
    </div>
    </nav>
  </div>
</div>
   
  );
}

export default Navbar;
