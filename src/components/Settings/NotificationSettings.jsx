import { useState, useEffect } from "react";

const NotificationSettings = () => {
  const [emailNotification, setEmailNotification] = useState(false);
  const [pushNotification, setPushNotification] = useState(false);
  const [smsNotification, setSmsNotification] = useState(false);
  const [weeklyReport, setWeeklyReport] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("notificationSettings")
    );

    if (saved) {
      setEmailNotification(saved.emailNotification);
      setPushNotification(saved.pushNotification);
      setSmsNotification(saved.smsNotification);
      setWeeklyReport(saved.weeklyReport);
    }
  }, []);

  const handleSave = () => {
    const settings = {
      emailNotification,
      pushNotification,
      smsNotification,
      weeklyReport,
    };

    localStorage.setItem(
      "notificationSettings",
      JSON.stringify(settings)
    );

    setMessage("Notification Settings Saved!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div>

      <div className="settings-section-title">
        <div>
          <h2>Notification Settings</h2>
          <p>
            Choose how you receive updates.
          </p>
        </div>
      </div>

      <div className="setting-item">

        <div>
          <h4>Email Notifications</h4>
          <span>
            Receive updates by email.
          </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={emailNotification}
            onChange={() =>
              setEmailNotification(!emailNotification)
            }
          />
          <span className="slider"></span>
        </label>

      </div>

      <div className="setting-item">

        <div>
          <h4>Push Notifications</h4>
          <span>
            Browser push notifications.
          </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={pushNotification}
            onChange={() =>
              setPushNotification(!pushNotification)
            }
          />
          <span className="slider"></span>
        </label>

      </div>

      <div className="setting-item">

        <div>
          <h4>SMS Notifications</h4>
          <span>
            Receive important alerts by SMS.
          </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={smsNotification}
            onChange={() =>
              setSmsNotification(!smsNotification)
            }
          />
          <span className="slider"></span>
        </label>

      </div>

      <div className="setting-item">

        <div>
          <h4>Weekly Report</h4>
          <span>
            Receive a weekly performance report.
          </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={weeklyReport}
            onChange={() =>
              setWeeklyReport(!weeklyReport)
            }
          />
          <span className="slider"></span>
        </label>

      </div>

      <button
        className="settings-btn"
        onClick={handleSave}
      >
        Save Notification Settings
      </button>

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

    </div>
  );
};

export default NotificationSettings;