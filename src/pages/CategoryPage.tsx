import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import "./CategoryPage.css";
import { useCart } from "../hooks/useCart";

function CategoryPage() {
  const { name } = useParams();
  const { addToCart } = useCart();

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

            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full rounded-lg bg-green-600 py-2 text-white transition hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
