import "./Charts.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  {
    month: "Jan",
    sales: 400,
  },
  {
    month: "Feb",
    sales: 700,
  },
  {
    month: "Mar",
    sales: 600,
  },
  {
    month: "Apr",
    sales: 900,
  },
  {
    month: "May",
    sales: 1200,
  },
  {
    month: "Jun",
    sales: 1000,
  },
  {
    month: "Jul",
    sales: 1500,
  },
];

const SalesChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="sales"
            fill="#10B981"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;