"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useDashboard } from "@/context/DashboardContext";
import {
  IconSearch,
  IconCloud,
  IconPlus,
  IconPOS,
  IconUSFlag,
  IconFullscreen,
  IconMail,
  IconBell,
  IconSettings,
  IconChevronDown
} from "./Icons";

export default function Header() {
  const {
    user,
    searchQuery,
    setSearchQuery,
    setActiveModal,
    setIsMobileSidebarOpen,
    notifications,
    messages,
    showToast
  } = useDashboard();

  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      showToast("Entered fullscreen mode");
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        showToast("Exited fullscreen mode");
      }
    }
  };

  const unreadMessagesCount = messages.filter((m) => m.unread).length;
  const unreadNotificationsCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 h-[65px] px-4 sm:px-6 bg-white border-b border-[#E6EAED] min-w-0">
      {/* Left: Mobile Hamburger & Search Bar */}
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 max-w-sm lg:max-w-sm">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
          aria-label="Open Navigation Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Global Search Bar (border-radius: 8px; border: 1px solid #E6EAED) */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
            <IconSearch className="w-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full pl-9 pr-12 py-1.5 text-[13px] bg-white border border-[#E6EAED] rounded-[8px] text-[#212B36] placeholder-[#7A8086] focus:outline-none focus:ring-1 focus:ring-[#FE9F43] focus:border-[#FE9F43] transition-all"
          />
          <button
            onClick={() => setActiveModal("commandPalette")}
            title="Open Command Search (Ctrl+K)"
            className="absolute inset-y-1.5 right-1.5 flex items-center px-1.5 text-[10px] font-bold text-slate-400 bg-slate-50 border border-[#E6EAED] rounded-[4px] hover:text-[#212B36]"
          >
            ⌘ K
          </button>
        </div>
      </div>

      {/* Right Side Header Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        {/* Coming Soon Pill Dropdown */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setIsComingSoonOpen(!isComingSoonOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold text-white bg-[#0F172A] hover:bg-slate-800 rounded-[6px] transition-colors"
          >
            <IconCloud className="w-3.5 h-3.5" />
            <span>Coming Soon</span>
            <IconChevronDown className="w-3 h-3 text-slate-300" />
          </button>

          {isComingSoonOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#E6EAED] py-2 z-50 animate-fadeIn">
              <div className="px-3 py-1 text-[11px] font-bold text-[#092C4C] uppercase tracking-wider">
                Upcoming Modules
              </div>
              <button
                onClick={() => {
                  showToast("AI Inventory Forecast module coming in v2.4");
                  setIsComingSoonOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs text-[#212B36] hover:bg-slate-50 transition-colors"
              >
                AI Fleet Tracking
              </button>
              <button
                onClick={() => {
                  showToast("Multi-branch sync module coming soon");
                  setIsComingSoonOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs text-[#212B36] hover:bg-slate-50 transition-colors"
              >
                Automated Invoicing
              </button>
            </div>
          )}
        </div>

        {/* Add New Primary Button (background: #FF9F43 / #FA7222) */}
        <button
          onClick={() => setActiveModal("addNew")}
          className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-[12px] font-bold text-white bg-[#FE9F43] hover:bg-[#E05E12] active:scale-[0.98] rounded-[6px] transition-all shadow-2xs"
        >
          <IconPlus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Add New</span>
        </button>

        {/* POS Button (background: #092C4C / #0B192C) */}
        <button
          onClick={() => setActiveModal("pos")}
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 text-[12px] font-bold text-white bg-[#092C4C] hover:bg-[#0B192C] active:scale-[0.98] rounded-[6px] transition-all shadow-2xs"
        >
          <IconPOS className="w-3.5 h-3.5" />
          <span>POS</span>
        </button>

        {/* US Flag / Country Selector */}
        <div className="relative group ml-1 hidden lg:block">
          <button
            onClick={() => showToast("Store Region: United States (USD $)")}
            className="flex items-center justify-center p-1 rounded-md hover:bg-slate-100 transition-colors"
            title="Region: US (English)"
          >
            <IconUSFlag className="w-5 h-3.5 rounded-xs" />
          </button>
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="hidden lg:flex items-center justify-center w-8 h-8 text-[#646B72] hover:text-[#212B36] hover:bg-slate-100 rounded-md transition-colors"
          title="Toggle Fullscreen"
          aria-label="Toggle Fullscreen"
        >
          <IconFullscreen className="w-4 h-4" />
        </button>

        {/* Messages Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsMessagesOpen(!isMessagesOpen);
              setIsNotificationsOpen(false);
            }}
            className="relative flex items-center justify-center w-8 h-8 text-[#646B72] hover:text-[#212B36] hover:bg-slate-100 rounded-md transition-colors"
            title="Messages"
            aria-label="Messages"
          >
            <IconMail className="w-4 h-4" />
            {unreadMessagesCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[15px] h-[15px] px-0.5 text-[9px] font-bold text-white bg-[#E70D0D] rounded-full ring-2 ring-white">
                01
              </span>
            )}
          </button>

          {isMessagesOpen && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-xl border border-[#E6EAED] py-2 z-50 animate-fadeIn">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100">
                <span className="text-xs font-bold text-[#212B36]">Messages</span>
                <span className="text-[10px] text-[#646B72] font-medium">Mark all read</span>
              </div>
              <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      showToast(`Opened message: ${m.subject}`);
                      setIsMessagesOpen(false);
                    }}
                    className={`p-3 hover:bg-slate-50 cursor-pointer transition-colors ${
                      m.unread ? "bg-orange-50/30" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-[#212B36]">
                      <span>{m.sender}</span>
                      <span className="text-[10px] text-slate-400">{m.time}</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-700 truncate">{m.subject}</div>
                    <div className="text-[11px] text-slate-500 truncate">{m.snippet}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen);
              setIsMessagesOpen(false);
            }}
            className="relative flex items-center justify-center w-8 h-8 text-[#646B72] hover:text-[#212B36] hover:bg-slate-100 rounded-md transition-colors"
            title="Notifications"
            aria-label="Notifications"
          >
            <IconBell className="w-4 h-4" />
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FE9F43] rounded-full ring-2 ring-white" />
            )}
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-xl border border-[#E6EAED] py-2 z-50 animate-fadeIn">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100">
                <span className="text-xs font-bold text-[#212B36]">Notifications</span>
                <span className="text-[10px] text-[#FE9F43] font-semibold cursor-pointer">Clear all</span>
              </div>
              <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      showToast(`Viewed: ${n.title}`);
                      setIsNotificationsOpen(false);
                    }}
                    className={`p-3 hover:bg-slate-50 cursor-pointer transition-colors ${
                      n.unread ? "bg-amber-50/30" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-[#212B36]">
                      <span>{n.title}</span>
                      <span className="text-[10px] text-slate-400">{n.time}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{n.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Settings Button */}
        <button
          onClick={() => showToast("Opened System & Store Settings")}
          className="hidden sm:flex items-center justify-center w-8 h-8 text-[#646B72] hover:text-[#212B36] hover:bg-slate-100 rounded-md transition-colors"
          title="Settings"
          aria-label="Settings"
        >
          <IconSettings className="w-4 h-4" />
        </button>

        {/* User Profile Avatar (Mike Witzel in white shirt) */}
        <div className="relative ml-1">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-0.5 rounded-full hover:ring-2 hover:ring-[#FE9F43]/40 transition-all"
            title="User Profile"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shadow-2xs">
              <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
                {/* Background & Skin */}
                <rect width="36" height="36" fill="#F8FAFC" />
                <circle cx="18" cy="13" r="6" fill="#FDBA74" />
                {/* Hair */}
                <path d="M12 12 C12 7 15 5 18 5 C21 5 24 7 24 12 Z" fill="#451A03" />
                {/* White Shirt / Torso */}
                <path d="M8 32 C8 24 13 22 18 22 C23 22 28 24 28 32 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                <path d="M16 22 L18 26 L20 22" stroke="#94A3B8" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#E6EAED] py-2 z-50 animate-fadeIn">
              <div className="px-3 py-2 border-b border-slate-100">
                <div className="text-xs font-bold text-[#212B36]">{user.name}</div>
                <div className="text-[11px] text-slate-500">{user.email}</div>
                <div className="mt-1 inline-block px-1.5 py-0.5 text-[9px] font-bold text-[#FE9F43] bg-[#FFF6EE] rounded">
                  {user.role}
                </div>
              </div>
              <div className="py-1">
                <button
                  onClick={() => {
                    showToast("Navigated to Profile Settings");
                    setIsProfileOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs text-[#212B36] hover:bg-slate-50"
                >
                  My Profile
                </button>
                <button
                  onClick={() => {
                    showToast("Switched store branch");
                    setIsProfileOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs text-[#212B36] hover:bg-slate-50"
                >
                  Store Preferences
                </button>
                <div className="border-t border-slate-100 my-1" />
                <button
                  onClick={() => {
                    showToast("Logged out of store session");
                    setIsProfileOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
