import React from "react";

const activityData = [
  { day: "Mon", count: 2 },
  { day: "Tues", count: 5 },
  { day: "Wed", count: 3 },
  { day: "Thurs", count: 4 },
  { day: "Fri", count: 6 },
  { day: "Sat", count: 1 },
  { day: "Sun", count: 0 },
];

export default function ActivityFeed() {
  const maxCount = Math.max(...activityData.map((d) => d.count));
  return (
    <div>
      <div className="text-lg font-semibold mb-2">Activity</div>
      <div className="text-sm mb-4">{activityData.reduce((acc, d) => acc + d.count, 0)} appointments on this week</div>
      <div className="flex flex-col gap-2 text-gray-500">
        {activityData.map(({ day, count }, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-12 text-left">{day}</span>
            <div
              className="bg-blue-500 rounded-lg"
              style={{ width: `${(count / maxCount) * 100}%`, height: "1rem" }}
            ></div>
            <span className="w-6 text-right">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
