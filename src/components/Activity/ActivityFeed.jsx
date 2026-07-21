import "./ActivityFeed.css";
import {
  FaUserPlus,
  FaShoppingCart,
  FaBoxOpen,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    icon: <FaUserPlus />,
    title: "New user registered",
    description: "John Smith created a new account.",
    time: "2 min ago",
    color: "#2563eb",
  },
  {
    id: 2,
    icon: <FaShoppingCart />,
    title: "New Order",
    description: "Order #10254 has been placed.",
    time: "10 min ago",
    color: "#10b981",
  },
  {
    id: 3,
    icon: <FaMoneyBillWave />,
    title: "Payment Received",
    description: "$1,250 payment received.",
    time: "30 min ago",
    color: "#f59e0b",
  },
  {
    id: 4,
    icon: <FaBoxOpen />,
    title: "Product Added",
    description: "Wireless Headphones added.",
    time: "1 hour ago",
    color: "#8b5cf6",
  },
  {
    id: 5,
    icon: <FaCheckCircle />,
    title: "Order Completed",
    description: "Order #10221 delivered.",
    time: "2 hours ago",
    color: "#ef4444",
  },
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>Recent Activity</h2>
      </div>

      <div className="activity-list">
        {activities.map((activity) => (
          <div
            className="activity-item"
            key={activity.id}
          >
            <div
              className="activity-icon"
              style={{
                background: activity.color,
              }}
            >
              {activity.icon}
            </div>

            <div className="activity-content">
              <h4>{activity.title}</h4>

              <p>{activity.description}</p>

              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;