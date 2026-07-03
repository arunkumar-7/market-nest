import React from "react";
import logo from "../assets/images/logo-marketnest.png";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo-img" />
          <h2>MarketNest</h2>
          <p>Delivering Fast</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
