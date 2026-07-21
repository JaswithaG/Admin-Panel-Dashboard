import { useState } from "react";
import "./EventModal.css";

const EventModal = ({ onClose, addEvent }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEvent(formData);

    onClose();
  };

  return (
    <div className="event-modal-overlay">

      <div className="event-modal">

        <div className="event-modal-header">
          <h2>Add Event</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          className="event-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Event Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter event title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save Event
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EventModal;