// src/components/Layout/Topbar.tsx
import { Search, Bell, Sun } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-[var(--card-bg)] border-b flex items-center justify-between px-6 sticky top-0">
      {/* Left */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1 rounded-lg border bg-gray-50 focus:outline-none focus:ring focus:ring-brand-primary"
          />
        </div>
        <button className="relative">
          <Bell size={18}/>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
        </button>
        <button>
          <Sun size={18}/>
        </button>
      </div>
    </header>
  );
}
