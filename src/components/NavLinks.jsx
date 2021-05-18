import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavLinks.css";

const NavLinks = () => {
  const location = useLocation();

  return (
    <>
      {/* // <!-- Background image  --> */}
      <div
        className={
          location.pathname === "/"
            ? "bg-index"
            : location.pathname === "/portfolio"
            ? "bg-portfolio"
            : location.pathname === "/contact"
            ? "bg-contact"
            : "bg-index"
        }
        role="img"
        aria-label="Background image"
      ></div>

      <header>
        <nav
          className={
            location.pathname === "/"
              ? "navbar navbar-expand-lg navbar-dark nav-index"
              : location.pathname === "/portfolio"
              ? "navbar navbar-expand-lg navbar-dark nav-portfolio"
              : location.pathname === "/contact"
              ? "navbar navbar-expand-lg navbar-dark nav-contact"
              : "navbar navbar-expand-lg navbar-dark"
          }
        >
          <Link to="/" className="navbar-brand ml-lg-5 pl-lg-5 nav-bar-custom">
            JRE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse mr-5 pr-5 nav-bar-custom"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={
                    location.pathname === "/contact"
                      ? "nav-link active nav-contact"
                      : "nav-link"
                  }
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={
                    location.pathname === "/portfolio"
                      ? "nav-link active nav-portfolio"
                      : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "nav-link active nav-index"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavLinks;
