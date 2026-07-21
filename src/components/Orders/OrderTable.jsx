import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import OrderStatus from "./OrderStatus";
import "./OrderTable.css";

const OrderTable = ({ orders, onStatusChange }) => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="order-table-card">
      <div className="table-top">

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

      </div>

      <div className="table-responsive">

        <table className="order-table">

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredOrders.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="no-data"
                >
                  No Orders Found
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id}>

                  <td>
                    <strong>{order.id}</strong>
                  </td>

                  <td>{order.customer}</td>

                  <td>{order.email}</td>

                  <td>${order.amount}</td>

                  <td>{order.date}</td>

                  <td>

                    <OrderStatus
                      status={order.status}
                      onChange={(status) =>
                        onStatusChange(
                          order.id,
                          status
                        )
                      }
                    />

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default OrderTable;