import "./RevenueWidget.css";
import { FaArrowTrendUp } from "react-icons/fa6";

const RevenueWidget = () => {
  return (
    <div className="revenue-widget">

      <div className="revenue-top">

        <div>
          <h3>Total Revenue</h3>
          <h1>$48,290</h1>
        </div>

        <div className="trend-icon">
          <FaArrowTrendUp />
        </div>

      </div>

      <div className="progress-section">

        <div className="progress-header">
          <span>Monthly Target</span>
          <span>78%</span>
        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: "78%" }}
          ></div>

        </div>

      </div>

      <div className="revenue-footer">

        <div>
          <h4>This Month</h4>
          <p>$12,850</p>
        </div>

        <div>
          <h4>Growth</h4>
          <p className="positive">
            +18.4%
          </p>
        </div>

      </div>

    </div>
  );
};

export default RevenueWidget;