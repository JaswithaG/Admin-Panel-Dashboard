import "./SkeletonLoader.css";

const SkeletonLoader = ({
  rows = 5,
  height = 20,
}) => {
  return (
    <div className="skeleton-container">

      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="skeleton-item"
          style={{ height: `${height}px` }}
        ></div>
      ))}

    </div>
  );
};

export default SkeletonLoader;