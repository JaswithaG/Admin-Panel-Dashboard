import "./Charts.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const trafficData = [
  {
    month: "Jan",
    visitors: 4200,
    pageViews: 8500,
  },
  {
    month: "Feb",
    visitors: 5100,
    pageViews: 9800,
  },
  {
    month: "Mar",
    visitors: 4800,
    pageViews: 9200,
  },
  {
    month: "Apr",
    visitors: 6200,
    pageViews: 12000,
  },
  {
    month: "May",
    visitors: 7000,
    pageViews: 13500,
  },
  {
    month: "Jun",
    visitors: 8200,
    pageViews: 15000,
  },
  {
    month: "Jul",
    visitors: 9100,
    pageViews: 17000,
  },
];

const TrafficChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={trafficData}>
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
                stopColor="#2563EB"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#2563EB"
                stopOpacity={0}
              />
            </linearGradient>

            <linearGradient
              id="pageGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#10B981"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#10B981"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Area
            type="monotone"
            dataKey="visitors"
            stroke="#2563EB"
            fill="url(#visitorGradient)"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="pageViews"
            stroke="#10B981"
            fill="url(#pageGradient)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficChart;