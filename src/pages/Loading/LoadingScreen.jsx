import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">

      <div className="loading-container">

        <div className="loader"></div>

        <h2>Admin Dashboard</h2>

        <p>Loading, please wait...</p>

      </div>

    </div>
  );
};

export default LoadingScreen;