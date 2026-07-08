import logo from "../assets/images/logo-marketnest.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
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
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              Cart
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
