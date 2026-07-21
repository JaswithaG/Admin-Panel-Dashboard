import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="error-page">

      <div className="error-card">

        <h1>⚠</h1>

        <h2>Something Went Wrong</h2>

        <p>
          Sorry, an unexpected error occurred while loading this page.
          Please try again or return to the dashboard.
        </p>

        <div className="error-buttons">

          <button
            className="retry-btn"
            onClick={reloadPage}
          >
            Retry
          </button>

          <Link
            to="/"
            className="home-btn"
          >
            Back to Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ErrorPage;