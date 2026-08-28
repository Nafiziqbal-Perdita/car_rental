"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDashboard } from "@/context/DashboardContext";
import {
  IconDashboard,
  IconSuperAdmin,
  IconProducts,
  IconCreateProduct,
  IconExpired,
  IconLowStocks,
  IconCategory,
  IconSubCategory,
  IconBrands,
  IconUnits,
  IconVariantAttributes,
  IconWarranties,
  IconPrintBarcode,
  IconPrintQRCode,
  IconManageStock,
  IconStockAdjustment,
  IconStockTransfer,
  IconSales,
  IconInvoices,
  IconSalesReturn,
  IconQuotation,
  IconPOS,
  IconChevronDown,
  IconChevronRight,
  IconChevronLeft,
  IconX
} from "./Icons";

export default function Sidebar() {
  const {
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    setActiveModal,
    showToast
  } = useDashboard();

  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleNavClick = (name, action) => {
    setActiveItem(name);
    if (action) {
      action();
    } else if (name !== "Dashboard") {
      showToast(`Navigated to ${name}`);
    }
    if (isMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  };

  const navGroups = [
    {
      groupTitle: "Main",
      items: [
        {
          id: "Dashboard",
          label: "Dashboard",
          icon: IconDashboard,
          hasDropdown: true,
          badge: null
        },
        {
          id: "SuperAdmin",
          label: "Super Admin",
          icon: IconSuperAdmin,
          hasChevron: true
        }
      ]
    },
    {
      groupTitle: "Inventory",
      items: [
        { id: "Products", label: "Products", icon: IconProducts },
        { id: "CreateProduct", label: "Create Product", icon: IconCreateProduct, action: () => setActiveModal("addNew") },
        { id: "ExpiredProducts", label: "Expired Products", icon: IconExpired },
        { id: "LowStocks", label: "Low Stocks", icon: IconLowStocks },
        { id: "Category", label: "Category", icon: IconCategory },
        { id: "SubCategory", label: "Sub Category", icon: IconSubCategory },
        { id: "Brands", label: "Brands", icon: IconBrands },
        { id: "Units", label: "Units", icon: IconUnits },
        { id: "VariantAttributes", label: "Variant Attributes", icon: IconVariantAttributes },
        { id: "Warranties", label: "Warranties", icon: IconWarranties },
        { id: "PrintBarcode", label: "Print Barcode", icon: IconPrintBarcode },
        { id: "PrintQRCode", label: "Print QR Code", icon: IconPrintQRCode }
      ]
    },
    {
      groupTitle: "Stock",
      items: [
        { id: "ManageStock", label: "Manage Stock", icon: IconManageStock },
        { id: "StockAdjustment", label: "Stock Adjustment", icon: IconStockAdjustment },
        { id: "StockTransfer", label: "Stock Transfer", icon: IconStockTransfer }
      ]
    },
    {
      groupTitle: "Sales",
      items: [
        { id: "Sales", label: "Sales", icon: IconSales, hasChevron: true },
        { id: "Invoices", label: "Invoices", icon: IconInvoices },
        { id: "SalesReturn", label: "Sales Return", icon: IconSalesReturn },
        { id: "Quotation", label: "Quotation", icon: IconQuotation },
        { id: "POS", label: "POS", icon: IconPOS, hasChevron: true, action: () => setActiveModal("pos") }
      ]
    },
    {
      groupTitle: "Promo",
      items: [
        { id: "Coupons", label: "Coupons", icon: IconCategory },
        { id: "GiftCard", label: "Gift Card", icon: IconBrands },
        { id: "Discount", label: "Discount", icon: IconUnits, hasChevron: true }
      ]
    },
    {
      groupTitle: "Purchases",
      items: [
        { id: "Purchases", label: "Purchases", icon: IconProducts },
        { id: "PurchaseOrder", label: "Purchase Order", icon: IconInvoices },
        { id: "PurchaseReturn", label: "Purchase Return", icon: IconSalesReturn }
      ]
    },
    {
      groupTitle: "Finance & Accounts",
      items: [
        { id: "Expenses", label: "Expenses", icon: IconInvoices, hasChevron: true },
        { id: "Income", label: "Income", icon: IconInvoices, hasChevron: true },
        { id: "BankAccounts", label: "Bank Accounts", icon: IconManageStock },
        { id: "MoneyTransfer", label: "Money Transfer", icon: IconStockTransfer },
        { id: "BalanceSheet", label: "Balance Sheet", icon: IconVariantAttributes },
        { id: "TrialBalance", label: "Trial Balance", icon: IconExpired },
        { id: "CashFlow", label: "Cash Flow", icon: IconLowStocks },
        { id: "AccountStatement", label: "Account Statement", icon: IconQuotation }
      ]
    },
    {
      groupTitle: "Peoples",
      items: [
        { id: "Customers", label: "Customers", icon: IconSuperAdmin },
        { id: "Billers", label: "Billers", icon: IconSuperAdmin },
        { id: "Suppliers", label: "Suppliers", icon: IconSuperAdmin },
        { id: "Stores", label: "Stores", icon: IconCategory },
        { id: "Warehouses", label: "Warehouses", icon: IconManageStock }
      ]
    },
    {
      groupTitle: "HRM",
      items: [
        { id: "Employees", label: "Employees", icon: IconSuperAdmin },
        { id: "Departments", label: "Departments", icon: IconSubCategory },
        { id: "Designation", label: "Designation", icon: IconBrands },
        { id: "Shifts", label: "Shifts", icon: IconStockTransfer },
        { id: "Attendence", label: "Attendence", icon: IconSuperAdmin, hasChevron: true },
        { id: "Leaves", label: "Leaves", icon: IconExpired, hasChevron: true },
        { id: "Holidays", label: "Holidays", icon: IconCalendarSmall },
        { id: "Payroll", label: "Payroll", icon: IconInvoices, hasChevron: true }
      ]
    },
    {
      groupTitle: "Reports",
      items: [
        { id: "SalesReport", label: "Sales Report", icon: IconLowStocks, hasChevron: true },
        { id: "PurchaseReport", label: "Purchase Report", icon: IconCategory },
        { id: "InventoryReport", label: "Inventory Report", icon: IconManageStock, hasChevron: true },
        { id: "InvoiceReport", label: "Invoice Report", icon: IconInvoices },
        { id: "SupplierReport", label: "Supplier Report", icon: IconSuperAdmin, hasChevron: true },
        { id: "CustomerReport", label: "Customer Report", icon: IconSuperAdmin, hasChevron: true },
        { id: "ProductReport", label: "Product Report", icon: IconProducts, hasChevron: true },
        { id: "ExpenseReport", label: "Expense Report", icon: IconInvoices },
        { id: "IncomeReport", label: "Income Report", icon: IconInvoices },
        { id: "TaxReport", label: "Tax Report", icon: IconUnits },
        { id: "ProfitLoss", label: "Profit & Loss", icon: IconLowStocks },
        { id: "AnnualReport", label: "Annual Report", icon: IconQuotation }
      ]
    },
    {
      groupTitle: "User Management",
      items: [
        { id: "Users", label: "Users", icon: IconSuperAdmin },
        { id: "RolesPermissions", label: "Roles & Permissions", icon: IconWarranties },
        { id: "DeleteAccountRequest", label: "Delete Account Request", icon: IconExpired }
      ]
    },
    {
      groupTitle: "Settings",
      items: [
        { id: "GeneralSettings", label: "General Settings", icon: IconUnits, hasChevron: true },
        { id: "WebsiteSettings", label: "Website Settings", icon: IconCategory, hasChevron: true },
        { id: "AppSettings", label: "App Settings", icon: IconPOS, hasChevron: true },
        { id: "SystemSettings", label: "System Settings", icon: IconManageStock, hasChevron: true },
        { id: "FinancialSettings", label: "Financial Settings", icon: IconInvoices, hasChevron: true },
        { id: "OtherSettings", label: "Other Settings", icon: IconBrands, hasChevron: true },
        { id: "Logout", label: "Logout", icon: IconExpired, action: () => showToast("Logged out") }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setIsMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Element (exact 252px width matching Figma) */}
      <aside
        id="main-sidebar"
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-white border-r border-[#E6EAED] transition-all duration-300 ease-in-out select-none
          ${isSidebarCollapsed ? "w-[72px]" : "w-[252px]"}
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Title / Logo Header (exact height: 65px; border-bottom: 1px solid #E6EAED) */}
        <div className="relative flex items-center justify-between h-[65px] px-4 border-b border-[#E6EAED] shrink-0">
          <Link href="/admin" className="flex items-center gap-2 overflow-hidden group">
            <div className="relative w-[115px] h-[36px] flex items-center">
              <Image
                src="/best-car-logo-vector.png"
                alt="BestCar Logo"
                width={115}
                height={36}
                className="object-contain object-left max-h-[36px]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Toggle Handle Button on edge */}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-[#FE9F43] text-white hover:bg-[#E05E12] transition-colors shadow-xs -mr-7 z-10"
            title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            aria-label={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isSidebarCollapsed ? (
              <IconChevronRight className="w-3.5 h-3.5" />
            ) : (
              <IconChevronLeft className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md"
            aria-label="Close Sidebar"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation List (padded exactly as in Figma) */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 custom-scrollbar space-y-4">
          {navGroups.map((group, gIdx) => (
            <div key={group.groupTitle || gIdx} className="space-y-2">
              {/* Group Title (12px, font-weight: 600/700, color: #092C4C) */}
              {!isSidebarCollapsed && (
                <div className="text-[12px] font-bold text-[#092C4C] uppercase tracking-wider px-1">
                  {group.groupTitle}
                </div>
              )}

              {/* Group Menu Items */}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id, item.action)}
                      title={isSidebarCollapsed ? item.label : undefined}
                      className={`group w-full flex items-center justify-between rounded-[8px] px-3 py-2 h-[37px] text-[14px] transition-all duration-150
                        ${
                          isActive
                            ? "bg-[#FFF6EE] text-[#FE9F43] font-medium"
                            : "text-[#212B36] hover:bg-slate-50 font-normal"
                        }
                        ${isSidebarCollapsed ? "justify-center px-2" : ""}
                      `}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`flex items-center justify-center shrink-0 w-4 h-4 transition-colors ${
                            isActive ? "text-[#FE9F43]" : "text-[#646B72] group-hover:text-[#212B36]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </span>

                        {!isSidebarCollapsed && (
                          <span
                            className={`truncate text-left text-[14px] leading-[21px] ${
                              isActive ? "text-[#FE9F43] font-medium" : "text-[#212B36]"
                            }`}
                          >
                            {item.label}
                          </span>
                        )}
                      </div>

                      {!isSidebarCollapsed && (
                        <div className="shrink-0">
                          {item.hasDropdown && (
                            <div className="w-4 h-4 rounded-full bg-[#FFEDDD] flex items-center justify-center">
                              <IconChevronDown className="w-3 h-3 text-[#FE9F43]" />
                            </div>
                          )}
                          {item.hasChevron && (
                            <div className="w-4 h-4 rounded-full bg-[#F2F2F2] flex items-center justify-center">
                              <IconChevronRight className="w-3 h-3 text-[#646B72]" />
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Divider between sections */}
              {gIdx < navGroups.length - 1 && !isSidebarCollapsed && (
                <div className="h-[1px] bg-[#E6EAED] my-3 w-full" />
              )}
            </div>
          ))}
        </div>

        {/* Sticky Bottom Actions Bar (width: 251px; height: 38px; background: #FFFFFF; border-top: 1px solid #E5E7EB; box-shadow: 0px 1px 1px 1px rgba(198, 198, 198, 0.2);) */}
        {!isSidebarCollapsed && (
          <div className="h-[38px] bg-white border-t border-[#E5E7EB] shadow-[0px_1px_1px_1px_rgba(198,198,198,0.2)] flex items-center justify-center gap-6 px-4 shrink-0">
            <button
              onClick={() => showToast("Users Inbox")}
              className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center hover:bg-slate-100 text-[#111827] transition-colors"
              title="Users"
            >
              <IconSuperAdmin className="w-4 h-4 text-[#111827]" />
            </button>
            <button
              onClick={() => setActiveModal("addNew")}
              className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center hover:bg-slate-100 text-[#111827] transition-colors"
              title="New Entry"
            >
              <IconCreateProduct className="w-4 h-4 text-[#111827]" />
            </button>
            <button
              onClick={() => showToast("Theme Settings")}
              className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center hover:bg-slate-100 text-[#111827] transition-colors"
              title="Appearance"
            >
              <svg className="w-4 h-4 text-[#111827]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

function IconCalendarSmall({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
