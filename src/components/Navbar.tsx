import logo from "../assets/images/logo-marketnest.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
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
        <Link
          to="/orders"
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 font-medium shadow-sm transition hover:bg-green-50 hover:text-green-700"
        >
          <FaClipboardList />
          <span>Orders</span>
        </Link>
        <div className="nav-buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <button className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              <FaShoppingCart />
              Cart
              <span className="rounded-full bg-white px-2 text-green-700 font-bold">
                {cartCount}
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
