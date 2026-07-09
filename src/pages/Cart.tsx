import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash, FaTag } from "react-icons/fa";
import { useState } from "react";

import { useCart } from "../hooks/useCart";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const [coupon, setCoupon] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = coupon.toLowerCase() === "save10" ? subtotal * 0.1 : 0;

  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-red-50 p-10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          🛒 Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-white p-16 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="mt-3 text-gray-500">
              Add some products to continue shopping.
            </p>

            <Link to="/">
              <button className="mt-8 rounded-2xl bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12">
            {/* LEFT SIDE */}

            <div className="space-y-6 lg:col-span-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-32 w-32 rounded-2xl bg-gray-50 p-3 object-contain"
                    />

                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-lg text-gray-500">
                        ₹{item.price} / item
                      </p>

                      <p className="mt-3 text-2xl font-bold text-green-700">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-5">
                    <div className="flex items-center gap-5 rounded-full bg-green-700 px-5 py-3 text-white shadow-lg">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => decreaseQuantity(item.id)}
                        className="rounded-full bg-white/20 p-2 hover:bg-white/30"
                      >
                        <FaMinus />
                      </button>

                      <span className="text-lg font-bold">{item.quantity}</span>

                      <button
                        aria-label="increase quantity"
                        onClick={() => increaseQuantity(item.id)}
                        className="rounded-full bg-white/20 p-2 hover:bg-white/30"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 text-white transition hover:bg-red-600"
                    >
                      <FaTrash />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}

            <div className="sticky top-24 h-fit rounded-3xl border border-gray-200 bg-white p-8 shadow-xl lg:col-span-4">
              <h2 className="mb-8 text-3xl font-bold text-gray-800">
                Order Summary
              </h2>

              <div className="mb-6">
                <label className="mb-2 flex items-center gap-2 font-semibold">
                  <FaTag />
                  Coupon Code
                </label>

                <div className="flex gap-2">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="SAVE10"
                    className="flex-1 rounded-xl border p-3 outline-none focus:border-green-600"
                  />

                  <button className="rounded-xl bg-green-700 px-5 font-semibold text-white hover:bg-green-800">
                    Apply
                  </button>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Try: <span className="font-semibold">SAVE10</span>
                </p>
              </div>

              <hr className="my-6" />

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Items</span>

                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>

                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>

                  <span className="font-semibold text-green-600">FREE</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>

                  <span className="text-red-500">-₹{discount.toFixed(2)}</span>
                </div>
              </div>

              <hr className="my-6" />

              <div className="mb-8 flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span className="text-green-700">₹{total.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <button className="w-full rounded-2xl bg-green-700 py-4 text-lg font-bold text-white transition hover:bg-green-800">
                  Proceed to Checkout →
                </button>
              </Link>

              <Link to="/">
                <button className="mt-4 w-full rounded-2xl border py-3 font-semibold text-gray-700 hover:bg-gray-100">
                  Continue Shopping
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
