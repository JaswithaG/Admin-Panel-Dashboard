import "./Analytics.css";

const products = [
  {
    id: 1,
    name: "MacBook Pro",
    sold: 245,
    revenue: "$61,250",
    progress: 95,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    sold: 198,
    revenue: "$49,500",
    progress: 82,
  },
  {
    id: 3,
    name: "AirPods Pro",
    sold: 165,
    revenue: "$24,750",
    progress: 70,
  },
  {
    id: 4,
    name: "Apple Watch",
    sold: 122,
    revenue: "$18,300",
    progress: 55,
  },
];

const SalesOverview = () => {
  return (
    <div className="sales-overview">
      <div className="sales-header">
        <h2>Top Selling Products</h2>
        <p>This Month</p>
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="sales-item"
        >
          <div className="sales-info">
            <h4>{product.name}</h4>

            <span>
              {product.sold} Units Sold
            </span>
          </div>

          <div className="sales-revenue">
            {product.revenue}
          </div>

          <div className="progress-wrapper">
            <div
              className="progress-bar"
              style={{
                width: `${product.progress}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesOverview;