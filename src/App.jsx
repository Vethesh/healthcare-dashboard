import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

export default function App() {
  return (
    <div className="flex w-full h-[100] bg-white text-[#2f3c4d] font-sans">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}
// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import DashboardMainContent from "./components/DashboardMainContent";
// import "./App.css";

// export default function App() {
//   return (
//     <div className="flex h-screen w-full font-sans text-[#2f3c4d]">
//     
//       <div className="w-64 h-screen bg-white shadow-md">
//         <Sidebar />
//       </div>

//       <div className="flex flex-col flex-grow bg-[#f9fafb] overflow-auto">
//         <Header />
//         <DashboardMainContent />
//       </div>
//     </div>
//   );
// }
