import React, { useState } from "react";
import TheHeader from "./TheHeader";
import TheSidebar from "./TheSidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-200">
      <TheSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TheHeader onToggle={() => setIsOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="mx-auto px-6 py-2">
            <Outlet />{" "}
          </div>
        </main>
      </div>
    </div>
  );
}
