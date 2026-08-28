"use client";

import React from "react";
import { DashboardProvider, useDashboard } from "@/context/DashboardContext";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import GreetingBanner from "@/components/dashboard/GreetingBanner";
import MetricCards from "@/components/dashboard/MetricCards";
import BestSeller from "@/components/dashboard/BestSeller";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import SalesAnalytics from "@/components/dashboard/SalesAnalytics";
import SalesByCountries from "@/components/dashboard/SalesByCountries";
import AddNewModal from "@/components/dashboard/AddNewModal";
import PosModal from "@/components/dashboard/PosModal";
import ViewAllModal from "@/components/dashboard/ViewAllModal";
import CommandPalette from "@/components/dashboard/CommandPalette";
import Footer from "@/components/dashboard/Footer";
import Toast from "@/components/dashboard/Toast";

function DashboardContent() {
  const { isSidebarCollapsed } = useDashboard();

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#212B36] flex flex-col antialiased selection:bg-[#FE9F43] selection:text-white">
      {/* Left Sidebar Navigation (252px width) */}
      <Sidebar />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out min-w-0 ${
          isSidebarCollapsed ? "lg:pl-[72px]" : "lg:pl-[252px]"
        }`}
      >
        {/* Top Header */}
        <Header />

        {/* Dashboard Main Container (1140px / max-w-[1440px]) */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 max-w-none w-full mx-auto flex flex-col justify-between overflow-hidden">
          <div>
            {/* Greeting Banner & Date Filter */}
            <GreetingBanner />

            {/* Top 3 Metric Cards */}
            <MetricCards />

            {/* Middle Row: Best Seller & Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6 min-w-0">
              {/* Left 4.5 cols: Best Seller */}
              <div className="lg:col-span-4 xl:col-span-4">
                <BestSeller />
              </div>

              {/* Right 7.5 cols: Recent Transactions */}
              <div className="lg:col-span-8 xl:col-span-8">
                <RecentTransactions />
              </div>
            </div>

            {/* Bottom Row: Sales Analytics & Sales by Countries */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-w-0">
              {/* Left 7.5 cols: Sales Analytics Chart */}
              <div className="lg:col-span-8 xl:col-span-8">
                <SalesAnalytics />
              </div>

              {/* Right 4.5 cols: Sales by Countries World Map */}
              <div className="lg:col-span-4 xl:col-span-4">
                <SalesByCountries />
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </div>

      {/* Interactive Overlays & Modals */}
      <AddNewModal />
      <PosModal />
      <ViewAllModal />
      <CommandPalette />
      <Toast />
    </div>
  );
}

export default function AdminPage() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
}