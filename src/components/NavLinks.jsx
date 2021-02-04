import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-portfolio">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Joel Estrada
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
                </Link>
          </li>
          <li className="nav-item active">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
                </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              About
                </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavLinks;