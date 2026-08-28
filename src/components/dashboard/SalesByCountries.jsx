"use client";

import React, { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { IconChevronDown, IconCheck, IconTrendUp } from "./Icons";

export default function SalesByCountries() {
  const {
    countryPeriod,
    setCountryPeriod,
    countryPeriods,
    activeCountry,
    setActiveCountry,
    currentCountryData,
    showToast
  } = useDashboard();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePeriodSelect = (p) => {
    setCountryPeriod(p);
    setIsDropdownOpen(false);
    showToast(`Region sales updated for ${p}`);
  };

  const currentRegion =
    currentCountryData.regions.find((r) => r.id === activeCountry) ||
    currentCountryData.regions[0];

  return (
    <div className="flex flex-col justify-between bg-white border border-[#E6EAED] rounded-[8px] p-5 shadow-2xs h-full">
      {/* Header with Title and Period Dropdown */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E6EAED]">
        <h2 className="font-['Nunito'] font-bold text-[18px] leading-[21px] text-[#212B36]">
          Sales by Countries
        </h2>

        {/* Timeframe Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#092C4C] bg-white hover:bg-slate-50 border border-[rgba(145,158,171,0.3)] rounded-[8px] transition-all"
          >
            <span>{countryPeriod}</span>
            <IconChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1.5 w-36 bg-white rounded-xl shadow-xl border border-[#E6EAED] py-1 z-50 animate-fadeIn">
              {countryPeriods.map((p) => (
                <button
                  key={p}
                  onClick={() => handlePeriodSelect(p)}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-[#212B36] hover:bg-[#FFF6EE] hover:text-[#FE9F43] transition-colors"
                >
                  <span>{p}</span>
                  {countryPeriod === p && <IconCheck className="w-3 h-3 text-[#FE9F43]" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* World Map Visualization */}
      <div className="relative flex-1 flex items-center justify-center my-3 min-h-[170px] select-none">
        <svg viewBox="0 0 950 480" className="w-full h-full max-h-[220px]">
          {/* North America */}
          <path
            d="M 120 70 Q 180 50 250 80 Q 290 120 270 180 Q 230 210 200 240 Q 180 200 150 160 Q 100 120 120 70 Z"
            fill={activeCountry === "north-america" ? "#FE9F43" : "#1B2850"}
            className="transition-colors duration-200 cursor-pointer hover:opacity-85"
            onMouseEnter={() => setActiveCountry("north-america")}
          />
          <path
            d="M 80 50 Q 140 30 200 45 Q 160 70 90 65 Z"
            fill={activeCountry === "north-america" ? "#FE9F43" : "#334155"}
            className="transition-colors duration-200 cursor-pointer"
            onMouseEnter={() => setActiveCountry("north-america")}
          />

          {/* South America (Warm orange highlight in image) */}
          <path
            d="M 230 260 Q 300 270 330 330 Q 310 400 260 450 Q 240 400 220 330 Q 210 280 230 260 Z"
            fill={activeCountry === "south-america" ? "#FE9F43" : "#FFB067"}
            className="transition-colors duration-200 cursor-pointer hover:opacity-85"
            onMouseEnter={() => setActiveCountry("south-america")}
          />

          {/* Europe */}
          <path
            d="M 450 80 Q 520 70 560 110 Q 530 150 480 160 Q 440 130 450 80 Z"
            fill={activeCountry === "europe" ? "#FE9F43" : "#CBD5E1"}
            className="transition-colors duration-200 cursor-pointer hover:opacity-85"
            onMouseEnter={() => setActiveCountry("europe")}
          />
          <path
            d="M 440 50 Q 480 40 510 65 Q 470 75 440 50 Z"
            fill={activeCountry === "europe" ? "#FE9F43" : "#94A3B8"}
            className="transition-colors duration-200 cursor-pointer"
            onMouseEnter={() => setActiveCountry("europe")}
          />

          {/* Africa */}
          <path
            d="M 440 180 Q 550 180 570 250 Q 550 340 510 390 Q 470 370 440 280 Q 420 220 440 180 Z"
            fill={activeCountry === "africa" ? "#FE9F43" : "#E2E8F0"}
            className="transition-colors duration-200 cursor-pointer hover:opacity-85"
            onMouseEnter={() => setActiveCountry("africa")}
          />

          {/* Asia (Dark navy in image) */}
          <path
            d="M 570 70 Q 750 50 840 100 Q 820 180 750 240 Q 640 230 580 170 Q 550 110 570 70 Z"
            fill={activeCountry === "asia" ? "#FE9F43" : "#092C4C"}
            className="transition-colors duration-200 cursor-pointer hover:opacity-85"
            onMouseEnter={() => setActiveCountry("asia")}
          />
          <path
            d="M 640 200 Q 710 210 730 270 Q 680 300 640 250 Z"
            fill={activeCountry === "asia" ? "#FE9F43" : "#1E293B"}
            className="transition-colors duration-200 cursor-pointer"
            onMouseEnter={() => setActiveCountry("asia")}
          />

          {/* Australia */}
          <path
            d="M 750 320 Q 830 310 860 360 Q 820 420 760 400 Q 730 360 750 320 Z"
            fill={activeCountry === "australia" ? "#FE9F43" : "#E2E8F0"}
            className="transition-colors duration-200 cursor-pointer hover:opacity-85"
            onMouseEnter={() => setActiveCountry("australia")}
          />

          {/* Pointing pin circle over Africa */}
          <circle cx="505" cy="380" r="4" fill="#092C4C" />
        </svg>

        {/* Floating Tooltip Card over Active Region */}
        <div
          className="absolute z-10 flex flex-col items-center pointer-events-none transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 shadow-md rounded-[6px] overflow-hidden min-w-[130px]"
          style={{
            left: `${(currentRegion.coords.x / 950) * 100}%`,
            top: `${(currentRegion.coords.y / 480) * 100}%`
          }}
        >
          {/* Orange Header Tag */}
          <div className="w-full px-4 py-1.5 bg-[#FE9F43] text-white font-['Nunito'] text-[12px] font-bold text-center tracking-wide">
            {currentRegion.name}
          </div>
          {/* White Sales Card Body */}
          <div className="w-full px-4 py-2 bg-white text-[#212B36] font-['Nunito'] text-[13px] font-bold text-center border-x border-b border-[#E6EAED]">
            {currentRegion.sales.toLocaleString()} Sales
          </div>
        </div>
      </div>

      {/* Bottom Percentage Metric */}
      <div className="pt-2 border-t border-[#E6EAED] flex items-center gap-1.5 font-['Nunito'] font-bold text-[14px] leading-[18px] text-[#28C76F]">
        <IconTrendUp className="w-3.5 h-3.5 stroke-[2.5]" />
        <span>{currentCountryData.increase}</span>
        <span className="font-normal text-[13px] text-[#646B72]">
          {currentCountryData.comparisonText}
        </span>
      </div>
    </div>
  );
}
