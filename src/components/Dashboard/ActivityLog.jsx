import "./ActivityLog.css";

import {
  FaUserPlus,
  FaShoppingCart,
  FaBoxOpen,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

const ActivityLog = () => {
  const activities = [
    {
      id: 1,
      icon: <FaUserPlus />,
      title: "New User Registered",
      description: "John Smith created a new account.",
      time: "2 minutes ago",
    },
    {
      id: 2,
      icon: <FaShoppingCart />,
      title: "New Order Received",
      description: "Order #1024 has been placed.",
      time: "10 minutes ago",
    },
    {
      id: 3,
      icon: <FaBoxOpen />,
      title: "Product Added",
      description: "Wireless Headphones added to inventory.",
      time: "30 minutes ago",
    },
    {
      id: 4,
      icon: <FaMoneyBillWave />,
      title: "Payment Received",
      description: "Payment of $350 received successfully.",
      time: "1 hour ago",
    },
    {
      id: 5,
      icon: <FaCheckCircle />,
      title: "Order Delivered",
      description: "Order #1018 delivered successfully.",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="activity-log">
      {/* Header */}

      <div className="activity-log-header">
        <h3>Recent Activity</h3>

        <button className="view-all-btn">
          View All
        </button>
      </div>

      {/* Activity List */}

      <div className="activity-list">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="activity-item"
          >
            <div className="activity-icon">
              {activity.icon}
            </div>

            <div className="activity-content">
              <h4>{activity.title}</h4>

              <p>{activity.description}</p>

              <span className="activity-time">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;