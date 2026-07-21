import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";

import "./Analytics.css";

const AnalyticsCards = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$128,540",
      change: "+12.5%",
      icon: <FaDollarSign />,
      color: "#16a34a",
    },
    {
      title: "Total Users",
      value: "8,540",
      change: "+8.2%",
      icon: <FaUsers />,
      color: "#2563eb",
    },
    {
      title: "Orders",
      value: "2,315",
      change: "+15.7%",
      icon: <FaShoppingCart />,
      color: "#f59e0b",
    },
    {
      title: "Growth",
      value: "24.6%",
      change: "+5.1%",
      icon: <FaChartLine />,
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="analytics-cards">
      {cards.map((card, index) => (
        <div
          key={index}
          className="analytics-stat-card"
        >
          <div className="stat-top">
            <div
              className="stat-icon"
              style={{
                background: card.color,
              }}
            >
              {card.icon}
            </div>

            <span
              className="stat-change"
              style={{
                color: card.color,
              }}
            >
              {card.change}
            </span>
          </div>

          <h3>{card.value}</h3>

          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;