import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaChartLine,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import useStore from "../../store/useStore";
import "./Sidebar.css";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  isMobile,
}) => {
  const navigate = useNavigate();

  const logout = useStore((state) => state.logout);

  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <FaUsers />,
    },
    {
      title: "Products",
      path: "/products",
      icon: <FaBoxOpen />,
    },
    {
      title: "Orders",
      path: "/orders",
      icon: <FaShoppingCart />,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <FaChartLine />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleMenuClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside
      className={
        isMobile
          ? `sidebar ${sidebarOpen ? "open" : ""}`
          : sidebarOpen
          ? "sidebar"
          : "sidebar collapsed"
      }
    >
      {/* Logo */}

      <div className="sidebar-logo">
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>

        {(sidebarOpen || !isMobile) && (
          <h2>Admin Panel</h2>
        )}
      </div>

      {/* Menu */}

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            onClick={handleMenuClick}
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <span className="icon">{item.icon}</span>

            {(sidebarOpen || !isMobile) && (
              <span>{item.title}</span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Bottom */}

      <div className="sidebar-bottom">
        <NavLink
          to="/help"
          className="menu-item"
          onClick={handleMenuClick}
        >
          <span className="icon">
            <FaQuestionCircle />
          </span>

          {(sidebarOpen || !isMobile) && (
            <span>Help</span>
          )}
        </NavLink>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt />

          {(sidebarOpen || !isMobile) && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;