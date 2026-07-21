import { useState } from "react";
import {
  FaBell,
  FaCheck,
  FaTrash,
} from "react-icons/fa";

import "./NotificationWidget.css";

const NotificationWidget = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Order",
      message: "Order #10254 has been placed.",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      title: "New User",
      message: "Emma joined your platform.",
      time: "15 min ago",
      read: false,
    },
    {
      id: 3,
      title: "Payment Received",
      message: "$1,240 payment received.",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 4,
      title: "Stock Alert",
      message: "Wireless Mouse stock is low.",
      time: "3 hours ago",
      read: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div className="notification-card">
      <div className="notification-header">
        <h2>
          <FaBell /> Notifications
        </h2>

        <span>
          {
            notifications.filter(
              (item) => !item.read
            ).length
          }
        </span>
      </div>

      <div className="notification-list">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`notification-item ${
              item.read ? "read" : ""
            }`}
          >
            <div className="notification-content">
              <h4>{item.title}</h4>

              <p>{item.message}</p>

              <small>{item.time}</small>
            </div>

            <div className="notification-actions">
              {!item.read && (
                <button
                  className="read-btn"
                  onClick={() =>
                    markAsRead(item.id)
                  }
                >
                  <FaCheck />
                </button>
              )}

              <button
                className="delete-btn"
                onClick={() =>
                  deleteNotification(item.id)
                }
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationWidget;