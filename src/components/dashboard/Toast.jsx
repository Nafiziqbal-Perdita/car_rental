"use client";

import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import { IconCheck } from "./Icons";

export default function Toast() {
  const { toastMessage } = useDashboard();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 animate-slideUp">
      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#10B981] text-white">
        <IconCheck className="w-3.5 h-3.5 stroke-[3]" />
      </div>
      <span className="text-xs font-semibold">{toastMessage}</span>
    </div>
  );
}
