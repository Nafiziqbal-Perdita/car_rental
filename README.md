# BestCar

<p align="center">
  <img src="https://raw.githubusercontent.com/Nafiziqbal-Perdita/car_rental/main/public/best-car-logo.png" alt="BestCar Logo" width="220" />
</p>

A modern car rental website built with Next.js, designed to showcase a premium rental experience for both customers and administrators. This project includes a functional customer-facing storefront, a complete admin dashboard, and an AI-powered assistant that answers questions using website and company mock data.

## Live Project

- Customer Website: https://car-rental-nine-nu-98.vercel.app/
- Admin Dashboard: https://car-rental-nine-nu-98.vercel.app/admin
- GitHub Repository: https://github.com/Nafiziqbal-Perdita/car_rental

---

## Overview

This is a Car Rental Website built for a premium rental business experience. It combines:

- Customer-facing car booking and rental browsing
- Admin dashboard analytics and management
- AI assistant support using TanStack AI
- Mock data to simulate a real rental business workflow

The project follows a clean structure and a real-world app flow where the customer can browse cars, choose categories, view pricing, and explore rental deals; the admin can monitor sales, transactions, and performance; and the AI assistant can provide instant answers from the mock business data.

**System Architecture:**

```mermaid
graph LR
    subgraph Client["Client Layer"]
        CF["Customer Front End"]
        AD["Admin Dashboard"]
    end
    
    subgraph AI["AI Layer"]
        AP["AI Assistant Panel"]
        TC["Tool Calling Engine"]
    end
    
    subgraph Backend["Backend Layer"]
        API["Chat API Route"]
        TOOLS["Data Tools"]
    end
    
    subgraph Data["Data Layer"]
        CMD["Customer Mock Data"]
        AMD["Admin Mock Data"]
    end
    
    CF -->|Browse & Interact| AP
    AD -->|Monitor & Analyze| AP
    AP -->|Send Question| API
    API -->|Process with TanStack AI| TC
    TC -->|Call Tools| TOOLS
    TOOLS -->|Fetch| CMD
    TOOLS -->|Fetch| AMD
    TC -->|Return Answer| API
    API -->|Stream Response| AP
    AP -->|Display| CF
    AP -->|Display| AD
```

---

## Website Workflow Structure

The full workflow of the project is designed in a simple and clear flow:

```mermaid
graph TD
    A["Customer Visits Website"] --> B["Browse Hero Section & Deals"]
    B --> C["View Popular Cars & Categories"]
    C --> D["Select Car & Booking Details"]
    D --> E["Check Pricing & Booking Options"]
    E --> F{Need Help?}
    F -->|Ask AI| G["AI Assistant Answers Question"]
    G --> H["AI Calls Appropriate Tool"]
    H --> I["Tool Fetches Mock Data"]
    I --> J["AI Sends Answer to User"]
    J --> K["Customer Completes Booking"]
    
    L["Admin Opens Dashboard"] --> M["View Analytics & Metrics"]
    M --> N["Monitor Sales & Transactions"]
    N --> O["Track Best Sellers & Region Data"]
    O --> P{Need Insights?}
    P -->|Ask AI| G
    P -->|Continue Monitoring| Q["Dashboard Metrics Updated"]
```

**Workflow Steps:**

1. **Customer Journey:**
   - Opens website and views hero section, deals, and featured cars
   - Browses vehicle categories and filters by preference
   - Selects a car and enters booking details
   - Reviews pricing and booking options
   - Can ask the AI assistant for rental help
   - Completes the rental booking

2. **Admin Dashboard:**
   - Opens admin panel to view business analytics
   - Monitors sales metrics, transactions, and performance
   - Tracks best-selling vehicles and regional sales
   - Can ask the AI assistant for business insights
   - Views updated dashboard metrics in real-time

3. **AI Assistant (Both Sides):**
   - Available to both customer and admin
   - Understands questions and calls the right tool
   - Retrieves data from mock datasets
   - Provides instant, accurate answers

---

## Functional Customer Front End

<img src="https://raw.githubusercontent.com/Nafiziqbal-Perdita/car_rental/main/public/customer-frontend.png" alt="Customer Front End" width="100%" />

Customer Website URL: https://car-rental-nine-nu-98.vercel.app/

This is a functional customer website front end where customers can:

- browse popular car rental deals
- choose car categories and filter by type
- view pricing and vehicle details
- check rental booking information
- explore customer reviews and support sections
- use the AI assistant for instant information

The UI follows the Figma-driven design closely, and the design direction was guided by AI for faster implementation. The core technical decisions, structure, and logic were built by the developer, with AI used as a coding accelerator rather than the main decision-maker.

---

## Functional Admin Dashboard

<img src="https://raw.githubusercontent.com/Nafiziqbal-Perdita/car_rental/main/public/admin-dashboard.png" alt="Admin Dashboard" width="100%" />

Admin URL: https://car-rental-nine-nu-98.vercel.app/admin

This is a functional admin dashboard where the admin can analyze and monitor:

- Weekly earnings
- Best seller cars
- Recent transactions
- Sales analytics
- Sales by countries
- Inventory-related metrics and business performance data

This dashboard is designed to match the exact Figma layout and style, with a strong emphasis on a clean and professional business dashboard experience.

---

## AI Feature Demonstrations

<img src="https://raw.githubusercontent.com/Nafiziqbal-Perdita/car_rental/main/public/ai-chat-demo.png" alt="AI Assistant Demo" width="100%" />

The AI feature is available for both the customer and admin experience. The assistant can answer questions related to:

- available cars
- rental pricing
- car categories
- business data
- sales performance
- admin reporting information
- customer-side questions about car selection and booking

The AI is designed to answer faster and more efficiently than a normal manual lookup, and it works using the website's mock business data.

---

## AI Automation Workflow

<img src="https://raw.githubusercontent.com/Nafiziqbal-Perdita/car_rental/main/public/ai-workflow.png" alt="AI Workflow" width="100%" />

The AI automation workflow is as follows:

```mermaid
graph TD
    A["User / Admin Asks Question"] --> B["AI Reads & Analyzes Message"]
    B --> C["AI Identifies Needed Data Type"]
    C --> D{Data Type?}
    D -->|Dashboard Metrics| E["Call getDashboardMetricsTool"]
    D -->|Sales by Region| F["Call getSalesByRegionTool"]
    D -->|Vehicle Catalog| G["Call getCustomerVehicleCatalogTool"]
    E --> H["Tool Fetches Mock Data"]
    F --> H
    G --> H
    H --> I["AI Understands Data Response"]
    I --> J["AI Formats & Sends Answer"]
    J --> K["User / Admin Receives Response"]
```

**Workflow Steps:**

1. **User/Admin Question** — Customer or admin asks a question via the AI chat panel
2. **Message Analysis** — AI reads and understands the user's intent
3. **Data Identification** — AI determines which data source is needed
4. **Tool Selection** — Based on the question type, AI selects the appropriate tool:
   - `getDashboardMetricsTool` — for dashboard data (earnings, transactions)
   - `getSalesByRegionTool` — for sales and region performance
   - `getCustomerVehicleCatalogTool` — for vehicle inventory and pricing
5. **Data Fetch** — The selected tool retrieves data from the mock dataset
6. **Data Processing** — AI interprets the retrieved data
7. **Response Generation** — AI formats a helpful answer
8. **User Response** — Answer is sent back to the user in real-time

This is built using TanStack AI, which is highly effective for tool-calling workflows and real-time assistant behavior.

---

## Mock Data

Mock data is used throughout the project to make the website feel functional and realistic.

The mock dataset includes:

- car listings
- booking options
- customer reviews
- sales and income numbers
- transaction records
- best seller data
- sales-by-country statistics
- admin metrics and dashboard values

The mock data is intentionally created to simulate a real rental business environment while keeping the project lightweight and easy to run locally.

---

## Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- TanStack AI
- Mock Data Layer

---

## Project Structure

```bash
src/
├── app/
│   ├── admin/
│   ├── api/
│   ├── customerFrontEnd/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── BookingBar.jsx
│   ├── BookingField.jsx
│   ├── dashboard/
│   ├── Icon.jsx
│   └── WaveIcon.jsx
├── context/
│   └── DashboardContext.jsx
├── data/
│   ├── customerMockData.js
│   └── mockData.js
└── features/
    └── aiAssistant/
```

---

## Developer Notes

The project is built with a clear developer workflow:

- the tech stack was selected intentionally
- the logic was developed by the developer
- AI was used to speed up implementation and UI building
- the structure, architecture, and product decisions were controlled by the developer
- the final output is a functional product inspired by the Figma design and business concept

This project represents a strong blend of product thinking, UI implementation, data modeling, and AI-powered assistance.

---

## Run Locally

```bash
npm install
npm run dev
```

Or using Bun:

```bash
bun install
bun run dev
```

---

## Useful Commands

```bash
bun run lint
bun run build
```

---

## Summary

BestCar is a modern car rental website with a premium front-end, a functional admin dashboard, and an AI-powered assistant that answers based on website and company data. It demonstrates a real-world product flow from customer browsing to business analytics, all powered by a clean Next.js architecture with interactive mock data.

BestCar combines design, functionality, business logic, and AI automation into one complete rental website experience.

