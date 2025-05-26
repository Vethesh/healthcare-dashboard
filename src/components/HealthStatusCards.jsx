import React from "react";

export default function HealthStatusCards({ cards }) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      {cards.map((card) => (
        <div key={card.id} className="bg-white border rounded-xl p-3 shadow-sm">
          <div className="flex items-center">
            {card.image && (
              <img src={card.image} alt={card.name} className="w-12 h-12 object-cover rounded-md mr-2" />
            )}
            <span className="text-sm font-medium">{card.name}</span>
          </div>
          <div className="flex justify-end">
            <span className="text-xs text-gray-400">Date: {card.date}</span>
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div
              className={`h-2 rounded-full ${
                card.color === "green" ? "bg-green-400" : "bg-red-400"
              }`}
              style={{ width: `${card.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>

  );
}
