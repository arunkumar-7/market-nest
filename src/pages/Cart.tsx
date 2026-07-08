import { FaTrash } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="py-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add products to your cart.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-lg border object-contain"
                  />

                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-gray-600">
                      ₹{item.price}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                  title="Remove Item"
                  className="rounded-lg bg-red-500 p-3 text-white transition hover:bg-red-600"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;