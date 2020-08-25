import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar transparent navbar-dark my-0 mx-4" id="main-navbar">
      <Link to="/" className="navbar-brand navbar-brand-text">
        <i className="fas fa-wrench"></i> VVM | Autoservis
      </Link>
    </nav>
  );
};

export default Navbar;
