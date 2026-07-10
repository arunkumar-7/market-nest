import type { ReactNode } from "react";
import { useImmer } from "use-immer";
import type { Order } from "../interfaces/Order";

import { OrderContext } from "./OrderContext";
import { addOrder } from "./OrderActions";

interface Props {
  children: ReactNode;
}

export function OrderProvider({ children }: Props) {
  const [orders, setOrders] = useImmer<Order[]>([]);

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder: (order: Order) =>
          setOrders((draft) => addOrder(draft, order)),
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
