import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import "./Charts.css";

const data = [
  {
    month: "Jan",
    revenue: 12000,
    sales: 9000,
  },
  {
    month: "Feb",
    revenue: 18000,
    sales: 14000,
  },
  {
    month: "Mar",
    revenue: 22000,
    sales: 18000,
  },
  {
    month: "Apr",
    revenue: 27000,
    sales: 22000,
  },
  {
    month: "May",
    revenue: 31000,
    sales: 26000,
  },
  {
    month: "Jun",
    revenue: 36000,
    sales: 30000,
  },
  {
    month: "Jul",
    revenue: 42000,
    sales: 35000,
  },
];

const KPIChart = () => {
  return (
    <div className="kpi-chart">
      <div className="chart-header">
        <h2>Revenue Overview</h2>
        <p>Monthly Revenue vs Sales</p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KPIChart;