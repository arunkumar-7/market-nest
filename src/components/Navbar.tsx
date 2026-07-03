import React from "react";
import logo from "../assets/images/logo-marketnest.png";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo-img" />
          <h2>MarketNest</h2>
        </div>
        <div className="nav-location">
          <p className="deliver-text">Deliver to</p>
          <h4>Warasiguda, Hyderabad ▼</h4>
        </div>
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search vegetables, fruits, dairy..."
          />
        </div>
        <div className="nav-buttons">
          <button>Login</button>
          <button className="cart-btn">
            <FaShoppingCart /> Cart
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
