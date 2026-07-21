import "./DashboardCards.css";
import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa";

import StatCard from "./StatCard";

const DashboardCards = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$48,290",
      change: "+12.5%",
      color: "#2563eb",
      icon: <FaDollarSign />,
    },
    {
      title: "Orders",
      value: "2,450",
      change: "+8.2%",
      color: "#10b981",
      icon: <FaShoppingCart />,
    },
    {
      title: "Customers",
      value: "1,280",
      change: "+15.4%",
      color: "#f59e0b",
      icon: <FaUsers />,
    },
    {
      title: "Products",
      value: "542",
      change: "+5.6%",
      color: "#ef4444",
      icon: <FaBoxOpen />,
    },
  ];

  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <StatCard
          key={index}
          {...card}
        />
      ))}
    </div>
  );
};

export default DashboardCards;