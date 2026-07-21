import { useState } from "react";
import "./DataTable.css";

const RecentOrders = () => {
  const [orders] = useState([
    {
      id: "#ORD1001",
      customer: "John Smith",
      product: "Laptop",
      amount: "$1,250",
      status: "Completed",
      date: "16 Jul 2026",
    },
    {
      id: "#ORD1002",
      customer: "Emma Watson",
      product: "Smart Watch",
      amount: "$320",
      status: "Pending",
      date: "15 Jul 2026",
    },
    {
      id: "#ORD1003",
      customer: "David Miller",
      product: "Keyboard",
      amount: "$85",
      status: "Cancelled",
      date: "15 Jul 2026",
    },
    {
      id: "#ORD1004",
      customer: "Sophia Lee",
      product: "Headphones",
      amount: "$210",
      status: "Completed",
      date: "14 Jul 2026",
    },
    {
      id: "#ORD1005",
      customer: "Michael Brown",
      product: "Gaming Mouse",
      amount: "$95",
      status: "Processing",
      date: "14 Jul 2026",
    },
  ]);

  return (
    <div className="table-card">
      <div className="table-header">
        <h2>Recent Orders</h2>

        <button className="view-btn">
          View All
        </button>
      </div>

      <div className="table-responsive">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.product}</td>

                <td>{order.amount}</td>

                <td>
                  <span
                    className={`badge ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;