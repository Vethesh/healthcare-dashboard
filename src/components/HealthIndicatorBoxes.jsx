import React from "react";

const boxStyle = "bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center space-y-2";

const placeholderSVG = (label, color) => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill={color} rx="12" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#333" fontSize="14" fontFamily="Arial">{label}</text>
  </svg>
);

export default function HealthIndicatorBoxes() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4">
      <div className={boxStyle}>
        {placeholderSVG("Lungs", "#A0D8EF")}
        <div className="text-sm font-semibold">Lungs</div>
      </div>
      <div className={boxStyle}>
        {placeholderSVG("Teeth", "#F9D5A7")}
        <div className="text-sm font-semibold">Teeth</div>
      </div>
      <div className={boxStyle}>
        {placeholderSVG("Bones", "#D3D3D3")}
        <div className="text-sm font-semibold">Bones</div>
      </div>
    </div>
  );
}
