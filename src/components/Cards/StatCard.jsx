import "./StatCard.css";

const StatCard = ({
  title,
  value,
  change,
  color,
  icon,
}) => {
  return (
    <div className="stat-card">

      <div className="stat-left">

        <p>{title}</p>

        <h2>{value}</h2>

        <span
          style={{color}}
        >
          {change} this month
        </span>

      </div>

      <div
        className="stat-icon"
        style={{background:color}}
      >
        {icon}
      </div>

    </div>
  );
};

export default StatCard;