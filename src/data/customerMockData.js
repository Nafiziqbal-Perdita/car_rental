export const customerFrontEndData = {
  brand: "BestCar",
  hero: {
    eyebrow: "100% Trusted Car rental platform in the UK",
    title: "Fast And Easy Way To Rent A Car",
    description:
      "Our car rental online booking system designed to meet the specific needs of rent-a-car businesses. This easy-to-use car rental software will let you manage.",
    image:
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
  },
  booking: {
    locations: ["London", "Manchester", "Liverpool", "Birmingham"],
    dates: ["Today, 07 Jan", "Tomorrow, 08 Jan", "Friday, 09 Jan"],
    times: ["09:00 AM", "12:00 PM", "03:00 PM"],
  },
  howItWorks: [
    {
      title: "Choose Location",
      description: "Select the city where you want to collect your rental car.",
      icon: "pin",
    },
    {
      title: "Pick-up Date",
      description: "Choose a date and time that works best for your journey.",
      icon: "calendar",
    },
    {
      title: "Book your car",
      description: "Pick a vehicle, confirm your details, and hit the road.",
      icon: "car",
    },
  ],
  cars: [
    {
      name: "All New Rush",
      price: "$72.00",
      type: "Popular",
      color: "#d9e8ff",
      image: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Audi A4",
      price: "$84.00",
      type: "Large",
      color: "#ffe3d0",
      image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Nissan Altima",
      price: "$68.00",
      type: "Small",
      color: "#d8f0e7",
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Toyota Corolla",
      price: "$76.00",
      type: "Large",
      color: "#f3e2ff",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Range Rover",
      price: "$108.00",
      type: "Exclusive",
      color: "#ffe8c9",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Kia Sorento",
      price: "$92.00",
      type: "Popular",
      color: "#dff1ff",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746c8c?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Honda Civic",
      price: "$70.00",
      type: "Small",
      color: "#ffe0e8",
      image: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Mercedes C-Class",
      price: "$98.00",
      type: "Exclusive",
      color: "#e4e4ff",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=700&q=80",
    },
  ],
  benefits: [
    {
      title: "Customer Support",
      description: "Extremely responsive customer support provided by the team at BestCar UK.",
      icon: "phone",
    },
    {
      title: "Best Price Guaranteed",
      description: "Extremely best prices for all categories offered at the best car rental UK.",
      icon: "tag",
    },
    {
      title: "Many Location",
      description: "The best locations near the biggest cities, ready whenever you are.",
      icon: "map",
    },
  ],
  testimonials: [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      quote: "Wow... I am very happy to use this service, it turned out to be more than my expectations and so far there have been no problems.",
      rating: "4.5",
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      quote: "The booking was simple, the car was spotless, and the whole team made our trip feel effortless.",
      rating: "4.8",
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      quote: "A reliable rental experience with clear prices and friendly service from start to finish.",
      rating: "4.7",
    },
  ],
  footer: {
    description: "Our vision is to provide convenience and help increase your travel freedom.",
    about: ["How it works", "Featured", "Partnership"],
    community: ["Events", "Blog", "Podcast"],
    socials: ["Discord", "Instagram", "Twitter"],
  },
};

// Keep the storefront catalog stable so SSR and hydration match exactly.
const extraCars = [
  { name: "Toyota Cruiser 11", price: "$65.00", type: "Popular", color: "#d9e8ff", image: "https://images.unsplash.com/photo-1550314405-509338b47214?auto=format&fit=crop&w=700&q=80" },
  { name: "Honda Sedan 22", price: "$71.00", type: "Small", color: "#ffe3d0", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=700&q=80" },
  { name: "Ford SUV 35", price: "$82.00", type: "Large", color: "#d8f0e7", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80" },
  { name: "BMW Sport 41", price: "$103.00", type: "Exclusive", color: "#f3e2ff", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=80" },
  { name: "Audi EV 12", price: "$96.00", type: "Electric", color: "#ffe8c9", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80" },
  { name: "Hyundai Pro 18", price: "$67.00", type: "Popular", color: "#dff1ff", image: "https://images.unsplash.com/photo-1550314405-509338b47214?auto=format&fit=crop&w=700&q=80" },
  { name: "Kia Max 27", price: "$74.00", type: "Large", color: "#ffe0e8", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=700&q=80" },
  { name: "Mercedes Ultra 31", price: "$110.00", type: "Exclusive", color: "#e4e4ff", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80" },
  { name: "Volvo Lite 07", price: "$88.00", type: "Small", color: "#f5f5f5", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=80" },
  { name: "Tesla EV 42", price: "$118.00", type: "Electric", color: "#e8f7ec", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80" },
];

customerFrontEndData.cars = [...customerFrontEndData.cars, ...extraCars];