import React from "react";
import { generalLinks, toolLinks, settingsLinks } from "../data/navigationLinks";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white p-6 shadow-md flex flex-col gap-4">

      <div className="text-2xl font-bold text-[#00bcd4] mb-6">
        Health<span className="text-[#2f3c4d]">care.</span>
      </div>
      <div className="text-xs uppercase text-gray-500">General</div>
      <nav className="flex flex-col gap-2">
        {generalLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 text-[#2f3c4d] py-2 px-3 rounded-lg hover:bg-[#f0f4f8]"
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>
      <div className="text-xs uppercase text-gray-500 mt-6">Tools</div>
      <nav className="flex flex-col gap-2">
        {toolLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 text-[#2f3c4d] py-2 px-3 rounded-lg hover:bg-[#f0f4f8]"
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span> 
            </div>
          );
        })}
      </nav>
      {/* <div className="text-xs uppercase text-gray-500 md-6 ">setting</div> */}
      <nav className="mt-auto pt-6 border-t flex flex-col gap-2">
        {settingsLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 text-[#2f3c4d] py-2 px-3 rounded-lg hover:bg-[#f0f4f8]"
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
