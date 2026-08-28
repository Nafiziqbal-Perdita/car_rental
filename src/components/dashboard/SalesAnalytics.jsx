"use client";

import React, { useState, useMemo } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { IconCalendar, IconChevronDown, IconCheck } from "./Icons";

export default function SalesAnalytics() {
  const {
    analyticsYear,
    setAnalyticsYear,
    analyticsYears,
    currentAnalyticsData,
    showToast
  } = useDashboard();

  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Chart dimensions matching Figma card ratio
  const width = 640;
  const height = 250;
  const padding = { top: 20, right: 20, bottom: 45, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Max scale is 60k
  const maxY = 60000;
  const yTicks = [60000, 50000, 40000, 30000, 20000, 10000];

  // Calculate coordinates for points
  const points = useMemo(() => {
    return currentAnalyticsData.map((d, i) => {
      const x = padding.left + (i / (currentAnalyticsData.length - 1)) * chartWidth;
      const y = padding.top + chartHeight - (d.sales / maxY) * chartHeight;
      return { ...d, x, y, index: i };
    });
  }, [currentAnalyticsData, chartWidth, chartHeight, padding.left, padding.top]);

  // Generate smooth cubic bezier SVG path
  const { linePath, areaPath } = useMemo(() => {
    if (points.length === 0) return { linePath: "", areaPath: "" };

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cx1 = p0.x + (p1.x - p0.x) * 0.45;
      const cy1 = p0.y;
      const cx2 = p0.x + (p1.x - p0.x) * 0.55;
      const cy2 = p1.y;
      d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p1.x} ${p1.y}`;
    }

    const baselineY = padding.top + chartHeight;
    const area = `${d} L ${points[points.length - 1].x} ${baselineY} L ${points[0].x} ${baselineY} Z`;

    return { linePath: d, areaPath: area };
  }, [points, chartHeight, padding.top]);

  const handleYearSelect = (yr) => {
    setAnalyticsYear(yr);
    setIsYearDropdownOpen(false);
    showToast(`Sales analytics loaded for year ${yr}`);
  };

  return (
    <div className="flex flex-col bg-white border border-[#E6EAED] rounded-[8px] p-5 shadow-2xs h-full">
      {/* Header with Title and Year Dropdown */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E6EAED]">
        <h2 className="font-['Nunito'] font-bold text-[18px] leading-[21px] text-[#212B36]">
          Sales Analytics
        </h2>

        {/* Year Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#092C4C] bg-white hover:bg-slate-50 border border-[rgba(145,158,171,0.3)] rounded-[8px] transition-all"
          >
            <IconCalendar className="w-3.5 h-3.5 text-[#092C4C]" />
            <span>{analyticsYear}</span>
            <IconChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {isYearDropdownOpen && (
            <div className="absolute right-0 mt-1.5 w-32 bg-white rounded-xl shadow-xl border border-[#E6EAED] py-1 z-50 animate-fadeIn">
              {analyticsYears.map((yr) => (
                <button
                  key={yr}
                  onClick={() => handleYearSelect(yr)}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-[#212B36] hover:bg-[#FFF6EE] hover:text-[#FE9F43] transition-colors"
                >
                  <span>{yr}</span>
                  {analyticsYear === yr && <IconCheck className="w-3 h-3 text-[#FE9F43]" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Spline Chart */}
      <div className="relative flex-1 w-full pt-4 min-h-[220px]">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
          onMouseLeave={() => setHoveredPoint(null)}
        >
          <defs>
            {/* Orange Gradient matching Figma Area Chart */}
            <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FE9F43" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#FE9F43" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FE9F43" stopOpacity="0.0" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#FE9F43" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Horizontal Grid lines and Y-Axis Labels */}
          {yTicks.map((val) => {
            const y = padding.top + chartHeight - (val / maxY) * chartHeight;
            return (
              <g key={val}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 10}
                  y={y + 3.5}
                  textAnchor="end"
                  className="text-[11px] fill-[#7A8086] font-['Nunito_Sans'] font-normal select-none"
                >
                  {val / 1000}k
                </text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={areaPath} fill="url(#salesGrad)" />

          {/* Spline Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#FE9F43"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />

          {/* Specific Key Highlight Points matching Figma dots */}
          {points.map((pt, i) => {
            const isJunPeak = pt.month === "Jun";
            const isHovered = hoveredPoint?.index === i;

            return (
              <g key={pt.month}>
                {/* Vertex dot on peak point Jun or on hover */}
                {(isJunPeak || isHovered) && (
                  <>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 6 : 5}
                      fill="#FE9F43"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      className="transition-all duration-150"
                    />
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 12 : 9}
                      fill="#FE9F43"
                      opacity="0.25"
                    />
                  </>
                )}

                {/* Subtle dots at points */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="2"
                  fill="#FE9F43"
                  opacity={isJunPeak ? "0" : "0.7"}
                />

                {/* Transparent Interactive Hover Target */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="16"
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(pt)}
                />
              </g>
            );
          })}

          {/* X-Axis Labels */}
          {points.map((pt) => (
            <text
              key={pt.month}
              x={pt.x}
              y={height - 15}
              textAnchor="middle"
              className={`text-[12px] font-['Nunito_Sans'] transition-colors select-none ${
                hoveredPoint?.month === pt.month ? "fill-[#FE9F43] font-bold" : "fill-[#646B72] font-normal"
              }`}
            >
              {pt.month}
            </text>
          ))}

          {/* Active Hover Crosshair Line */}
          {hoveredPoint && (
            <line
              x1={hoveredPoint.x}
              y1={padding.top}
              x2={hoveredPoint.x}
              y2={padding.top + chartHeight}
              stroke="#FE9F43"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.6"
            />
          )}
        </svg>

        {/* Dynamic Tooltip */}
        {hoveredPoint && (
          <div
            className="absolute z-20 pointer-events-none px-2.5 py-1 bg-[#1E293B] text-white rounded-[6px] shadow-xl text-xs -translate-x-1/2 -translate-y-full mb-2 transition-all duration-150"
            style={{
              left: `${(hoveredPoint.x / width) * 100}%`,
              top: `${(hoveredPoint.y / height) * 100}%`
            }}
          >
            <div className="font-bold text-[#FE9F43]">{hoveredPoint.month} {analyticsYear}</div>
            <div className="font-semibold text-white">
              ${hoveredPoint.sales.toLocaleString()} Sales
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
