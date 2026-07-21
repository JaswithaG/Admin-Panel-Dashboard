import { useState } from "react";
import OrderTable from "../../components/Orders/OrderTable";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "#ORD1001",
      customer: "John Smith",
      email: "john@gmail.com",
      amount: 1250,
      date: "17 Jul 2026",
      status: "Pending",
    },
    {
      id: "#ORD1002",
      customer: "Emma Watson",
      email: "emma@gmail.com",
      amount: 890,
      date: "16 Jul 2026",
      status: "Processing",
    },
    {
      id: "#ORD1003",
      customer: "David Miller",
      email: "david@gmail.com",
      amount: 420,
      date: "15 Jul 2026",
      status: "Delivered",
    },
    {
      id: "#ORD1004",
      customer: "Sophia Lee",
      email: "sophia@gmail.com",
      amount: 350,
      date: "15 Jul 2026",
      status: "Cancelled",
    },
    {
      id: "#ORD1005",
      customer: "Michael Brown",
      email: "michael@gmail.com",
      amount: 760,
      date: "14 Jul 2026",
      status: "Pending",
    },
  ]);

  const updateStatus = (id, status) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status }
          : order
      )
    );
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <div>
          <h1>Orders Management</h1>
          <p>
            Track and manage customer orders
          </p>
        </div>

        <div className="order-summary">
          <div className="summary-card">
            <h3>{orders.length}</h3>
            <span>Total Orders</span>
          </div>

          <div className="summary-card">
            <h3>
              {
                orders.filter(
                  (o) =>
                    o.status === "Pending"
                ).length
              }
            </h3>
            <span>Pending</span>
          </div>

          <div className="summary-card">
            <h3>
              {
                orders.filter(
                  (o) =>
                    o.status === "Delivered"
                ).length
              }
            </h3>
            <span>Delivered</span>
          </div>
        </div>
      </div>

      <OrderTable
        orders={orders}
        onStatusChange={updateStatus}
      />
    </div>
  );
};

export default Orders;