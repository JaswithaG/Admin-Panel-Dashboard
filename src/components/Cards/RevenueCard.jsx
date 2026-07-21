import "./RevenueCard.css";

const RevenueCard = () => {
  return (
    <div className="revenue-card">

      <h3>Monthly Revenue</h3>

      <div className="revenue-amount">
        $48,290
      </div>

      <div className="revenue-growth">
        ↑ 12.5% compared to last month
      </div>

    </div>
  );
};

export default RevenueCard;