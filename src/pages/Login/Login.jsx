import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import useStore from "../../store/useStore";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const login = useStore((state) => state.login);

  const [email, setEmail] = useState(
    localStorage.getItem("rememberEmail") || ""
  );

  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(
    !!localStorage.getItem("rememberEmail")
  );

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const users =
        JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) =>
          u.email === email &&
          u.password === password
      );

      if (!user) {
        setLoading(false);
        setError("Invalid email or password.");
        return;
      }

      login(user, "admin-token");

      if (remember) {
        localStorage.setItem(
          "rememberEmail",
          email
        );
      } else {
        localStorage.removeItem(
          "rememberEmail"
        );
      }

      setLoading(false);

      navigate("/dashboard", {
        replace: true,
      });
    }, 800);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Admin Dashboard</h1>

        <p>
          Sign in to continue to your dashboard.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          <div className="login-options">

            <label>

              <input
                type="checkbox"
                checked={remember}
                onChange={() =>
                  setRemember(!remember)
                }
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="forgot"
            >
              Forgot Password?
            </Link>

          </div>

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </form>

        <div className="signup-footer">

          Don't have an account?

          <Link to="/signup">
            {" "}
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;