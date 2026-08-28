"use client";

import React, { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { CarThumbnail, IconClock } from "./Icons";

export default function RecentTransactions() {
  const {
    filteredTransactions,
    transactionStatus,
    setTransactionStatus,
    transactionStatuses,
    setActiveModal,
    showToast
  } = useDashboard();

  // Display top 5 items matching Figma
  const displayedTransactions = filteredTransactions.slice(0, 5);

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "success":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[5px] text-[10px] font-medium bg-[#3EB780] text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Success
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[5px] text-[10px] font-medium bg-[#E70D0D] text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Cancelled
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[5px] text-[10px] font-medium bg-[#0284C7] text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Pending
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[5px] text-[10px] font-medium bg-slate-200 text-slate-700">
            {status}
          </span>
        );
    }
  };

  const handleRowClick = (tx) => {
    showToast(`Order details for ${tx.orderNumber} - ${tx.amount}`);
  };

  return (
    <div className="flex flex-col bg-white border border-[#E6EAED] rounded-[8px] overflow-hidden h-full">
      {/* Header Container (height: 60px; padding: 15px 20px; border-bottom: 1px solid #E6EAED) */}
      <div className="flex flex-wrap items-center justify-between gap-2 h-[60px] px-5 border-b border-[#E6EAED] bg-white">
        <div className="flex items-center gap-3">
          <h2 className="font-['Nunito_Sans'] font-bold text-[18px] leading-[27px] text-[#212B36]">
            Recent Transactions
          </h2>

          {/* Quick Filter Pills */}
          <div className="hidden sm:flex items-center gap-1 text-[11px]">
            {transactionStatuses.map((st) => (
              <button
                key={st}
                onClick={() => setTransactionStatus(st)}
                className={`px-2 py-0.5 rounded-[4px] font-medium transition-colors ${
                  transactionStatus === st
                    ? "bg-[#212B36] text-white"
                    : "text-[#646B72] hover:text-[#212B36] hover:bg-slate-100"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Light Border Button (width: 72px; height: 30px; border: 1px solid #E6EAED; border-radius: 5px;) */}
        <button
          onClick={() => setActiveModal("viewAllTransactions")}
          className="h-[30px] px-3 flex items-center justify-center font-['Nunito_Sans'] font-semibold text-[12px] text-[#212B36] bg-white hover:bg-slate-50 border border-[#E6EAED] rounded-[5px] transition-all"
        >
          View All
        </button>
      </div>

      {/* Transactions Table Container */}
      <div className="overflow-x-auto custom-scrollbar flex-1">
        <table className="w-full text-left border-collapse min-w-[640px]">
          {/* Table Header (background: #F9FAFB; height: 39px; font-family: 'Nunito'; font-weight: 600; font-size: 14px; letter-spacing: 1px; color: #212B36;) */}
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#E6EAED] text-[13px] font-semibold text-[#212B36] tracking-wide">
              <th className="py-2.5 px-4 w-10">#</th>
              <th className="py-2.5 px-4">Order Details</th>
              <th className="py-2.5 px-4">Payment</th>
              <th className="py-2.5 px-4">Status</th>
              <th className="py-2.5 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {displayedTransactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-[#646B72] text-sm">
                  No transactions found matching your criteria.
                </td>
              </tr>
            ) : (
              displayedTransactions.map((tx, idx) => (
                <tr
                  key={tx.id || idx}
                  onClick={() => handleRowClick(tx)}
                  className="hover:bg-slate-50/80 cursor-pointer transition-colors group"
                >
                  {/* # ID (font-family: 'Nunito'; font-weight: 600; font-size: 14px; color: #5B6670;) */}
                  <td className="py-3 px-4 font-['Nunito'] font-semibold text-[14px] text-[#5B6670]">
                    {idx + 1}
                  </td>

                  {/* Order Details: Thumbnail + Name + Time */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-[6px] bg-[#F2F2F2] flex items-center justify-center shrink-0 p-1">
                        <CarThumbnail type={tx.carType} className="w-full h-full" />
                      </div>
                      <div>
                        <div className="font-['Nunito_Sans'] font-bold text-[14px] leading-[21px] text-[#212B36] group-hover:text-[#FE9F43] transition-colors">
                          {tx.vehicle}
                        </div>
                        <div className="flex items-center gap-1 font-['Nunito_Sans'] text-[12px] leading-[18px] text-[#646B72]">
                          <IconClock className="w-3 h-3 text-[#354052]" />
                          <span>{tx.time}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Payment: Gateway + ID */}
                  <td className="py-3 px-4">
                    <div className="font-['Nunito_Sans'] font-normal text-[14px] leading-[21px] text-[#212B36]">
                      {tx.paymentMethod}
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        showToast(`Copied transaction reference: ${tx.orderNumber}`);
                      }}
                      className="font-['Nunito_Sans'] font-normal text-[14px] leading-[21px] text-[#155EEF] hover:underline cursor-pointer"
                    >
                      {tx.orderNumber}
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-3 px-4">
                    {getStatusBadge(tx.status)}
                  </td>

                  {/* Amount (font-family: 'Nunito Sans'; font-weight: 700; font-size: 16px; line-height: 24px; color: #212B36;) */}
                  <td className="py-3 px-4 text-right font-['Nunito_Sans'] font-bold text-[16px] leading-[24px] text-[#212B36]">
                    {tx.amount}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
