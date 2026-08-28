"use client";

import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import { CarThumbnail } from "./Icons";

export default function BestSeller() {
  const { bestSellers, setActiveModal, showToast } = useDashboard();

  // Top 5 items matching Figma
  const displayedSellers = bestSellers.slice(0, 5);

  const handleCarClick = (car) => {
    showToast(`Viewing details for ${car.name} (${car.sales} units sold)`);
  };

  return (
    <div className="flex flex-col bg-white border border-[#E6EAED] rounded-[8px] overflow-hidden h-full">
      {/* Header Container (height: 60px; padding: 15px 20px; border-bottom: 1px solid #E6EAED) */}
      <div className="flex items-center justify-between h-[60px] px-5 border-b border-[#E6EAED] bg-white">
        <h2 className="font-['Nunito'] font-bold text-[18px] leading-[21px] text-[#212B36]">
          Best Seller
        </h2>

        {/* Light Border Button (width: 72px; height: 30px; border: 1px solid #E6EAED; border-radius: 5px;) */}
        <button
          onClick={() => setActiveModal("viewAllBestSellers")}
          className="h-[30px] px-3 flex items-center justify-center font-['Nunito_Sans'] font-semibold text-[12px] text-[#212B36] bg-white hover:bg-slate-50 border border-[#E6EAED] rounded-[5px] transition-all"
        >
          View All
        </button>
      </div>

      {/* Column Subheader for Sales */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 font-['Nunito_Sans'] font-bold text-[11px] text-[#646B72] uppercase tracking-wider">
        <span>Vehicle</span>
        <span className="text-right">Sales</span>
      </div>

      {/* Product List (padding: 20px; gap: 8px;) */}
      <div className="flex-1 px-5 py-2 divide-y divide-slate-100">
        {displayedSellers.map((car) => (
          <div
            key={car.id}
            onClick={() => handleCarClick(car)}
            className="flex items-center justify-between py-2.5 hover:bg-slate-50/80 -mx-2 px-2 rounded-lg cursor-pointer transition-colors group"
          >
            {/* Left: Thumbnail + Name + Price */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-[6px] bg-[#F2F2F2] flex items-center justify-center shrink-0 p-1">
                <CarThumbnail type={car.carType} className="w-full h-full" />
              </div>

              <div className="min-w-0">
                <div className="font-['Nunito_Sans'] font-bold text-[14px] leading-[21px] text-[#212B36] group-hover:text-[#FE9F43] transition-colors truncate">
                  {car.name}
                </div>
                <div className="font-['Nunito_Sans'] font-normal text-[12px] leading-[18px] text-[#646B72]">
                  {car.price}
                </div>
              </div>
            </div>

            {/* Right: Sales Count */}
            <div className="text-right shrink-0">
              <div className="font-['Nunito_Sans'] font-medium text-[14px] leading-[21px] text-[#212B36]">
                {car.sales}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
