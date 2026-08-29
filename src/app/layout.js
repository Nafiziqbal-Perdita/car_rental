import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import AiAssistantRoot from "@/features/aiAssistant/components/AiAssistantRoot";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "BestCar | Easy Car Rental",
  description: "Book a rental car quickly and easily with BestCar.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#FBFBFB] font-sans text-[#212B36]">
        {children}
        <AiAssistantRoot />
      </body>
    </html>
  );
}
