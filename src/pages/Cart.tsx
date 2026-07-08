import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

import { useCart } from "../hooks/useCart";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>

            <p className="mt-2 text-gray-500">
              Add some products to continue shopping.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Cart Items */}

            <div className="space-y-4 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl bg-white p-5 shadow"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-lg border object-contain"
                    />

                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>

                      <p className="mt-1 text-gray-500">₹{item.price}</p>

                      <p className="mt-2 font-semibold text-green-600">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4 rounded-lg bg-green-600 px-3 py-2 text-white">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        <FaMinus />
                      </button>

                      <span className="font-bold">{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        <FaPlus />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                    >
                      <FaTrash />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}

            <div className="h-fit rounded-xl bg-white p-6 shadow">
              <h2 className="mb-5 text-2xl font-bold">Order Summary</h2>

              <div className="mb-3 flex justify-between">
                <span>Items</span>

                <span>{cart.length}</span>
              </div>

              <div className="mb-3 flex justify-between">
                <span>Subtotal</span>

                <span>₹{total}</span>
              </div>

              <div className="mb-3 flex justify-between">
                <span>Delivery</span>

                <span>FREE</span>
              </div>

              <hr className="my-4" />

              <div className="mb-6 flex justify-between text-xl font-bold">
                <span>Total</span>

                <span>₹{total}</span>
              </div>

              <Link to="/checkout">
                <button className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
