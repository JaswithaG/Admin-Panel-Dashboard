import "./PendingRequests.css";

import {
  FaUserPlus,
  FaShoppingCart,
  FaBoxOpen,
} from "react-icons/fa";

const PendingRequests = () => {
  const requests = [
    {
      id: 1,
      icon: <FaUserPlus />,
      title: "User Approval",
      description: "Alice Johnson requested a new account.",
      priority: "High",
      date: "Today",
      status: "Pending",
    },
    {
      id: 2,
      icon: <FaShoppingCart />,
      title: "Order Verification",
      description: "Order #1058 requires verification.",
      priority: "Medium",
      date: "Yesterday",
      status: "Pending",
    },
    {
      id: 3,
      icon: <FaBoxOpen />,
      title: "Product Approval",
      description: "Gaming Mouse awaiting approval.",
      priority: "Low",
      date: "2 Days Ago",
      status: "Pending",
    },
  ];

  return (
    <div className="pending-requests">
      <div className="pending-header">
        <h3>Pending Requests</h3>

        <button className="view-btn">
          View All
        </button>
      </div>

      <div className="pending-list">
        {requests.map((item) => (
          <div
            key={item.id}
            className="pending-item"
          >
            <div className="pending-icon">
              {item.icon}
            </div>

            <div className="pending-content">
              <h4>{item.title}</h4>

              <p>{item.description}</p>

              <div className="pending-footer">
                <span>{item.date}</span>

                <span
                  className={`priority ${item.priority.toLowerCase()}`}
                >
                  {item.priority}
                </span>

                <span className="status">
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingRequests;