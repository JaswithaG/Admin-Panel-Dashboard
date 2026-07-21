import {
  FaShoppingCart,
  FaUser,
  FaBell,
  FaServer,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const NotificationItem = ({ notification }) => {
  const getIcon = () => {
    switch (notification.type) {
      case "order":
        return <FaShoppingCart />;
      case "user":
        return <FaUser />;
      case "report":
        return <FaBell />;
      case "system":
        return <FaServer />;
      default:
        return <FaBell />;
    }
  };

  return (
    <div
      className={`notification-item ${
        notification.read ? "" : "unread"
      }`}
    >
      <div className="notification-icon">
        {getIcon()}
      </div>

      <div className="notification-content">
        <h4>
          {notification.user}
        </h4>

        <p>{notification.message}</p>

        <div className="notification-footer">
          <span>
            <FaClock /> {notification.time}
          </span>

          {!notification.read && (
            <span className="notification-status">
              <FaCheckCircle /> New
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;