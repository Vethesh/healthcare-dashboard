import React from "react";
import humanAnatomyImage from "../assets/images/human-anatomy-human-body.jpg";

export default function AnatomySection({ indicators }) {
  return (
    <div className="flex-1 bg-[#f9f9ff] rounded-xl p-4 relative flex flex-col items-center">
      <div className="w-36 h-80 rounded-lg overflow-hidden">
        <img src={humanAnatomyImage} alt="Human Anatomy" className="w-full h-full object-cover object-top" />
      </div>

      {indicators.map((indicator) => (
        <div
          key={indicator.id}
          className="absolute text-white text-sm px-3 py-1 rounded-full"
          style={{
            backgroundColor: indicator.color,
            top: indicator.position.top,
            right: indicator.position.right,
            bottom: indicator.position.bottom,
            left: indicator.position.left,
          }}
        >
          {indicator.name}
        </div>
      ))}
    </div>
  );
}
