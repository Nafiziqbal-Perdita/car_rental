import React from "react";

export function IconDashboard({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="7" height="7" x="3" y="3" rx="1.5" />
      <rect width="7" height="7" x="14" y="3" rx="1.5" />
      <rect width="7" height="7" x="14" y="14" rx="1.5" />
      <rect width="7" height="7" x="3" y="14" rx="1.5" />
    </svg>
  );
}

export function IconSuperAdmin({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function IconProducts({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export function IconCreateProduct({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

export function IconExpired({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

export function IconLowStocks({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

export function IconCategory({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

export function IconSubCategory({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

export function IconBrands({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function IconUnits({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

export function IconVariantAttributes({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

export function IconWarranties({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconPrintBarcode({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  );
}

export function IconPrintQRCode({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  );
}

export function IconManageStock({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}

export function IconStockAdjustment({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M1 14h6" />
      <path d="M9 8h6" />
      <path d="M17 16h6" />
    </svg>
  );
}

export function IconStockTransfer({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m16 3 4 4-4 4" />
      <path d="M20 7H4" />
      <path d="m8 21-4-4 4-4" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconSales({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export function IconInvoices({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

export function IconSalesReturn({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  );
}

export function IconQuotation({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    </svg>
  );
}

export function IconPOS({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
      <path d="M6 7h.01" />
      <path d="M10 7h.01" />
      <path d="M14 7h.01" />
    </svg>
  );
}

export function IconSearch({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function IconCloud({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export function IconCalendar({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

export function IconRefresh({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

export function IconBell({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

export function IconMail({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function IconSettings({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconFullscreen({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function IconChevronDown({ className = "w-3 h-3", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconChevronUp({ className = "w-3 h-3", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export function IconChevronRight({ className = "w-3 h-3", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function IconChevronLeft({ className = "w-3 h-3", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function IconPlus({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export function IconClock({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function IconTrendUp({ className = "w-3.5 h-3.5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="18 15 18 9 12 9" />
      <path d="M6 18 18 9" />
    </svg>
  );
}

export function IconCheck({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconX({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function IconUSFlag({ className = "w-5 h-3.5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="16" rx="2" fill="#B22234" />
      <path d="M0 2.46h24v1.85H0zm0 3.69h24V8H0zm0 3.7h24v1.84H0zm0 3.69h24v1.85H0z" fill="#FFFFFF" />
      <rect width="10" height="9" fill="#3C3B6E" rx="1" />
      <circle cx="2" cy="2" r="0.6" fill="#FFF" />
      <circle cx="5" cy="2" r="0.6" fill="#FFF" />
      <circle cx="8" cy="2" r="0.6" fill="#FFF" />
      <circle cx="3.5" cy="4.5" r="0.6" fill="#FFF" />
      <circle cx="6.5" cy="4.5" r="0.6" fill="#FFF" />
      <circle cx="2" cy="7" r="0.6" fill="#FFF" />
      <circle cx="5" cy="7" r="0.6" fill="#FFF" />
      <circle cx="8" cy="7" r="0.6" fill="#FFF" />
    </svg>
  );
}

/* 3D Money Bag Vector Illustration matching Figma Card 1 exactly */
export function MoneyBagGraphic({ className = "w-20 h-20", ...props }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="bagGreen" x1="10" y1="20" x2="60" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4ADE80" />
          <stop offset="0.6" stopColor="#22C55E" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
        <linearGradient id="goldCoins" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FDE047" />
          <stop offset="1" stopColor="#EAB308" />
        </linearGradient>
      </defs>

      {/* Upward Growth Bar Graph */}
      <rect x="58" y="46" width="6" height="34" rx="2" fill="#E2E8F0" />
      <rect x="68" y="32" width="6" height="48" rx="2" fill="#E2E8F0" />
      <rect x="78" y="18" width="6" height="62" rx="2" fill="#22C55E" />

      {/* Upward Trend Arrow */}
      <path d="M52 42 L80 14 M80 14 H68 M80 14 V26" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Money Bag */}
      <g>
        {/* Bag Top Knot */}
        <path d="M26 22 C28 28 32 30 36 30 C40 30 44 28 46 22 C42 20 30 20 26 22 Z" fill="#16A34A" stroke="#14532D" strokeWidth="1.5" />
        <ellipse cx="36" cy="30" rx="13" ry="5" fill="#15803D" />
        <circle cx="36" cy="30" r="2.5" fill="#FACC15" />

        {/* Bag Main Body */}
        <path
          d="M16 48 C12 70 20 84 36 84 C52 84 60 70 56 48 C54 38 46 34 36 34 C26 34 18 38 16 48 Z"
          fill="url(#bagGreen)"
          stroke="#14532D"
          strokeWidth="2.5"
        />

        {/* Dollar Symbol */}
        <path d="M36 46 v24 M32 52 c0 -3 8 -3 8 0 c0 4 -8 2 -8 6 c0 3 8 3 8 0" stroke="#052E16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Gold Coins Stack */}
      <ellipse cx="64" cy="78" rx="10" ry="4" fill="url(#goldCoins)" stroke="#CA8A04" strokeWidth="1.2" />
      <ellipse cx="64" cy="73" rx="10" ry="4" fill="url(#goldCoins)" stroke="#CA8A04" strokeWidth="1.2" />
      <ellipse cx="64" cy="68" rx="10" ry="4" fill="url(#goldCoins)" stroke="#CA8A04" strokeWidth="1.2" />
    </svg>
  );
}

/* Card 2 Icon: Total Sales Receipt / Bar Chart Outline */
export function SalesCardIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 17v-3" />
      <path d="M12 17v-6" />
      <path d="M16 17v-8" />
      <path d="m8 10 4-4 4 2" />
    </svg>
  );
}

/* Card 3 Icon: Purchased Goods Gold Icon */
export function PurchasedCardIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
      <circle cx="12" cy="15" r="1.5" />
    </svg>
  );
}

/* Photorealistic styled SVG car thumbnails matching Figma vehicle photos */
export function CarThumbnail({ type = "white-suv", className = "w-full h-full" }) {
  switch (type) {
    case "white-suv":
      return (
        <div className={`relative flex items-center justify-center rounded-[6px] overflow-hidden ${className}`}>
          <svg viewBox="0 0 60 40" fill="none" className="w-full h-full">
            {/* White Range Rover SUV */}
            <rect x="2" y="16" width="56" height="13" rx="4" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2" />
            <path d="M12 16 L18 7 L44 7 L52 16 Z" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.2" />
            <path d="M19 8 L31 8 L31 15 L14 15 Z" fill="#38BDF8" opacity="0.8" />
            <path d="M33 8 L43 8 L50 15 L33 15 Z" fill="#38BDF8" opacity="0.8" />
            {/* Front & Rear Windows */}
            <rect x="5" y="18" width="4" height="3" rx="1" fill="#EF4444" />
            <rect x="52" y="18" width="5" height="3" rx="1" fill="#FEF08A" stroke="#CA8A04" strokeWidth="0.8" />
            {/* Wheels */}
            <circle cx="15" cy="29" r="5" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="46" cy="29" r="5" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="15" cy="29" r="2" fill="#E2E8F0" />
            <circle cx="46" cy="29" r="2" fill="#E2E8F0" />
          </svg>
        </div>
      );
    case "red-suv":
    case "red-car":
      return (
        <div className={`relative flex items-center justify-center rounded-[6px] overflow-hidden ${className}`}>
          <svg viewBox="0 0 60 40" fill="none" className="w-full h-full">
            {/* Red Car (Audi S3 / Red Toyota) */}
            <rect x="3" y="16" width="54" height="12" rx="3.5" fill="#DC2626" stroke="#991B1B" strokeWidth="1.2" />
            <path d="M14 16 L22 7 L42 7 L50 16 Z" fill="#B91C1C" stroke="#991B1B" strokeWidth="1.2" />
            <path d="M23 8 L32 8 L32 15 L16 15 Z" fill="#0284C7" opacity="0.75" />
            <path d="M34 8 L41 8 L48 15 L34 15 Z" fill="#0284C7" opacity="0.75" />
            {/* Lights */}
            <rect x="51" y="18" width="5" height="3" rx="1" fill="#FEF08A" />
            <rect x="4" y="18" width="3" height="3" rx="1" fill="#7F1D1D" />
            {/* Wheels */}
            <circle cx="15" cy="28" r="4.5" fill="#0F172A" stroke="#A1A1AA" strokeWidth="2" />
            <circle cx="46" cy="28" r="4.5" fill="#0F172A" stroke="#A1A1AA" strokeWidth="2" />
            <circle cx="15" cy="28" r="1.5" fill="#F8FAFC" />
            <circle cx="46" cy="28" r="1.5" fill="#F8FAFC" />
          </svg>
        </div>
      );
    case "blue-coupe":
    case "blue-car":
      return (
        <div className={`relative flex items-center justify-center rounded-[6px] overflow-hidden ${className}`}>
          <svg viewBox="0 0 60 40" fill="none" className="w-full h-full">
            {/* Blue Nissan Sport */}
            <rect x="4" y="16" width="52" height="12" rx="3" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1.2" />
            <path d="M16 16 L24 8 L42 8 L49 16 Z" fill="#1E40AF" stroke="#1D4ED8" strokeWidth="1.2" />
            <path d="M25 9 L33 9 L33 15 L18 15 Z" fill="#93C5FD" opacity="0.8" />
            <path d="M35 9 L41 9 L47 15 L35 15 Z" fill="#93C5FD" opacity="0.8" />
            {/* Lights */}
            <rect x="51" y="18" width="4" height="2.5" rx="1" fill="#FDE047" />
            <rect x="5" y="18" width="3" height="2.5" rx="1" fill="#EF4444" />
            {/* Wheels */}
            <circle cx="15" cy="28" r="4.5" fill="#0F172A" stroke="#93C5FD" strokeWidth="2" />
            <circle cx="45" cy="28" r="4.5" fill="#0F172A" stroke="#93C5FD" strokeWidth="2" />
            <circle cx="15" cy="28" r="1.5" fill="#FFFFFF" />
            <circle cx="45" cy="28" r="1.5" fill="#FFFFFF" />
          </svg>
        </div>
      );
    case "black-sedan":
    case "toyota-corolla":
      return (
        <div className={`relative flex items-center justify-center rounded-[6px] overflow-hidden ${className}`}>
          <svg viewBox="0 0 60 40" fill="none" className="w-full h-full">
            {/* Charcoal / Red-Tinged Toyota Corolla */}
            <rect x="4" y="16" width="52" height="12" rx="3" fill="#881337" stroke="#4C0519" strokeWidth="1.2" />
            <path d="M15 16 L23 8 L42 8 L49 16 Z" fill="#4C0519" stroke="#374151" strokeWidth="1.2" />
            <path d="M24 9 L32 9 L32 15 L18 15 Z" fill="#94A3B8" opacity="0.7" />
            <path d="M34 9 L41 9 L47 15 L34 15 Z" fill="#94A3B8" opacity="0.7" />
            <rect x="51" y="18" width="4" height="2.5" rx="1" fill="#FEF08A" />
            {/* Wheels */}
            <circle cx="15" cy="28" r="4.5" fill="#0F172A" stroke="#E2E8F0" strokeWidth="2" />
            <circle cx="45" cy="28" r="4.5" fill="#0F172A" stroke="#E2E8F0" strokeWidth="2" />
            <circle cx="15" cy="28" r="1.5" fill="#CBD5E1" />
            <circle cx="45" cy="28" r="1.5" fill="#CBD5E1" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={`relative flex items-center justify-center rounded-[6px] overflow-hidden ${className}`}>
          <svg viewBox="0 0 60 40" fill="none" className="w-full h-full">
            {/* Compact Car */}
            <rect x="6" y="16" width="48" height="11" rx="3" fill="#64748B" stroke="#475569" strokeWidth="1.2" />
            <path d="M16 16 L23 8 L38 8 L45 16 Z" fill="#475569" />
            <circle cx="16" cy="27" r="4" fill="#0F172A" stroke="#CBD5E1" strokeWidth="1.8" />
            <circle cx="44" cy="27" r="4" fill="#0F172A" stroke="#CBD5E1" strokeWidth="1.8" />
          </svg>
        </div>
      );
  }
}
