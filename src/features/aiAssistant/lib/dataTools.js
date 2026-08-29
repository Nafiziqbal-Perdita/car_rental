import { toolDefinition } from "@tanstack/ai";
import { initialDashboardData } from "@/data/mockData";
import { customerFrontEndData } from "@/data/customerMockData";

const normalizeLimit = (value, fallback = 5) => {
  const limit = Number(value ?? fallback);
  return Number.isFinite(limit) ? Math.max(1, Math.min(limit, 20)) : fallback;
};

export const getDashboardMetricsTool = toolDefinition({
  name: "getDashboardMetrics",
  description:
    "Get KPI figures, recent transactions, notifications, and top-selling vehicles from the car rental dashboard mock data.",
  inputSchema: {
    type: "object",
    properties: {
      metric: {
        type: "string",
        enum: ["summary", "transactions", "inventory", "notifications"],
        description: "Which dashboard slice to return.",
      },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 20,
        description: "How many rows to return for list-based results.",
      },
    },
    additionalProperties: false,
  },
  outputSchema: {
    type: "object",
    additionalProperties: true,
  },
}).server(async ({ metric = "summary", limit = 5 } = {}) => {
  const data = initialDashboardData;

  switch (metric) {
    case "transactions":
      return {
        source: "dashboard.transactions",
        metric,
        items: data.transactions.slice(0, normalizeLimit(limit, 5)).map((item) => ({
          id: item.id,
          orderNumber: item.orderNumber,
          vehicle: item.vehicle,
          customerName: item.customerName,
          status: item.status,
          amount: item.amount,
          paymentMethod: item.paymentMethod,
          date: item.date,
        })),
      };
    case "inventory":
      return {
        source: "dashboard.bestSellers",
        metric,
        items: data.bestSellers.slice(0, normalizeLimit(limit, 5)).map((item) => ({
          id: item.id,
          name: item.name,
          category: item.category,
          price: item.price,
          sales: item.sales,
          inStock: item.inStock,
          rating: item.rating,
        })),
      };
    case "notifications":
      return {
        source: "dashboard.notificationsList",
        metric,
        items: data.notificationsList.slice(0, normalizeLimit(limit, 5)).map((item) => ({
          id: item.id,
          title: item.title,
          description: item.desc,
          time: item.time,
          unread: item.unread,
          type: item.type,
        })),
      };
    case "summary":
    default:
      return {
        source: "dashboard.summary",
        metric: "summary",
        store: data.user.store,
        manager: data.user.name,
        financial: {
          weeklyEarning: data.metrics.weeklyEarning,
          totalSales: data.metrics.totalSales,
          purchasedGoods: data.metrics.purchasedGoods,
        },
        bestSellers: data.bestSellers.slice(0, normalizeLimit(limit, 5)).map((item) => ({
          id: item.id,
          name: item.name,
          category: item.category,
          price: item.price,
          sales: item.sales,
          inStock: item.inStock,
        })),
        recentTransactions: data.transactions.slice(0, normalizeLimit(limit, 5)).map((item) => ({
          orderNumber: item.orderNumber,
          vehicle: item.vehicle,
          status: item.status,
          amount: item.amount,
          customerName: item.customerName,
        })),
      };
  }
});

export const getSalesByRegionTool = toolDefinition({
  name: "getSalesByRegion",
  description:
    "Return sales performance by region for dashboard periods like This Week, This Month, or This Year.",
  inputSchema: {
    type: "object",
    properties: {
      period: {
        type: "string",
        enum: ["This Week", "This Month", "This Year"],
        description: "The sales period to inspect.",
      },
    },
    additionalProperties: false,
  },
  outputSchema: {
    type: "object",
    additionalProperties: true,
  },
}).server(async ({ period = "This Week" } = {}) => {
  const regionData = initialDashboardData.salesByCountries?.[period] ?? {
    increase: "0%",
    comparisonText: "No region data available.",
    regions: [],
  };

  return {
    source: "dashboard.salesByCountries",
    period,
    increase: regionData.increase,
    comparisonText: regionData.comparisonText,
    regions: regionData.regions.map((region) => ({
      name: region.name,
      sales: region.sales,
      percentage: region.percentage,
    })),
  };
});

export const getCustomerVehicleCatalogTool = toolDefinition({
  name: "getCustomerVehicleCatalog",
  description:
    "Return the customer-facing rental catalog with cars, prices, categories, and booking options from the public storefront mock data.",
  inputSchema: {
    type: "object",
    properties: {
      category: {
        type: "string",
        description: "Optional vehicle type filter such as Small, Large, Popular, or Exclusive.",
      },
      limit: {
        type: "integer",
        minimum: 1,
        maximum: 20,
      },
    },
    additionalProperties: false,
  },
  outputSchema: {
    type: "object",
    additionalProperties: true,
  },
}).server(async ({ category, limit = 6 } = {}) => {
  const cars = customerFrontEndData.cars.filter((car) => {
    if (!category) return true;
    return String(car.type).toLowerCase() === String(category).toLowerCase();
  });

  return {
    source: "customer.catalog",
    brand: customerFrontEndData.brand,
    booking: customerFrontEndData.booking,
    cars: cars.slice(0, normalizeLimit(limit, 6)).map((car) => ({
      name: car.name,
      price: car.price,
      type: car.type,
      color: car.color,
      image: car.image,
    })),
    totalAvailable: cars.length,
  };
});

export const customerRentalTools = [
  getDashboardMetricsTool,
  getSalesByRegionTool,
  getCustomerVehicleCatalogTool,
];
