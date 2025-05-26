import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

export default function UpcomingSchedule({ appointments }) {
  return (
    <div className="flex flex-col gap-2 text-xs">
      {appointments.map((appt) => (
        <SimpleAppointmentCard
          key={appt.id}
          title={appt.title}
          time={appt.time}
          bgColor={appt.bgColor}
        />
      ))}
    </div>
  );
}
