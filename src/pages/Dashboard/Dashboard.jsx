import DashboardCards from "../../components/Cards/DashboardCards";
import ActivityLog from "../../components/Dashboard/ActivityLog";
import PendingRequests from "../../components/Dashboard/PendingRequests";
import useAuth from "../../hooks/useAuth";

import { exportCSV } from "../../utils/exportCSV";
import { exportPDF } from "../../utils/exportPDF";
import { printReport } from "../../utils/printReport";

import SalesChart from "../../components/Dashboard/SalesChart";
import RevenueChart from "../../components/Dashboard/RevenueChart";

import "./Dashboard.css";

const Dashboard = () => {

  const dashboardData = [
    {
      Name: "Laptop",
      Category: "Electronics",
      Price: "₹75,000",
      Stock: 18,
    },
    {
      Name: "Shoes",
      Category: "Fashion",
      Price: "₹3,000",
      Stock: 42,
    },
    {
      Name: "Table",
      Category: "Furniture",
      Price: "₹9,500",
      Stock: 12,
    },
  ];

  const handleExportCSV = () => {
    exportCSV(dashboardData, "dashboard.csv");
  };

  const handleExportPDF = () => {
    exportPDF(
      "Dashboard Report",
      ["Name", "Category", "Price", "Stock"],
      dashboardData.map((item) => [
        item.Name,
        item.Category,
        item.Price,
        item.Stock,
      ]),
      "dashboard.pdf"
    );
  };

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin 👋</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            className="export-btn"
            onClick={handleExportCSV}
          >
            Export CSV
          </button>

          <button
            className="export-btn"
            onClick={handleExportPDF}
          >
            Export PDF
          </button>

          <button
            className="export-btn"
            onClick={printReport}
          >
            Print
          </button>
        </div>

      </div>

      {/* Dashboard Cards */}

      <DashboardCards />

      {/* Charts */}

      <div className="charts-grid">

        <div className="chart-card">
          <h3>Sales Analytics</h3>

          <p>
            <SalesChart />
          </p>
        </div>

        <div className="chart-card">
          <h3>Revenue</h3>

          <p>
            <RevenueChart/>
          </p>
        </div>

      </div>

      {/* Bottom */}

      <div className="bottom-grid">

        <PendingRequests />

        <ActivityLog />

      </div>

    </div>
  );
};

export default Dashboard;