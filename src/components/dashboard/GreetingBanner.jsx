"use client";

import React, { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import {
  IconCalendar,
  IconRefresh,
  IconChevronUp,
  IconChevronDown,
  IconCheck
} from "./Icons";

export default function GreetingBanner() {
  const {
    user,
    dateRange,
    setDateRange,
    datePresets,
    isRefreshing,
    triggerRefresh,
    isBannerCollapsed,
    setIsBannerCollapsed,
    showToast
  } = useDashboard();

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleSelectDate = (preset) => {
    setDateRange(preset);
    setIsDatePickerOpen(false);
    showToast(`Dashboard filtered for: ${preset}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 min-h-[68px] md:h-[68px] bg-white shadow-[0px_4px_60px_rgba(231,231,231,0.47)] rounded-[8px] px-4 sm:px-5 py-3.5 md:py-[15px] mb-6 min-w-0">
      {/* Left: Wave Icon & Greeting Text */}
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="text-[22px] select-none" role="img" aria-label="Waving hand">
          👋
        </span>
        <h1 className="text-[17px] sm:text-[20px] font-bold text-[#1B2850] tracking-tight leading-[21px] truncate">
          Hi {user.name}, <span className="font-normal text-[#646B72]">here&apos;s what&apos;s happening with your store today.</span>
        </h1>
      </div>

      {/* Right Controls: Date Range Container & Actions */}
      <div className="flex items-center gap-2 self-stretch md:self-auto shrink-0 w-full md:w-auto min-w-0">
        {/* Date Container (width: 224px; height: 38px; border: 1px solid rgba(145, 158, 171, 0.3); border-radius: 8px) */}
        <div className="relative">
          <button
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            className="flex items-center justify-between gap-2 px-3 h-[38px] w-full md:min-w-[200px] text-[15px] font-normal text-[#092C4C] bg-white hover:bg-slate-50 border border-[rgba(145,158,171,0.3)] rounded-[8px] transition-all"
          >
            <div className="flex items-center gap-2">
              <IconCalendar className="w-4 h-4 text-[#092C4C]" />
              <span className="truncate">{dateRange}</span>
            </div>
            <IconChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {/* Date Picker Dropdown Popover */}
          {isDatePickerOpen && (
            <div className="absolute right-0 mt-1.5 w-64 bg-white rounded-xl shadow-xl border border-[#E6EAED] py-2 z-50 animate-fadeIn">
              <div className="px-3 py-1 text-[11px] font-bold text-[#092C4C] uppercase tracking-wider border-b border-slate-100">
                Select Date Range
              </div>
              <div className="py-1">
                {datePresets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handleSelectDate(preset)}
                    className="w-full flex items-center justify-between px-3 py-2 text-[13px] text-[#212B36] hover:bg-[#FFF6EE] hover:text-[#FE9F43] transition-colors"
                  >
                    <span>{preset}</span>
                    {dateRange === preset && <IconCheck className="w-4 h-4 text-[#FE9F43]" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Refresh Container (width: 38px; height: 38px; border: 1px solid rgba(145, 158, 171, 0.3); border-radius: 8px;) */}
        <button
          onClick={triggerRefresh}
          disabled={isRefreshing}
          className="w-[38px] h-[38px] flex items-center justify-center text-[#092C4C] bg-white hover:bg-slate-50 border border-[rgba(145,158,171,0.3)] rounded-[8px] transition-all disabled:opacity-50"
          title="Refresh Data"
          aria-label="Refresh Data"
        >
          <IconRefresh className={`w-4 h-4 ${isRefreshing ? "animate-spin text-[#FE9F43]" : "text-[#092C4C]"}`} />
        </button>

        {/* Expand / Collapse Container (width: 38px; height: 38px; border: 1px solid rgba(145, 158, 171, 0.3); border-radius: 8px;) */}
        <button
          onClick={() => setIsBannerCollapsed(!isBannerCollapsed)}
          className="w-[38px] h-[38px] flex items-center justify-center text-[#092C4C] bg-white hover:bg-slate-50 border border-[rgba(145,158,171,0.3)] rounded-[8px] transition-all"
          title={isBannerCollapsed ? "Expand Metrics" : "Collapse Metrics"}
          aria-label={isBannerCollapsed ? "Expand Metrics" : "Collapse Metrics"}
        >
          {isBannerCollapsed ? (
            <IconChevronDown className="w-4 h-4 text-[#092C4C]" />
          ) : (
            <IconChevronUp className="w-4 h-4 text-[#092C4C]" />
          )}
        </button>
      </div>
    </div>
  );
}
