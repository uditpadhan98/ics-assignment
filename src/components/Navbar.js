import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
    return (
      <div className="navbar">
        <h1>Candleaf</h1>
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact Us </Link>
        </div>
      </div>
    );
  }
  
export default Navbar;