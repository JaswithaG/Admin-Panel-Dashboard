import { useState } from "react";
import {
  FaCamera,
  FaTimes,
  FaSave,
} from "react-icons/fa";

import "./EditProfile.css";

const EditProfile = ({
  user,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    ...user,
  });

  const [preview, setPreview] = useState(user.image);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setPreview(reader.result);

      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";

    if (!formData.phone.trim())
      newErrors.phone = "Phone is required";

    if (!formData.role.trim())
      newErrors.role = "Role is required";

    if (!formData.location.trim())
      newErrors.location = "Location is required";

    if (!formData.bio.trim())
      newErrors.bio = "About is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSave(formData);
  };

  return (
    <div className="edit-overlay">

      <div className="edit-modal">

        <div className="edit-header">

          <h2>Edit Profile</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>

        <form
          className="edit-form"
          onSubmit={handleSubmit}
        >

          <div className="image-section">

            <img
              src={preview}
              alt="Profile"
              className="preview-image"
            />

            <label className="upload-btn">

              <FaCamera />

              Change Photo

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImage}
              />

            </label>

          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
              />

              {errors.email && (
                <small>{errors.email}</small>
              )}

            </div>

            <div className="form-group">

              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <small>{errors.phone}</small>
              )}

            </div>

            <div className="form-group">

              <label>Role</label>

              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />

              {errors.role && (
                <small>{errors.role}</small>
              )}

            </div>
                        <div className="form-group">

              <label>Location</label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />

              {errors.location && (
                <small>{errors.location}</small>
              )}

            </div>

            <div className="form-group full-width">

              <label>About</label>

              <textarea
                rows="5"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />

              {errors.bio && (
                <small>{errors.bio}</small>
              )}

            </div>

          </div>

          <div className="button-group">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              <FaSave />

              Save Changes

            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProfile;