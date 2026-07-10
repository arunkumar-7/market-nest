import { useState } from "react";
import { Link,  } from "react-router-dom";
import QRCode from "react-qr-code";
import {
  FaMoneyBillWave,
  FaCreditCard,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useCart } from "../hooks/useCart";
import { getAddressFromLocation } from "../api/LocationApi";
import { sendOrderEmail } from "../service/emailService";
import { toast } from "react-toastify";
import { useOrder } from "../hooks/useOrder";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrder();

  const [discount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("COD");

  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const delivery = subtotal > 500 ? 0 : 40;

  const finalAmount = subtotal + delivery - discount;
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        try {
          const data = await getAddressFromLocation(lat, lng);

          setAddress(data.display_name);
        } catch {
          alert("Unable to fetch address.");
        }
      },
      (error) => {
        alert(error.message);
      },
    );
  };
  const placeOrder = async () => {
    if (!customerName || !mobile || !email || !address) {
      toast.error("Please fill all the details.");
      return;
    }

    if (!paymentMode) {
      toast.error("Please select payment method.");
      return;
    }

    try {
      const order = {
        order_id: Math.floor(Math.random() * 100000),

        email,

        orders: cart.map((item) => ({
          name: item.name,
          units: item.quantity,
          price: item.price,
          image_url: item.image,
        })),

        cost: {
          shipping: delivery,
          tax: 0,
          total: finalAmount,
        },
      };

      await sendOrderEmail(order);

      const orderData = {
        orderNumber: Math.floor(Math.random() * 100000),

        customerName,

        mobile,

        email,

        address,

        paymentMode,

        grandTotal: subtotal,

        discount,

        finalAmount,

        orderDate: new Date().toLocaleString(),

        status: "PLACED",

        items: [...cart],
      };
      addOrder(orderData);

      toast.success("🎉 Order placed successfully! Confirmation email sent.");

      clearCart();

      setTimeout(() => {
        navigate("/orders");
      }, 1500);
    } catch (error) {
      console.error(error);

      toast.error(
        "Order placed, but the confirmation email could not be sent.",
      );
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
        {/* LEFT */}

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="mb-6 text-3xl font-bold">Customer Details</h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <label className="font-semibold">Delivery Address</label>

              <textarea
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-xl border p-4"
                placeholder="Enter your delivery address"
              />

              <button
                type="button"
                onClick={getCurrentLocation}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                <FaMapMarkerAlt />
                Use Current Location
              </button>
            </div>
          </div>

          {/* Payment */}

          <div className="rounded-3xl bg-white p-6 shadow">
            <h3 className="mb-5 text-2xl font-bold">Payment Method</h3>

            <div className="space-y-4">
              <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4">
                <input
                  aria-label="Cash on Delivery"
                  type="radio"
                  value="COD"
                  checked={paymentMode === "COD"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />
                <FaMoneyBillWave className="text-green-700" />
                Cash on Delivery
              </label>

              <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4">
                <input
                  aria-label="Upi"
                  type="radio"
                  value="UPI"
                  checked={paymentMode === "UPI"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />
                <FaMobileAlt className="text-green-700" />
                UPI Payment
              </label>

              <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4">
                <input
                  aria-label="card"
                  type="radio"
                  value="CARD"
                  checked={paymentMode === "CARD"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />
                <FaCreditCard className="text-green-700" />
                Credit / Debit Card
              </label>
            </div>

            {paymentMode === "UPI" && (
              <div className="mt-6 rounded-2xl border bg-gray-50 p-6 text-center">
                <h4 className="mb-4 text-xl font-semibold">
                  Scan QR to Pay ₹{finalAmount.toFixed(2)}
                </h4>

                <div className="flex justify-center">
                  <QRCode
                    value={`upi://pay?pa=9390591458@ybl&pn=MarketNest&am=${finalAmount.toFixed(
                      2,
                    )}&cu=INR`}
                    size={180}
                  />
                </div>

                <p className="mt-5 text-sm text-gray-500">UPI ID</p>

                <p className="font-bold text-green-700">9390591458@ybl</p>
              </div>
            )}

            {paymentMode === "CARD" && (
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="w-full rounded-xl border p-4"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full rounded-xl border p-4"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="rounded-xl border p-4"
                  />

                  <input
                    type="password"
                    placeholder="CVV"
                    className="rounded-xl border p-4"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}

        <div className="sticky top-24 h-fit rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>

              <span className="text-green-600">
                {delivery === 0 ? "FREE" : `₹${delivery}`}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>

              <span className="text-red-500">-₹{discount.toFixed(2)}</span>
            </div>
          </div>

          <hr className="my-6" />

          <div className="mb-8 flex justify-between text-2xl font-bold">
            <span>Total</span>

            <span className="text-green-700">₹{finalAmount.toFixed(2)}</span>
          </div>

          <button
            onClick={placeOrder}
            className="w-full rounded-2xl bg-green-700 py-4 text-lg font-bold text-white hover:bg-green-800"
          >
            Place Order
          </button>

          <Link to="/">
            <button className="mt-4 w-full rounded-2xl border py-4 font-semibold hover:bg-gray-100">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
