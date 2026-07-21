import { useEffect } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import "./Toast.css";

const Toast = ({
  message,
  type = "success",
  show,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle />;
      case "error":
        return <FaExclamationCircle />;
      case "info":
        return <FaInfoCircle />;
      default:
        return <FaCheckCircle />;
    }
  };

  return (
    <div className={`toast ${type}`}>
      <div className="toast-left">
        <span className="toast-icon">
          {getIcon()}
        </span>

        <span className="toast-message">
          {message}
        </span>
      </div>

      <button
        className="toast-close"
        onClick={onClose}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Toast;