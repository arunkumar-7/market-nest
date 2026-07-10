import { useState } from "react";
import { useOrder } from "../hooks/useOrder";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaShoppingBag,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Orders() {
  const { orders } = useOrder();

  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  const toggleOrder = (orderNumber: number) => {
    setExpandedOrder((prev) => (prev === orderNumber ? null : orderNumber));
  };

  if (orders.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-500">No Orders Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-8 text-center text-4xl font-bold text-green-700">
        📦 My Orders
      </h1>

      <div className="mx-auto max-w-7xl space-y-6">
        {orders.map((order) => (
          <div
            key={order.orderNumber}
            className="overflow-hidden rounded-2xl bg-white shadow-lg"
          >
            <div
              onClick={() => toggleOrder(order.orderNumber)}
              className="flex cursor-pointer items-center justify-between bg-green-600 px-6 py-4 text-white transition hover:bg-green-700"
            >
              <div>
                <h2 className="text-xl font-bold">
                  Order #{order.orderNumber}
                </h2>

                <p className="mt-1 flex items-center gap-2 text-sm">
                  <FaCalendarAlt />
                  {order.orderDate}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-green-700">
                  <FaCheckCircle />
                  {order.status}
                </span>

                {expandedOrder === order.orderNumber ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedOrder === order.orderNumber && (
              <div className="grid gap-6 p-6 lg:grid-cols-2">
                {/* Products */}

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                    <FaShoppingBag className="text-green-600" />
                    Ordered Products
                  </h3>

                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 rounded-xl border p-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-20 rounded-lg object-contain"
                        />

                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>

                          <p className="text-gray-500">Qty : {item.quantity}</p>
                        </div>

                        <div className="text-lg font-bold text-green-700">
                          ₹{item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Details */}

                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-5 text-xl font-bold">Order Details</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FaUser className="text-blue-600" />
                      {order.customerName}
                    </div>

                    <div className="flex items-center gap-3">
                      <FaPhone className="text-green-600" />
                      {order.mobile}
                    </div>

                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="mt-1 text-red-600" />
                      {order.address}
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCreditCard className="text-purple-600" />
                      {order.paymentMode}
                    </div>

                    <hr />

                    <div className="flex justify-between">
                      <span>Grand Total</span>
                      <span>₹{order.grandTotal}</span>
                    </div>

                    <div className="flex justify-between text-red-600">
                      <span>Discount</span>
                      <span>-₹{order.discount}</span>
                    </div>

                    <div className="flex justify-between text-2xl font-bold text-green-700">
                      <span className="flex items-center gap-2">
                        <FaMoneyBillWave />
                        Payable
                      </span>

                      <span>₹{order.finalAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
