export const calendarDays = [
  "Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"
];

export const calendarDates = Array.from({ length: 35 }, (_, i) => {
  if (i > 4 && i < 36) return i - 4;
  return "";
});

export const highlightedDays = [1, 4]; 

export const appointments = [
  {
    id: 1,
    title: "Dentist",
    time: "09:00–11:00",
    doctor: "Dr. Cameron Williamson",
    bgColor: "#e0e7ff",
  },
  {
    id: 2,
    title: "Physiotherapy Appointment",
    time: "11:00–12:00",
    doctor: "Dr. Kevin Djones",
    bgColor: "#e0f7fa",
  },
];
