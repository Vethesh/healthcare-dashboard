import React from "react";

export default function CalendarView({ days, dates, highlightedDays, appointments }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-4">
      <div className="text-sm font-semibold text-gray-500">October 2021</div>
      <div className="grid grid-cols-7 text-xs text-gray-600 gap-1">
        {days.map((day, i) => (
          <div key={i} className="text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {dates.map((date, i) => (
          <div
            key={i}
            className={`h-8 flex items-center justify-center rounded ${
              highlightedDays.includes(i % 7) ? "bg-blue-200" : "bg-transparent"
            }`}
          >
            {date}
          </div>
        ))}
      </div>
      {appointments.map((appt) => (
        <div
          key={appt.id}
          className="p-3 rounded-xl mt-2"
          style={{ backgroundColor: appt.bgColor }}
        >
          <div className="text-sm font-medium">{appt.title}</div>
          <div className="text-xs">
            {appt.time}
            <br />
            {appt.doctor}
          </div>
        </div>
      ))}
    </div>
  );
}
