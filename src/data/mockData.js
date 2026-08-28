export const initialDashboardData = {
  dashboard: {
    defaultDateRange: "01 Jan 2024 - 07 Jan 2024",
    datePresets: [
      "01 Jan 2024 - 07 Jan 2024",
      "Today (07 Jan 2024)",
      "This Week (01 - 07 Jan)",
      "This Month (Jan 2024)",
      "Last 30 Days",
      "Year to Date (2024)"
    ],
    analyticsYears: ["2024", "2023", "2022"],
    countryPeriods: ["This Week", "This Month", "This Year"],
    transactionStatuses: ["All", "Success", "Cancelled", "Pending"],
    quickActions: [
      { id: "create-order", label: "Create New Order", desc: "Open quick order form", modal: "addNew" },
      { id: "open-pos", label: "Open POS Terminal", desc: "Launch counter point of sale terminal", modal: "pos" },
      { id: "view-transactions", label: "View All Transactions", desc: "Browse and filter full sales ledger", modal: "viewAllTransactions" },
      { id: "view-fleet", label: "View Fleet Inventory", desc: "Browse all car categories and stock", modal: "viewAllBestSellers" }
    ]
  },
  user: {
    name: "Mike Witzel",
    role: "Super Admin",
    avatar: "/avatar.png",
    email: "mike.witzel@bestcar.com",
    store: "Downtown Los Angeles Store #104"
  },
  metrics: {
    weeklyEarning: {
      amount: 95000.45,
      currency: "$",
      percentageChange: 48,
      isIncrease: true,
      comparisonText: "increase compare to last week"
    },
    totalSales: {
      count: "10,000+",
      label: "No of Total Sales",
      periodChange: "+14.2%"
    },
    purchasedGoods: {
      count: "800+",
      label: "No of Purchased Goods",
      periodChange: "+6.8%"
    }
  },
  salesAnalytics: {
    "2023": [
      { month: "Jan", sales: 24000 },
      { month: "Feb", sales: 30000 },
      { month: "Mar", sales: 22000 },
      { month: "Apr", sales: 23500 },
      { month: "May", sales: 23000 },
      { month: "Jun", sales: 30000 },
      { month: "July", sales: 23000 },
      { month: "Aug", sales: 23500 },
      { month: "Sep", sales: 21000 }
    ],
    "2024": [
      { month: "Jan", sales: 32000 },
      { month: "Feb", sales: 38000 },
      { month: "Mar", sales: 31000 },
      { month: "Apr", sales: 39500 },
      { month: "May", sales: 42000 },
      { month: "Jun", sales: 49000 },
      { month: "July", sales: 46000 },
      { month: "Aug", sales: 51000 },
      { month: "Sep", sales: 54000 }
    ],
    "2022": [
      { month: "Jan", sales: 18000 },
      { month: "Feb", sales: 21000 },
      { month: "Mar", sales: 19500 },
      { month: "Apr", sales: 22000 },
      { month: "May", sales: 20500 },
      { month: "Jun", sales: 25000 },
      { month: "July", sales: 22000 },
      { month: "Aug", sales: 21500 },
      { month: "Sep", sales: 19000 }
    ]
  },
  salesByCountries: {
    "This Week": {
      increase: "48%",
      comparisonText: "increase compare to last week",
      regions: [
        { id: "africa", name: "Africa", sales: 3455, percentage: 38, coords: { x: 505, y: 280 } },
        { id: "north-america", name: "North America", sales: 4120, percentage: 45, coords: { x: 230, y: 150 } },
        { id: "south-america", name: "South America", sales: 1240, percentage: 14, coords: { x: 340, y: 340 } },
        { id: "europe", name: "Europe", sales: 2980, percentage: 32, coords: { x: 530, y: 140 } },
        { id: "asia", name: "Asia", sales: 3890, percentage: 42, coords: { x: 720, y: 170 } },
        { id: "australia", name: "Australia", sales: 890, percentage: 10, coords: { x: 820, y: 350 } }
      ]
    },
    "This Month": {
      increase: "34%",
      comparisonText: "increase compare to last month",
      regions: [
        { id: "africa", name: "Africa", sales: 14200, percentage: 36, coords: { x: 505, y: 280 } },
        { id: "north-america", name: "North America", sales: 18500, percentage: 48, coords: { x: 230, y: 150 } },
        { id: "south-america", name: "South America", sales: 5400, percentage: 15, coords: { x: 340, y: 340 } },
        { id: "europe", name: "Europe", sales: 12900, percentage: 34, coords: { x: 530, y: 140 } },
        { id: "asia", name: "Asia", sales: 16700, percentage: 44, coords: { x: 720, y: 170 } },
        { id: "australia", name: "Australia", sales: 3900, percentage: 11, coords: { x: 820, y: 350 } }
      ]
    },
    "This Year": {
      increase: "52%",
      comparisonText: "increase compare to last year",
      regions: [
        { id: "africa", name: "Africa", sales: 84500, percentage: 37, coords: { x: 505, y: 280 } },
        { id: "north-america", name: "North America", sales: 112000, percentage: 50, coords: { x: 230, y: 150 } },
        { id: "south-america", name: "South America", sales: 34000, percentage: 16, coords: { x: 340, y: 340 } },
        { id: "europe", name: "Europe", sales: 78000, percentage: 35, coords: { x: 530, y: 140 } },
        { id: "asia", name: "Asia", sales: 98000, percentage: 43, coords: { x: 720, y: 170 } },
        { id: "australia", name: "Australia", sales: 24000, percentage: 12, coords: { x: 820, y: 350 } }
      ]
    }
  },
  bestSellers: [
    {
      id: "bs-1",
      name: "Range Rover",
      price: "$260",
      rawPrice: 260,
      sales: "6547",
      rawSales: 6547,
      category: "SUV",
      carType: "white-suv",
      rating: 4.9,
      inStock: 18
    },
    {
      id: "bs-2",
      name: "Audi S3",
      price: "$1474",
      rawPrice: 1474,
      sales: "3474",
      rawSales: 3474,
      category: "Sedan",
      carType: "red-car",
      rating: 4.8,
      inStock: 12
    },
    {
      id: "bs-3",
      name: "Blue Nissan",
      price: "$8784",
      rawPrice: 8784,
      sales: "1478",
      rawSales: 1478,
      category: "Coupe",
      carType: "blue-coupe",
      rating: 4.7,
      inStock: 7
    },
    {
      id: "bs-4",
      name: "Toyota Corolla",
      price: "$3240",
      rawPrice: 3240,
      sales: "987",
      rawSales: 987,
      category: "Sedan",
      carType: "toyota-corolla",
      rating: 4.6,
      inStock: 25
    },
    {
      id: "bs-5",
      name: "Compact car",
      price: "$597",
      rawPrice: 597,
      sales: "784",
      rawSales: 784,
      category: "Hatchback",
      carType: "compact-car",
      rating: 4.5,
      inStock: 14
    }
  ],
  transactions: [
    {
      id: 1,
      orderNumber: "#416645453773",
      vehicle: "Range Rover",
      carType: "white-suv",
      time: "15 Mins",
      customerName: "Alex Harrison",
      paymentMethod: "Paypal",
      status: "Success",
      amount: "$1099.00",
      rawAmount: 1099.00,
      date: "2024-01-07"
    },
    {
      id: 2,
      orderNumber: "#147784454554",
      vehicle: "Red Toyota",
      carType: "red-car",
      time: "15 Mins",
      customerName: "Jessica Lee",
      paymentMethod: "Apple Pay",
      status: "Cancelled",
      amount: "$600.55",
      rawAmount: 600.55,
      date: "2024-01-07"
    },
    {
      id: 3,
      orderNumber: "#147784454554",
      vehicle: "blue Nissan",
      carType: "blue-coupe",
      time: "15 Mins",
      customerName: "David Miller",
      paymentMethod: "Stripe",
      status: "Pending",
      amount: "$200.10",
      rawAmount: 200.10,
      date: "2024-01-06"
    },
    {
      id: 4,
      orderNumber: "#147784454554",
      vehicle: "Toyota Corolla",
      carType: "toyota-corolla",
      time: "15 Mins",
      customerName: "Emma Watson",
      paymentMethod: "PayU",
      status: "Success",
      amount: "$1569.00",
      rawAmount: 1569.00,
      date: "2024-01-06"
    },
    {
      id: 5,
      orderNumber: "#147784454554",
      vehicle: "Range Rover",
      carType: "white-suv",
      time: "15 Mins",
      customerName: "Marcus Vance",
      paymentMethod: "Paytm",
      status: "Success",
      amount: "$1478.00",
      rawAmount: 1478.00,
      date: "2024-01-05"
    }
  ],
  notificationsList: [
    {
      id: "n-1",
      title: "New High-Value Booking",
      desc: "Range Rover booked for 7 days by Alex Harrison.",
      time: "5 mins ago",
      unread: true,
      type: "booking"
    },
    {
      id: "n-2",
      title: "Payment Received",
      desc: "Successfully processed $1,099.00 via Paypal.",
      time: "15 mins ago",
      unread: true,
      type: "payment"
    }
  ],
  messagesList: [
    {
      id: "m-1",
      sender: "Support Desk",
      avatar: "SD",
      subject: "Customer inquiry #4920",
      snippet: "Client requested early pickup for Range Rover tomorrow...",
      time: "10:30 AM",
      unread: true
    }
  ]
};
