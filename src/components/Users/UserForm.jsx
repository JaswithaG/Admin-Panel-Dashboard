import { useEffect, useState } from "react";
import "./UserForm.css";

const UserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Customer",
    status: "Active",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSave(formData);

    setFormData({
      name: "",
      email: "",
      role: "Customer",
      status: "Active",
    });
  };

  return (
    <form
      className="user-form"
      onSubmit={submitForm}
    >
      <div className="form-group">
        <label>Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        {errors.name && (
          <small>{errors.name}</small>
        )}
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        {errors.email && (
          <small>{errors.email}</small>
        )}
      </div>

      <div className="form-group">
        <label>Role</label>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option>Admin</option>
          <option>Manager</option>
          <option>Customer</option>
          <option>Seller</option>
        </select>
      </div>

      <div className="form-group">
        <label>Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>
      </div>

      <div className="form-buttons">
        <button
          type="button"
          className="cancel-btn"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="save-btn"
        >
          {user ? "Update User" : "Add User"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;