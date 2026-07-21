import { useState } from "react";

const CalendarWidget = () => {
  const today = new Date();

  const [currentDate] = useState(today);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();

  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return (
    <div className="calendar-widget">
      <h2>
        {monthName} {year}
      </h2>

      <div className="calendar-days-header">
        {weekDays.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-days">

        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={index}></div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, index) => (
          <div
            key={index}
            className={
              index + 1 === today.getDate()
                ? "calendar-day active"
                : "calendar-day"
            }
          >
            {index + 1}
          </div>
        ))}

      </div>
    </div>
  );
};

export default CalendarWidget;