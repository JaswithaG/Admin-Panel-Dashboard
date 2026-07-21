import { FaTimes } from "react-icons/fa";
import UserForm from "./UserForm";
import "./UserModal.css";

const UserModal = ({
  user,
  onSave,
  onClose,
}) => {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>
            {user ? "Edit User" : "Add User"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          <UserForm
            user={user}
            onSave={onSave}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default UserModal;