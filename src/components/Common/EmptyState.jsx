import { FaInbox } from "react-icons/fa";
import "./EmptyState.css";

const EmptyState = ({
  title = "No Data Found",
  message = "There is nothing to display.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="empty-state">

      <FaInbox className="empty-icon" />

      <h2>{title}</h2>

      <p>{message}</p>

      {buttonText && (
        <button
          className="empty-btn"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      )}

    </div>
  );
};

export default EmptyState;