import logo from "../assets/images/logo-marketnest.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../service/AuthService";

import { useCart } from "../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAddressFromLocation } from "../api/LocationApi";

function Navbar() {
  const { cart } = useCart();
  const [location, setLocation] = useState(() => {
    return localStorage.getItem("deliveryLocation") || "Detecting location...";
  });
  const navigate = useNavigate();

  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location unavailable");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await getAddressFromLocation(
            position.coords.latitude,
            position.coords.longitude,
          );

          const area =
            data.address.suburb ||
            data.address.neighbourhood ||
            data.address.village ||
            data.address.hamlet ||
            data.address.city_district ||
            "";

          const city =
            data.address.city || data.address.town || data.address.county || "";

          const formattedLocation =
            area && city ? `${area}, ${city}` : data.display_name;

          setLocation(formattedLocation);

          localStorage.setItem("deliveryLocation", formattedLocation);
        } catch (error) {
          console.error(error);
        }
      },
      () => {
        setLocation("Location unavailable");
      },
    );
  }, []);

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
          <h4>{location} </h4>
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
        <div className="nav-buttons flex items-center gap-3">
          {currentUser ? (
            <>
              <span className="font-semibold text-green-700">
                👋 Hi, {currentUser.name}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}

          <Link to="/cart">
            <button className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              <FaShoppingCart />
              Cart
              <span className="rounded-full bg-white px-2 font-bold text-green-700">
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
