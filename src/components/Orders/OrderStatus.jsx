import "./OrderStatus.css";

const OrderStatus = ({ status, onChange }) => {
  const statusClass = status
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div className="order-status-container">
      <span className={`status-badge ${statusClass}`}>
        {status}
      </span>

      <select
        className="status-select"
        value={status}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </div>
  );
};

export default OrderStatus;