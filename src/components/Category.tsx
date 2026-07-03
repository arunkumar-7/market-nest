import React from "react";
import { FaAppleAlt, FaLeaf } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { LuCookie } from "react-icons/lu";
import { MdBakeryDining } from "react-icons/md";
import "./Category.css";
import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <section className="category-section">
        <h2>Shop By category</h2>
        <div className="category-container">
          <Link to="/category/vegetables" className="category-card">
            <FaLeaf /> Vegetables
          </Link>
          <Link to="/category/fruits" className="category-card">
            <FaAppleAlt /> Fruits
          </Link>
          <Link to="/category/dairy" className="category-card">
            <GiMilkCarton /> Dairy
          </Link>
          <Link to="/category/bakery" className="category-card">
            <MdBakeryDining /> Bakery
          </Link>
          <Link to="/category/snacks" className="category-card">
            <LuCookie /> Snacks
          </Link>
        </div>
      </section>
    </>
  );
}

export default Category;
