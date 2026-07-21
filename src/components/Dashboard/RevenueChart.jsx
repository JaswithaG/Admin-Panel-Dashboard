import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const data = {
    labels: [
      "Products",
      "Services",
      "Subscriptions",
    ],

    datasets: [
      {
        data: [45, 30, 25],

        backgroundColor: [
          "#2563eb",
          "#10b981",
          "#f59e0b",
        ],
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      }}
    />
  );
};

export default RevenueChart;