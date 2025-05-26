import React from "react";

export default function SimpleAppointmentCard({ title, time, bgColor }) {
  return (
    <div className="p-3 rounded-xl text-xs" style={{ backgroundColor: bgColor }}>
      <div>{title}</div>
      <div>{time}</div>
    </div>
  );
}
