import { useState } from "react";
import "./PendingRequests.css";

const PendingRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "John Smith",
      role: "Seller Account",
      status: "Pending",
    },
    {
      id: 2,
      name: "Emma Watson",
      role: "Product Approval",
      status: "Pending",
    },
    {
      id: 3,
      name: "David Miller",
      role: "Vendor Registration",
      status: "Pending",
    },
    {
      id: 4,
      name: "Sophia Lee",
      role: "Order Verification",
      status: "Pending",
    },
  ]);

  const updateStatus = (id, status) => {
    setRequests(
      requests.map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      )
    );
  };

  return (
    <div className="pending-card">
      <div className="pending-header">
        <h2>Pending Requests</h2>

        <span>{requests.length}</span>
      </div>

      <div className="pending-list">
        {requests.map((item) => (
          <div
            key={item.id}
            className="pending-item"
          >
            <div className="pending-info">
              <h4>{item.name}</h4>

              <p>{item.role}</p>

              <small
                className={`status ${item.status.toLowerCase()}`}
              >
                {item.status}
              </small>
            </div>

            <div className="pending-buttons">
              <button
                className="approve-btn"
                onClick={() =>
                  updateStatus(
                    item.id,
                    "Approved"
                  )
                }
              >
                Approve
              </button>

              <button
                className="reject-btn"
                onClick={() =>
                  updateStatus(
                    item.id,
                    "Rejected"
                  )
                }
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingRequests;