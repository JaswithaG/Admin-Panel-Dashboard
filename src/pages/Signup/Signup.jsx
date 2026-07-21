import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      setError("Email already registered.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: "Administrator",
      phone: "",
      location: "",
      about: "",
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <h2>Create Account</h2>

        <p>Create your administrator account</p>

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="signup-btn"
          >
            Create Account
          </button>

        </form>

        <div className="signup-footer">
          Already have an account?

          <Link to="/login">
            {" "}
            Login
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Signup;