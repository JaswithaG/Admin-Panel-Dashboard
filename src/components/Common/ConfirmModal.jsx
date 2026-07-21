import { FaExclamationTriangle } from "react-icons/fa";
import "./ConfirmModal.css";

const ConfirmModal = ({
  show,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;

  return (
    <div
      className="confirm-overlay"
      onClick={onCancel}
    >
      <div
        className="confirm-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="confirm-icon">
          <FaExclamationTriangle />
        </div>

        <h2>{title}</h2>

        <p>{message}</p>

        <div className="confirm-buttons">
          <button
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="confirm-button"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;