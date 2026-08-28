"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { initialDashboardData } from "@/data/mockData";

const DashboardContext = createContext(null);

export function DashboardProvider({ children }) {
  // Filters & Selected States
  const [dateRange, setDateRange] = useState(initialDashboardData.dashboard.defaultDateRange);
  const [analyticsYear, setAnalyticsYear] = useState(initialDashboardData.dashboard.analyticsYears[1]);
  const [countryPeriod, setCountryPeriod] = useState(initialDashboardData.dashboard.countryPeriods[0]);
  const [activeCountry, setActiveCountry] = useState("africa");
  const [transactionStatus, setTransactionStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // UI Toggles
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isBannerCollapsed, setIsBannerCollapsed] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'addNew' | 'pos' | 'viewAllTransactions' | 'viewAllBestSellers' | 'commandPalette' | 'notifications' | 'messages'
  const [toastMessage, setToastMessage] = useState(null);

  // Dynamic Data Store
  const [metrics, setMetrics] = useState(initialDashboardData.metrics);
  const [bestSellers, setBestSellers] = useState(initialDashboardData.bestSellers);
  const [transactions, setTransactions] = useState(initialDashboardData.transactions);
  const [notifications, setNotifications] = useState(initialDashboardData.notificationsList);
  const [messages, setMessages] = useState(initialDashboardData.messagesList);
  const [user, setUser] = useState(initialDashboardData.user);

  // Refresh Dashboard
  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Slightly tweak numbers to demonstrate dynamic state reactivity
      setMetrics((prev) => ({
        ...prev,
        weeklyEarning: {
          ...prev.weeklyEarning,
          amount: parseFloat((prev.weeklyEarning.amount + (Math.random() * 200 - 100)).toFixed(2))
        }
      }));
      setIsRefreshing(false);
      showToast("Dashboard data synchronized successfully!");
    }, 600);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Add a new transaction / booking dynamically
  const addTransaction = (newTx) => {
    const transactionId = transactions.length + 1;
    const orderNumber = `#${Math.floor(100000000000 + Math.random() * 900000000000)}`;
    const createdItem = {
      id: transactionId,
      orderNumber,
      vehicle: newTx.vehicle || "Range Rover",
      carType: newTx.carType || "white-suv",
      time: "Just now",
      customerName: newTx.customerName || "Walk-in Customer",
      paymentMethod: newTx.paymentMethod || "Stripe",
      status: newTx.status || "Success",
      amount: `$${parseFloat(newTx.rawAmount || 1099).toFixed(2)}`,
      rawAmount: parseFloat(newTx.rawAmount || 1099),
      date: new Date().toISOString().split("T")[0]
    };

    setTransactions((prev) => [createdItem, ...prev]);

    // If successful, dynamically increment weekly earnings & total sales
    if (createdItem.status === "Success") {
      setMetrics((prev) => ({
        ...prev,
        weeklyEarning: {
          ...prev.weeklyEarning,
          amount: parseFloat((prev.weeklyEarning.amount + createdItem.rawAmount).toFixed(2))
        }
      }));
    }

    showToast(`Order ${orderNumber} created successfully!`);
    setActiveModal(null);
  };

  // Filtered transactions based on status & search query
  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      const matchesStatus = transactionStatus === "All" || tx.status === transactionStatus;
      const matchesSearch =
        searchQuery.trim() === "" ||
        tx.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tx.customerName && tx.customerName.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesStatus && matchesSearch;
    });
  }, [transactions, transactionStatus, searchQuery]);

  // Current Sales Analytics data based on selected year
  const currentAnalyticsData = useMemo(() => {
    const fallbackYear = initialDashboardData.dashboard.analyticsYears[1];
    return initialDashboardData.salesAnalytics[analyticsYear] || initialDashboardData.salesAnalytics[fallbackYear];
  }, [analyticsYear]);

  // Current Country Sales data based on selected period
  const currentCountryData = useMemo(() => {
    const fallbackPeriod = initialDashboardData.dashboard.countryPeriods[0];
    return initialDashboardData.salesByCountries[countryPeriod] || initialDashboardData.salesByCountries[fallbackPeriod];
  }, [countryPeriod]);

  const value = {
    // State
    dateRange,
    setDateRange,
    datePresets: initialDashboardData.dashboard.datePresets,
    analyticsYears: initialDashboardData.dashboard.analyticsYears,
    countryPeriods: initialDashboardData.dashboard.countryPeriods,
    transactionStatuses: initialDashboardData.dashboard.transactionStatuses,
    quickActions: initialDashboardData.dashboard.quickActions,
    analyticsYear,
    setAnalyticsYear,
    countryPeriod,
    setCountryPeriod,
    activeCountry,
    setActiveCountry,
    transactionStatus,
    setTransactionStatus,
    searchQuery,
    setSearchQuery,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    isBannerCollapsed,
    setIsBannerCollapsed,
    isRefreshing,
    triggerRefresh,
    activeModal,
    setActiveModal,
    toastMessage,
    showToast,

    // Data
    user,
    metrics,
    bestSellers,
    transactions,
    filteredTransactions,
    notifications,
    messages,
    currentAnalyticsData,
    currentCountryData,
    addTransaction
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}
