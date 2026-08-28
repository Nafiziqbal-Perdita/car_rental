"use client";

import React, { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { CarThumbnail, IconClock, IconX, IconSearch } from "./Icons";

export default function ViewAllModal() {
  const { activeModal, setActiveModal, transactions, bestSellers, showToast } = useDashboard();
  const [modalSearch, setModalSearch] = useState("");

  if (activeModal !== "viewAllTransactions" && activeModal !== "viewAllBestSellers") {
    return null;
  }

  const isTransactionsView = activeModal === "viewAllTransactions";

  const filteredItems = isTransactionsView
    ? transactions.filter(
        (t) =>
          t.vehicle.toLowerCase().includes(modalSearch.toLowerCase()) ||
          t.orderNumber.toLowerCase().includes(modalSearch.toLowerCase()) ||
          t.paymentMethod.toLowerCase().includes(modalSearch.toLowerCase()) ||
          t.status.toLowerCase().includes(modalSearch.toLowerCase())
      )
    : bestSellers.filter(
        (b) =>
          b.name.toLowerCase().includes(modalSearch.toLowerCase()) ||
          b.category.toLowerCase().includes(modalSearch.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-base font-bold text-slate-800">
              {isTransactionsView ? "All Rental Transactions" : "Top Selling Car Fleet"}
            </h3>
            <p className="text-xs text-slate-500">
              {isTransactionsView
                ? "Complete history of store bookings, sales and returns"
                : "All car models ranked by lifetime sales volume"}
            </p>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-100">
          <div className="relative w-full">
            <IconSearch className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={isTransactionsView ? "Filter transactions by car, ID, payment..." : "Search fleet..."}
              value={modalSearch}
              onChange={(e) => setModalSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FA7222]/30"
            />
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-y-auto flex-1 p-4 custom-scrollbar">
          {isTransactionsView ? (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase">
                  <th className="py-2 px-2">#</th>
                  <th className="py-2 px-2">Vehicle</th>
                  <th className="py-2 px-2">Customer</th>
                  <th className="py-2 px-2">Payment</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 px-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredItems.map((tx, idx) => (
                  <tr
                    key={tx.id || idx}
                    onClick={() => showToast(`Selected transaction ${tx.orderNumber}`)}
                    className="hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <td className="py-2.5 px-2 text-slate-400">{idx + 1}</td>
                    <td className="py-2.5 px-2">
                      <div className="flex items-center gap-2">
                        <CarThumbnail type={tx.carType} className="w-8 h-6" />
                        <span className="font-bold text-slate-800">{tx.vehicle}</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-2 text-slate-600">{tx.customerName || "Customer"}</td>
                    <td className="py-2.5 px-2">
                      <div>{tx.paymentMethod}</div>
                      <div className="text-[10px] text-blue-600">{tx.orderNumber}</div>
                    </td>
                    <td className="py-2.5 px-2">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700">
                        {tx.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-right font-bold text-slate-800">{tx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredItems.map((car) => (
                <div
                  key={car.id}
                  onClick={() => showToast(`Selected ${car.name}`)}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-[#FA7222] bg-white cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3">
                    <CarThumbnail type={car.carType} className="w-12 h-9" />
                    <div>
                      <div className="text-xs font-bold text-slate-800">{car.name}</div>
                      <div className="text-[11px] text-slate-500">{car.category} • Rating ★ {car.rating}</div>
                      <div className="text-xs font-bold text-[#FA7222]">{car.price}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-slate-900">{car.sales}</div>
                    <div className="text-[10px] text-slate-400">Total Sales</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
