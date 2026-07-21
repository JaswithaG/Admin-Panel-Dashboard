import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);

      // Automatically open sidebar on desktop
      if (!mobile) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="dashboard-layout">

      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />

      {/* Main Content */}
      <div
        className={
          !isMobile && !sidebarOpen
            ? "main-content expanded"
            : "main-content"
        }
      >
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="page-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default DashboardLayout;