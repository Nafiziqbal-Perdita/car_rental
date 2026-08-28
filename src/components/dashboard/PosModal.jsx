"use client";

import React, { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { IconX, IconPOS, IconCheck } from "./Icons";

export default function PosModal() {
  const { activeModal, setActiveModal, addTransaction, bestSellers } = useDashboard();
  const [selectedItems, setSelectedItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Apple Pay");
  const [customerName, setCustomerName] = useState("Walk-in Customer");

  if (activeModal !== "pos") return null;

  const toggleItem = (car) => {
    if (selectedItems.find((i) => i.id === car.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== car.id));
    } else {
      setSelectedItems([...selectedItems, car]);
    }
  };

  const totalAmount = selectedItems.reduce((sum, item) => sum + item.rawPrice, 0);

  const handleCheckout = () => {
    if (selectedItems.length === 0) return;

    const mainCar = selectedItems[0];
    addTransaction({
      vehicle: selectedItems.length > 1 ? `${mainCar.name} + ${selectedItems.length - 1} more` : mainCar.name,
      carType: mainCar.carType,
      customerName,
      paymentMethod,
      status: "Success",
      rawAmount: totalAmount
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#0B192C] text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg">
              <IconPOS className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              
              <h3 className="text-base font-bold">BestCar POS Terminal</h3>
              <p className="text-xs text-slate-300">Quick Counter Rental Checkout</p>
            </div>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Left items picker, Right summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1 overflow-y-auto divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Quick Select Grid */}
          <div className="p-5 overflow-y-auto max-h-96 custom-scrollbar">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Select Fleet Vehicles
            </div>

            <div className="space-y-2">
              {bestSellers.map((car) => {
                const isSelected = selectedItems.some((i) => i.id === car.id);
                return (
                  <div
                    key={car.id}
                    onClick={() => toggleItem(car)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? "border-[#FA7222] bg-[#FFF4EB]"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800">{car.name}</div>
                      <div className="text-[11px] text-slate-500">{car.category} • In stock: {car.inStock}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{car.price}</span>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border text-white ${
                          isSelected ? "bg-[#FA7222] border-[#FA7222]" : "border-slate-300"
                        }`}
                      >
                        {isSelected && <IconCheck className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Checkout Column */}
          <div className="p-5 flex flex-col justify-between bg-slate-50/50">
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Cart & Payment
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Customer</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FA7222]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FA7222]"
                >
                  <option value="Apple Pay">Apple Pay</option>
                  <option value="Stripe">Stripe Terminal</option>
                  <option value="Paypal">Paypal QR</option>
                  <option value="Cash / POS">Cash at Register</option>
                </select>
              </div>

              {/* Selected List */}
              <div className="pt-2 border-t border-slate-200/80">
                <div className="text-[11px] font-semibold text-slate-500 mb-1">Items ({selectedItems.length})</div>
                <div className="max-h-28 overflow-y-auto space-y-1">
                  {selectedItems.length === 0 ? (
                    <div className="text-xs text-slate-400 italic">No vehicles selected</div>
                  ) : (
                    selectedItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-xs text-slate-700">
                        <span>{item.name}</span>
                        <span className="font-semibold">${item.rawPrice}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Total and Submit */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-600">Total Charge</span>
                <span className="text-lg font-black text-slate-900">${totalAmount.toLocaleString()}</span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={selectedItems.length === 0}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1E293B] disabled:opacity-50 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <IconPOS className="w-4 h-4 text-amber-400" />
                Complete Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
