import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="p-10 h-screen w-full bg-[#111] text-white">
      <Header />
     <CreateTask/>
     <AllTask/>
    </div>
  );
};

export default AdminDashboard;
