import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./Charts.css";

const data = [
  { day: "Mon", visitors: 1200 },
  { day: "Tue", visitors: 1700 },
  { day: "Wed", visitors: 1500 },
  { day: "Thu", visitors: 2100 },
  { day: "Fri", visitors: 2500 },
  { day: "Sat", visitors: 2200 },
  { day: "Sun", visitors: 2800 },
];

const VisitorsChart = () => {
  return (
    <div className="visitors-chart">
      <div className="chart-header">
        <div>
          <h2>Website Visitors</h2>
          <p>Last 7 Days</p>
        </div>

        <div className="visitor-total">
          <span>Total</span>
          <h3>14,000</h3>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="visitorGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#2563eb"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#2563eb"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="visitors"
            stroke="#2563eb"
            strokeWidth={3}
            fill="url(#visitorGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorsChart;