import "./Notifications.css";

import { notifications } from "../../data/navbarData";

const Notifications = () => {
  return (
    <div className="notifications-page">

      <h1>Notifications</h1>

      <div className="notification-list">

        {notifications.map((item) => (

          <div
            className="notification-card"
            key={item.id}
          >

            <div>

              <h3>{item.title}</h3>

              <p>{item.time}</p>

            </div>

            <span className="status-dot"></span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Notifications;