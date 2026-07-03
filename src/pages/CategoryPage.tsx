import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./CategoryPage.css";

function CategoryPage() {
  const { name } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === name,
  );

  return (
    <div className="product-page">
      <h1>{name} Products</h1>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <p>Stock: {product.stock}</p>

            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
