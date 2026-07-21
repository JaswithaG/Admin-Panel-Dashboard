import { useState } from "react";
import NotificationItem from "./NotificationItem";

const NotificationList = () => {
  const [notifications] = useState([
    {
      id: 1,
      user: "John Anderson",
      message: "placed a new order.",
      time: "2 min ago",
      type: "order",
      read: false,
    },
    {
      id: 2,
      user: "Sarah Wilson",
      message: "updated her profile.",
      time: "15 min ago",
      type: "user",
      read: true,
    },
    {
      id: 3,
      user: "Admin",
      message: "published monthly sales report.",
      time: "1 hour ago",
      type: "report",
      read: false,
    },
    {
      id: 4,
      user: "System",
      message: "completed backup successfully.",
      time: "Today",
      type: "system",
      read: true,
    },
    {
      id: 5,
      user: "Emma Watson",
      message: "requested account verification.",
      time: "Yesterday",
      type: "user",
      read: false,
    },
  ]);

  return (
    <div className="notification-list">
      {notifications.length === 0 ? (
        <div className="empty-notification">
          No notifications available.
        </div>
      ) : (
        notifications.map((item) => (
          <NotificationItem
            key={item.id}
            notification={item}
          />
        ))
      )}
    </div>
  );
};

export default NotificationList;