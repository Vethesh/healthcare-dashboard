import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import humanAnatomyImage from "../assets/images/human-anatomy-human-body.jpg";
import { healthIndicators } from "../data/healthIndicators";
import { healthStatusCards } from "../data/healthStatusCards";
import { calendarDays, calendarDates, highlightedDays, appointments } from "../data/calendarData";
import { upcomingAppointments } from "../data/upcomingAppointments";

export default function DashboardMainContent() {
  return (
    <div className="p-6 bg-white">
      <div className="text-2xl font-semibold mb-4">Dashboard</div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 rounded-2xl shadow p-4 flex flex-col gap-4 bg-white">
          <div className="flex gap-4">
            <AnatomySection indicators={healthIndicators} />
            <HealthStatusCards cards={healthStatusCards} />
          </div>
          <div className="mt-6">
            <ActivityFeed />
          </div>
        </div>
        <div>
          <CalendarView
            days={calendarDays}
            dates={calendarDates}
            highlightedDays={highlightedDays}
            appointments={appointments}
          />
          <div className="text-sm font-semibold mt-4">The Upcoming Schedule</div>
          <UpcomingSchedule appointments={upcomingAppointments} />
        </div>
      </div>
    </div>
  );
}
