import "./Analytics.css";

import AnalyticsCards from "../../components/Analytics/AnalyticsCards";
import KPIChart from "../../components/Charts/KPIChart";
import VisitorsChart from "../../components/Charts/VisitorsChart";
import SalesOverview from "../../components/Analytics/SalesOverview";


const Analytics = () => {
  return (
    <div className="analytics-page">

      <div className="analytics-header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p>
            Monitor business performance, sales and customer insights.
          </p>
        </div>

        <button className="export-btn">
          Export Report
        </button>
      </div>

      {/* KPI Cards */}
      <AnalyticsCards />

      {/* Charts */}
      <div className="analytics-grid">

        <div className="analytics-card large">
          <KPIChart />
        </div>

        <div className="analytics-card">
          <VisitorsChart />
        </div>

      </div>

      {/* Sales Overview */}

      <div className="analytics-card">
        <SalesOverview />
      </div>

    </div>
  );
};

export default Analytics;