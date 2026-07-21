import { useState } from "react";
import "./Settings.css";

import ThemeSettings from "../../components/Settings/ThemeSettings";
import SecuritySettings from "../../components/Settings/SecuritySettings";
import NotificationSettings from "../../components/Settings/NotificationSettings";

const Settings = () => {
  const [message, setMessage] = useState("");

  // Save Appearance Settings
  const handleAppearanceSave = () => {
    setMessage("✅ Appearance Settings Saved Successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="settings-page">

      {/* Header */}

      <div className="settings-header">
        <div>
          <h1>Settings</h1>

          <p>
            Manage your account preferences and
            application settings.
          </p>
        </div>
      </div>

      {/* Settings Cards */}

      <div className="settings-container">

        {/* Appearance */}

        <div className="settings-card">

          <ThemeSettings
            onSave={handleAppearanceSave}
          />

          {message && (
            <div className="success-message">
              {message}
            </div>
          )}

        </div>

        {/* Security */}

        <div className="settings-card">

          <SecuritySettings />

        </div>

        {/* Notifications */}

        <div className="settings-card">

          <NotificationSettings />

        </div>

      </div>

    </div>
  );
};

export default Settings;