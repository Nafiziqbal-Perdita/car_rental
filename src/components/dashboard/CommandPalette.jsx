"use client";

import React, { useEffect, useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { IconSearch, IconX, IconDashboard, IconProducts, IconPOS, IconPlus } from "./Icons";

export default function CommandPalette() {
  const { activeModal, setActiveModal, setSearchQuery, showToast, quickActions } = useDashboard();
  const [input, setInput] = useState("");

  // Listen to Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setActiveModal((prev) => (prev === "commandPalette" ? null : "commandPalette"));
      } else if (e.key === "Escape" && activeModal === "commandPalette") {
        setActiveModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal, setActiveModal]);

  if (activeModal !== "commandPalette") return null;

  const actionIcons = {
    "create-order": IconPlus,
    "open-pos": IconPOS,
    "view-transactions": IconDashboard,
    "view-fleet": IconProducts
  };

  const handleAction = (act) => {
    setActiveModal(act.modal);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchQuery(input.trim());
      showToast(`Filter applied: "${input}"`);
      setActiveModal(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Search Input Box */}
        <form onSubmit={handleSearchSubmit} className="flex items-center px-4 border-b border-slate-100">
          <IconSearch className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command, car model, customer or order #..."
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-3 py-3.5 text-sm bg-transparent border-none focus:outline-none text-slate-800 placeholder-slate-400"
          />
          <button
            type="button"
            onClick={() => setActiveModal(null)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
          >
            <IconX className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Shortcuts */}
        <div className="p-3">
          <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Quick Actions
          </div>
          <div className="space-y-1 mt-1">
            {quickActions.map((item) => {
              const Icon = actionIcons[item.id];
              return (
                <button
                  key={item.label}
                  onClick={() => handleAction(item)}
                  className="w-full flex items-center justify-between p-2 rounded-xl text-left hover:bg-orange-50/60 hover:text-[#FA7222] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#FFF4EB] group-hover:text-[#FA7222] text-slate-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-[#FA7222]">{item.label}</div>
                      <div className="text-[11px] text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400">↵ Jump</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>Navigate with ↵ Enter</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
