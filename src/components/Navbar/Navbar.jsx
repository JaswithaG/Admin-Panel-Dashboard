import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ThemeToggle from "../Common/ThemeToggle";

import {
  FaBars,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaChevronDown,
  FaUserCircle,
} from "react-icons/fa";

import useStore from "../../store/useStore";

import {
  searchItems,
  notifications,
  messages,
} from "../../data/navbarData";

import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const logout = useStore((state) => state.logout);

  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const profileRef = useRef();
  const notificationRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered([]);
      return;
    }

    const result = searchItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(result);
  }, [search]);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }

      if (
        messageRef.current &&
        !messageRef.current.contains(e.target)
      ) {
        setShowMessages(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* LEFT */}

      <div className="navbar-left">

        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filtered.length > 0 && (
            <div className="search-dropdown">

              {filtered.map((item) => (
                <div
                  key={item.title}
                  className="search-item"
                  onClick={() => {
                    navigate(item.path);
                    setSearch("");
                    setFiltered([]);
                  }}
                >
                  {item.title}
                </div>
              ))}

            </div>
          )}

        </div>

      </div>

      {/* RIGHT */}

      <div className="navbar-right">

        <ThemeToggle />

        {/* Messages */}

<div
  className="dropdown-wrapper"
  ref={messageRef}
>
  <button
    className="icon-btn"
    onClick={() => {
      setShowMessages(!showMessages);
      setShowNotifications(false);
      setShowProfile(false);
    }}
  >
    <FaEnvelope />

    <span className="badge">
      {messages.length}
    </span>
  </button>

  {showMessages && (
    <div className="dropdown-menu">

      <h4>Messages</h4>

      {messages.map((msg) => (
        <div
          key={msg.id}
          className="dropdown-item"
        >
          <strong>{msg.sender}</strong>

          <p>{msg.message}</p>
        </div>
      ))}

      <hr />

      <button
        className="view-all-btn"
        onClick={() => {
          navigate("/messages");
          setShowMessages(false);
        }}
      >
        View All Messages
      </button>

    </div>
  )}
</div>

        {/* Notifications */}

<div
  className="dropdown-wrapper"
  ref={notificationRef}
>
  <button
    className="icon-btn"
    onClick={() => {
      setShowNotifications(!showNotifications);
      setShowMessages(false);
      setShowProfile(false);
    }}
  >
    <FaBell />

    <span className="badge">
      {notifications.length}
    </span>
  </button>

  {showNotifications && (
    <div className="dropdown-menu">

      <h4>Notifications</h4>

      {notifications.map((item) => (
        <div
          key={item.id}
          className="dropdown-item"
        >
          <strong>{item.title}</strong>

          <small>{item.time}</small>
        </div>
      ))}

      <hr />

      <button
        className="view-all-btn"
        onClick={() => {
          navigate("/notifications");
          setShowNotifications(false);
        }}
      >
        View All Notifications
      </button>

    </div>
  )}
</div>

        {/* PROFILE */}

        <div
          className="profile"
          ref={profileRef}
          onClick={() =>
            setShowProfile(!showProfile)
          }
        >

          <FaUserCircle className="avatar" />

          <div className="profile-info">
            <h4>Admin</h4>
            <p>Administrator</p>
          </div>

          <FaChevronDown />

          {showProfile && (

            <div className="profile-menu">

              <button
                onClick={() =>
                  navigate("/profile")
                }
              >
                My Profile
              </button>

              <button
                onClick={() =>
                  navigate("/settings")
                }
              >
                Settings
              </button>

              <button
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;