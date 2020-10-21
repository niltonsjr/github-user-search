import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" >
      <h1 className="navbar-title">Bootcamp DevSuperior</h1>
    </Link>
  </nav>
);

export default Navbar;
