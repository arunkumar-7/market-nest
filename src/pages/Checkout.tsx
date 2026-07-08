import { useState } from "react";
import { coupons } from "../data/Coupons";
import { useCart } from "../hooks/useCart";

function Checkout() {
  const { cart } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const applyCoupon = () => {
    const coupon = coupons.find(
      (c) => c.code.toLowerCase() === couponCode.toLowerCase(),
    );

    if (coupon) {
      setDiscount(coupon.discount);
      alert("Coupon Applied");
    } else {
      alert("Invalid Coupon");
      setDiscount(0);
    }
  };

  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">Checkout</h1>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>

          <hr />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <input
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Coupon Code"
            className="flex-1 rounded-lg border p-3"
          />

          <button
            onClick={applyCoupon}
            className="rounded-lg bg-green-600 px-5 text-white"
          >
            Apply
          </button>
        </div>

        <button className="mt-8 w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
