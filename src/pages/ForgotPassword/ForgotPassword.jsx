import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] =
    useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !email ||
      !newPassword ||
      !confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (newPassword.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) ||
      [];

    const index = users.findIndex(
      (user) => user.email === email
    );

    if (index === -1) {
      setError("Account not found.");
      return;
    }

    users[index].password = newPassword;

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    setSuccess(
      "Password updated successfully!"
    );

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">

        <h2>Forgot Password</h2>

        <p>
          Enter your registered email and
          create a new password.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Registered Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />
          </div>

          {error && (
            <p className="error-msg">
              {error}
            </p>
          )}

          {success && (
            <p className="success-msg">
              {success}
            </p>
          )}

          <button
            className="reset-btn"
            type="submit"
          >
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default ForgotPassword;