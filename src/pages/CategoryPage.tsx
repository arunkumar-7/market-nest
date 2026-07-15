import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./CategoryPage.css";
import { useCart } from "../hooks/useCart";
import { toast } from "react-toastify";

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
              <div className="flex justify-center pt-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-40 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="mt-1 text-xl font-bold text-green-600">
                  ₹{product.price}
                </p>
              </div>

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
                  onClick={() => {
                    addToCart(product);

                    toast.success(`${product.name} added to cart 🛒`, {
                      toastId: `cart-${product.id}`,
                      position: "top-right",
                      autoClose: 1500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      theme: "colored",
                    });
                  }}
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
