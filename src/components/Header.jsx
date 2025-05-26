import React from "react";
import { MdSearch, MdPerson, MdAdd } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <MdSearch className="text-gray-400 w-5 h-5 absolute ml-3 pointer-events-none" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#f0f4f8] text-sm px-10 py-2 rounded-full w-64 outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <MdPerson className="w-5 h-5 text-gray-500 rounded-full" />
        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white">
          <MdAdd className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
