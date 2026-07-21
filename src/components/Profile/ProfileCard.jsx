import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserShield,
} from "react-icons/fa";

import "./ProfileCard.css";


import profileImage from "../../assets/images/profile.jpg";

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">

      <div className="profile-avatar">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-avatar-img"
        />
      </div>

      <h2>{user.name}</h2>

      <span className="profile-role">
        {user.role}
      </span>

      <div className="profile-contact">

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>{user.email}</span>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>{user.phone}</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>{user.location}</span>
        </div>

        <div className="contact-item">
          <FaUserShield className="contact-icon" />
          <span>{user.role}</span>
        </div>

      </div>

      <div className="profile-stats">

        <div className="stat-box">
          <h3>248</h3>
          <p>Projects</p>
        </div>

        <div className="stat-box">
          <h3>1.5K</h3>
          <p>Tasks</p>
        </div>

        <div className="stat-box">
          <h3>98%</h3>
          <p>Performance</p>
        </div>

      </div>

    </div>
  );
};

export default ProfileCard;