import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./CategoryPage.css";
import { useCart } from "../hooks/useCart";

function CategoryPage() {
  const { name } = useParams();

  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  const filteredProducts = products.filter(
    (product) => product.category === name,
  );

  return (
    <div className="product-page">
      <h1>{name} Products</h1>

      <div className="product-container">
        {filteredProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <p>Stock: {product.stock}</p>

              {cartItem ? (
                <div className="mt-3 flex items-center justify-between rounded-lg bg-green-600 px-3 py-2 text-white">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="text-xl font-bold"
                  >
                    -
                  </button>

                  <span className="font-semibold">{cartItem.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full rounded-lg bg-green-600 py-2 text-white transition hover:bg-green-700"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryPage;
