import { useState } from "react";
import "./Profile.css";

import ProfileCard from "../../components/Profile/ProfileCard";
import EditProfile from "../../components/Profile/EditProfile";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "John Anderson",
    email: "john@example.com",
    phone: "+91 9876543210",
    role: "Administrator",
    location: "Hyderabad, India",
    bio: "Experienced administrator managing users, products, analytics and business operations.",
    image: "https://i.pravatar.cc/300?img=12",
  });

  const saveProfile = (updatedUser) => {
    setUser(updatedUser);
    setEditing(false);
  };

  return (
    <div className="profile-page">

      <div className="profile-header">

        <div>
          <h1>My Profile</h1>
          <p>Manage your personal information</p>
        </div>

        <button
          className="edit-profile-btn"
          onClick={() => setEditing(true)}
        >
          Edit Profile
        </button>

      </div>

      <div className="profile-content">

        <ProfileCard user={user} />

        <div className="profile-right">

          <div className="profile-section">

            <h2>About</h2>

            <p>{user.bio}</p>

          </div>

          <div className="profile-section">

            <h2>Account Information</h2>

            <div className="info-grid">

              <div className="info-card">
                <h4>Name</h4>
                <p>{user.name}</p>
              </div>

              <div className="info-card">
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>

              <div className="info-card">
                <h4>Phone</h4>
                <p>{user.phone}</p>
              </div>

              <div className="info-card">
                <h4>Role</h4>
                <p>{user.role}</p>
              </div>

              <div className="info-card full-width">
                <h4>Location</h4>
                <p>{user.location}</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {editing && (
        <EditProfile
          user={user}
          onSave={saveProfile}
          onClose={() => setEditing(false)}
        />
      )}

    </div>
  );
};

export default Profile;