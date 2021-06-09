import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="container bg-light text-dark">
  <div className="row justify-content-center">
  <nav className="navbar navbar-expand-lg">
    <div className="col-6 d-flex justify-content-start">
    <div>
        <ul className="nav nav-pills">
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
          
        </ul>
      </div>
    </div>
   
    </nav>
  </div>
</div>
   
  );
}

export default Navbar;
