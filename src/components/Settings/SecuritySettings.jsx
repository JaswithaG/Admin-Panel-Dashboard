import { useState } from "react";

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = () => {
    setMessage("");
    setError("");

    const savedPassword =
      localStorage.getItem("adminPassword") ||
      "admin123";

    if (currentPassword !== savedPassword) {
      setError("Current password is incorrect.");
      return;
    }

    if (newPassword.length < 6) {
      setError(
        "New password must be at least 6 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError(
        "New password and Confirm password do not match."
      );
      return;
    }

    localStorage.setItem(
      "adminPassword",
      newPassword
    );

    setMessage(
      "Password changed successfully."
    );

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div>

      <div className="settings-section-title">
        <div>
          <h2>Security Settings</h2>
          <p>
            Update your account password.
          </p>
        </div>
      </div>

      <div className="setting-item">
        <div className="setting-content">

          <label>Current Password</label>

          <input
            type="password"
            className="settings-input"
            value={currentPassword}
            onChange={(e)=>
              setCurrentPassword(e.target.value)
            }
          />

        </div>
      </div>

      <div className="setting-item">
        <div className="setting-content">

          <label>New Password</label>

          <input
            type="password"
            className="settings-input"
            value={newPassword}
            onChange={(e)=>
              setNewPassword(e.target.value)
            }
          />

        </div>
      </div>

      <div className="setting-item">
        <div className="setting-content">

          <label>Confirm Password</label>

          <input
            type="password"
            className="settings-input"
            value={confirmPassword}
            onChange={(e)=>
              setConfirmPassword(e.target.value)
            }
          />

        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      <button
        className="settings-btn"
        onClick={handlePasswordChange}
      >
        Save Security Settings
      </button>

    </div>
  );
};

export default SecuritySettings;