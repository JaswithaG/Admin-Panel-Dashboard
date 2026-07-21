import { useState } from "react";
import CalendarWidget from "./CalendarWidget";
import EventModal from "./EventModal";
import "./Calendar.css";

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Team Meeting",
      date: "2026-07-20",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Product Launch",
      date: "2026-07-25",
      time: "02:00 PM",
    },
    {
      id: 3,
      title: "Client Call",
      date: "2026-07-28",
      time: "11:30 AM",
    },
  ]);

  const addEvent = (event) => {
    setEvents([
      ...events,
      {
        ...event,
        id: Date.now(),
      },
    ]);
  };

  return (
    <div className="calendar-page">

      <div className="calendar-header">
        <div>
          <h1>Calendar</h1>
          <p>Manage your meetings and events</p>
        </div>

        <button
          className="add-event-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Event
        </button>
      </div>

      <div className="calendar-grid">

        <div className="calendar-widget-card">
          <CalendarWidget />
        </div>

        <div className="event-list-card">
          <h2>Upcoming Events</h2>

          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="event-item"
              >
                <h4>{event.title}</h4>

                <p>{event.date}</p>

                <span>{event.time}</span>
              </div>
            ))
          )}
        </div>

      </div>

      {showModal && (
        <EventModal
          onClose={() => setShowModal(false)}
          addEvent={addEvent}
        />
      )}

    </div>
  );
};

export default Calendar;