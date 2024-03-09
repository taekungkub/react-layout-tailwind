import { AlignJustify } from "lucide-react";
import React from "react";

type Props = {
  onToggle: () => void;
};

export default function TheHeader({ onToggle }: Props) {
  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 bg-white   ">
        <div className="flex items-center">
          <div className="lg:hidden">
            <button onClick={onToggle}>
              <AlignJustify />
            </button>
          </div>
          <div className="relative mx-4 lg:mx-0">
            <input
              className="w-32 pl-10 pr-4 py-2 text-indigo-600 border-2 border-gray-200 rounded-lg sm:w-64 focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
