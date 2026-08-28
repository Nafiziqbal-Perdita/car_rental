"use client";

import React, { useState } from "react";
import { useDashboard } from "@/context/DashboardContext";
import { IconX, IconPlus } from "./Icons";

export default function AddNewModal() {
  const { activeModal, setActiveModal, addTransaction } = useDashboard();

  const [vehicle, setVehicle] = useState("Range Rover");
  const [carType, setCarType] = useState("white-suv");
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Stripe");
  const [status, setStatus] = useState("Success");
  const [rawAmount, setRawAmount] = useState("1099.00");

  if (activeModal !== "addNew") return null;

  const vehicleOptions = [
    { label: "Range Rover ($1,099.00)", name: "Range Rover", type: "white-suv", price: "1099.00" },
    { label: "Red Toyota ($600.55)", name: "Red Toyota", type: "red-suv", price: "600.55" },
    { label: "Blue Nissan ($200.10)", name: "blue Nissan", type: "blue-coupe", price: "200.10" },
    { label: "Toyota Corolla ($1,569.00)", name: "Toyota Corolla", type: "black-sedan", price: "1569.00" },
    { label: "Audi S3 ($1,474.00)", name: "Audi S3", type: "white-sedan", price: "1474.00" },
    { label: "Compact Car ($597.00)", name: "Compact car", type: "compact-car", price: "597.00" }
  ];

  const handleVehicleChange = (e) => {
    const selected = vehicleOptions.find((v) => v.name === e.target.value);
    if (selected) {
      setVehicle(selected.name);
      setCarType(selected.type);
      setRawAmount(selected.price);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      vehicle,
      carType,
      customerName: customerName.trim() || "Walk-in Guest",
      paymentMethod,
      status,
      rawAmount: parseFloat(rawAmount)
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-[#FFF4EB] text-[#FA7222] rounded-lg">
              <IconPlus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">Add New Order / Sale</h3>
              <p className="text-xs text-slate-500">Record a new rental or car sale into the system</p>
            </div>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select Vehicle 
            </label>
            <select
              value={vehicle}
              onChange={handleVehicleChange}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#FA7222]/30 focus:border-[#FA7222] focus:outline-none"
            >
              {vehicleOptions.map((opt) => (
                <option key={opt.name} value={opt.name}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Customer Name
            </label>
            <input
              type="text"
              placeholder="e.g. Sarah Jenkins"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#FA7222]/30 focus:border-[#FA7222] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Payment Method
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#FA7222]/30 focus:border-[#FA7222] focus:outline-none"
              >
                <option value="Paypal">Paypal</option>
                <option value="Apple Pay">Apple Pay</option>
                <option value="Stripe">Stripe</option>
                <option value="PayU">PayU</option>
                <option value="Paytm">Paytm</option>
                <option value="Cash / POS">Cash / POS</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Initial Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#FA7222]/30 focus:border-[#FA7222] focus:outline-none"
              >
                <option value="Success">Success</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Order Amount ($ USD)
            </label>
            <input
              type="number"
              step="0.01"
              value={rawAmount}
              onChange={(e) => setRawAmount(e.target.value)}
              required
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#FA7222]/30 focus:border-[#FA7222] focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#FA7222] hover:bg-[#E05E12] shadow-md rounded-xl transition-all"
            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
