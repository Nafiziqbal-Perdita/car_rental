"use client";

import { useState } from "react";

export default function AiAssistantLauncher({ onOpen, onClose, isOpen }) {
  return (
    <button
      type="button"
      onClick={isOpen ? onClose : onOpen}
      aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
      aria-pressed={isOpen}
      className={`fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full border border-[#FE9F43]/40 bg-[#0F172A] text-white shadow-[0_20px_45px_rgba(15,23,42,0.25)] transition-all duration-200 hover:scale-[1.03] hover:bg-[#111827] ${
        isOpen ? "h-14 w-14" : "h-14 w-14"
      }`}
      title="AI Assistant"
    >
      <div className="relative flex h-7 w-7 items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-[#FE9F43]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 3a4 4 0 0 1 3.6 6.2A3.8 3.8 0 0 1 18 12.7V14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.3a3.8 3.8 0 0 1 2.4-3.5A4 4 0 0 1 12 3Z" />
          <path d="M12 8v2" />
          <path d="M9.5 10.5h5" />
        </svg>
        {!isOpen && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FE9F43] text-[8px] font-bold text-[#0F172A]">
            AI
          </span>
        )}
      </div>
    </button>
  );
}
