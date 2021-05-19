import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className="text-center py-1"
      style={
        location.pathname === "/contact"
          ? { position: "fixed", backgroundColor: "#C5CBE3" }
          : location.pathname === "/portfolio"
          ? { backgroundColor: "rgb(52,58,64)" }
          : {}
      }
    >
      <p
        className="mb-0 py-1"
        style={
          location.pathname === "/contact"
            ? { backgroundColor: "#C5CBE3" }
            : location.pathname === "/portfolio"
            ? { backgroundColor: "rgb(52,58,64)" }
            : {}
        }
      >
        &copy; Copyright 2020 Joel Estrada
      </p>
    </footer>
  );
};

export default Footer;
