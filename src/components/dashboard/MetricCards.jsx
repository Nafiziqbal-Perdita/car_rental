"use client";

import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import {
  MoneyBagGraphic,
  SalesCardIcon,
  PurchasedCardIcon,
  IconTrendUp,
  IconRefresh
} from "./Icons";

export default function MetricCards() {
  const { metrics, isBannerCollapsed, triggerRefresh, isRefreshing, setActiveModal } = useDashboard();

  if (isBannerCollapsed) {
    return null;
  }

  const formattedAmount = `${metrics.weeklyEarning.currency}${metrics.weeklyEarning.amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[137px] mb-6">
      {/* Card 1: Weekly Earning (Exact width: 570px ratio / 6 cols, background: #FFFFFF; border: 1px solid rgba(145, 158, 171, 0.3); border-radius: 8px; padding: 24px;) */}
      <div className="lg:col-span-6 h-full min-w-0 flex items-center justify-between p-4 sm:p-6 bg-white border border-[rgba(145,158,171,0.3)] rounded-[8px] hover:shadow-md transition-all group">
        <div className="flex flex-col justify-between h-full space-y-4">
          <div>
            <div className="font-['Nunito'] font-semibold text-[16px] leading-[22px] text-[#FF9F43]">
              Weekly Earning
            </div>
            <div className="mt-1 font-['Nunito'] font-bold text-[24px] leading-[28px] text-[#092C4C]">
              {formattedAmount}
            </div>
          </div>

          <div className="flex items-center gap-1.5 font-['Nunito'] font-bold text-[14px] leading-[18px] text-[#28C76F]">
            <IconTrendUp className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{metrics.weeklyEarning.percentageChange}%</span>
            <span className="font-normal text-[13px] text-[#646B72]">
              {metrics.weeklyEarning.comparisonText}
            </span>
          </div>
        </div>

        {/* Right 3D Money Bag Vector Illustration */}
        <div className="relative shrink-0 flex items-center justify-center pl-2 group-hover:scale-105 transition-transform duration-300">
          <MoneyBagGraphic className="w-20 h-20 sm:w-[84px] sm:h-[84px]" />
        </div>
      </div>

      {/* Card 2: Total Sales (Exact background: #FF9900; border-radius: 8px; padding: 24px;) */}
      <div
        onClick={() => setActiveModal("viewAllTransactions")}
        className="lg:col-span-3 h-full min-w-0 relative flex flex-col justify-between p-4 sm:p-6 bg-[#FF9900] rounded-[8px] text-white cursor-pointer hover:shadow-lg hover:brightness-105 transition-all group overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <div className="p-1.5 bg-white/20 rounded-lg text-white">
            <SalesCardIcon className="w-6 h-6 text-white" />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              triggerRefresh();
            }}
            className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            title="Refresh Sales"
            aria-label="Refresh Sales"
          >
            <IconRefresh className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
          </button>
        </div>

        <div className="mt-4">
          <div className="font-['Nunito'] font-bold text-[24px] leading-[28px] text-white">
            {metrics.totalSales.count}
          </div>
          <div className="font-['Nunito'] font-normal text-[15px] leading-[18px] text-white/90 mt-0.5">
            {metrics.totalSales.label}
          </div>
        </div>
      </div>

      {/* Card 3: Purchased Goods (Exact background: #092C4C; border-radius: 8px; padding: 24px;) */}
      <div
        onClick={() => setActiveModal("viewAllBestSellers")}
        className="lg:col-span-3 h-full min-w-0 relative flex flex-col justify-between p-4 sm:p-6 bg-[#092C4C] rounded-[8px] text-white cursor-pointer hover:shadow-lg hover:brightness-110 transition-all group overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <div className="p-1.5 bg-white/10 rounded-lg text-[#FF9F43]">
            <PurchasedCardIcon className="w-6 h-6 text-[#FF9F43]" />
          </div>
        </div>

        <div className="mt-4">
          <div className="font-['Nunito'] font-bold text-[24px] leading-[28px] text-white">
            {metrics.purchasedGoods.count}
          </div>
          <div className="font-['Nunito'] font-normal text-[15px] leading-[18px] text-white/90 mt-0.5">
            {metrics.purchasedGoods.label}
          </div>
        </div>
      </div>
    </div>
  );
}
