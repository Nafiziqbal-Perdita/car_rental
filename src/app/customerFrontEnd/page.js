"use client";

import { useState } from "react";
import Image from "next/image";
import { customerFrontEndData as data } from "@/data/customerMockData";
import BookingBar from "@/components/BookingBar";
import Icon from "@/components/Icon";
import WaveIcon from "@/components/WaveIcon";

const carTypeByTab = {
  "Large Car": "Large",
  "Small Car": "Small",
  "Exclusive Car": "Exclusive",
};

export default function CustomerFrontEndPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Popular");
  const [location, setLocation] = useState(data.booking.locations[0]);
  const [dropLocation, setDropLocation] = useState(data.booking.locations[0]);
  const [favorites, setFavorites] = useState([]);
  const [notice, setNotice] = useState("");
  const notify = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };
  const tabs = ["Popular", "Large Car", "Small Car", "Exclusive Car"];
  const cars =
    activeTab === "Popular"
      ? data.cars
      : data.cars.filter((car) => car.type === carTypeByTab[activeTab]);

  return (
    <div className="customer-page font-['Plus_Jakarta_Sans']">
      <header className="relative z-20 flex h-[100px] items-center justify-between border-b border-[#B8B8B8] bg-white px-6 sm:px-10 lg:px-[66px]">
        <a
          className="text-[26px] font-semibold tracking-[-0.03em] text-[#1A202C] sm:text-[32px]"
          href="#home"
        >
          BestCar
        </a>
        <button
          className="text-2xl lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <nav
          className={`${menuOpen ? "absolute left-0 right-0 top-full flex" : "hidden"} flex-col gap-1 border-b border-[#B8B8B8] bg-white p-5 text-sm lg:static lg:flex lg:flex-row lg:items-center lg:gap-[38px] lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <a className="font-semibold text-[#1A202C]" href="#home">
            Home
          </a>
          <a className="text-[#1A202C]/60" href="#how">
            How it Work
          </a>
          <a className="text-[#1A202C]/60" href="#fleet">
            Rental Details
          </a>
          <a className="text-[#1A202C]/60" href="#why">
            Why Choose Us
          </a>
          <a className="text-[#1A202C]/60" href="#reviews">
            Testimonial
          </a>
          <a
            className="border-[#B8B8B8] text-[#1A202C]/60 underline lg:border-l lg:pl-6"
            href="#footer"
          >
            Register
          </a>
          <button
            className="rounded bg-[#1A202C] px-5 py-2 text-white"
            onClick={() => notify("Welcome back to BestCar")}
          >
            Log In
          </button>
        </nav>
      </header>
      <main>
        <section
          className="relative min-h-[733px] bg-[#C4C4C4] px-6 pb-[250px] pt-[150px] sm:px-12 lg:px-[64px]"
          id="home"
        >
          <div className="relative z-10 max-w-[575px]">
            <p className="mb-[42px] text-xs font-medium text-[#1A202C] sm:text-sm">
              {data.hero.eyebrow}
            </p>
            <h1 className="mb-6 max-w-[575px] text-[38px] font-extrabold uppercase leading-[1.12] tracking-[-0.03em] text-[#1A202C] sm:text-5xl">
              {data.hero.title}
            </h1>
            <p className="mb-7 max-w-[535px] text-sm font-medium leading-[1.6] text-[#1A202C]/45 sm:text-base">
              {data.hero.description}
            </p>
            <div className="flex items-center gap-10">
              <button
                className="rounded bg-white px-5 py-2.5 text-sm font-semibold text-[#1A202C]"
                onClick={() =>
                  document
                    .getElementById("booking")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Booking Now
              </button>
              <a className="text-sm font-semibold text-[#1A202C]" href="#fleet">
                See all cars
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-[77px] hidden h-[600px] w-1/2 overflow-hidden rounded-tl-[63px] bg-[#999999] lg:block">
            <div className="absolute inset-0">
              <Image
                src={data.hero.image}
                alt="Featured rental car"
                width={1200}
                height={900}
                priority
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#999999]/20 via-[#999999]/10 to-[#999999]/40" />
          </div>
          <BookingBar
            bookingData={data.booking}
            location={location}
            setLocation={setLocation}
            dropLocation={dropLocation}
            setDropLocation={setDropLocation}
            notify={notify}
          />
        </section>
        <section
          className="min-h-[500px] bg-white px-6 pb-16 pt-8 sm:px-10 lg:px-[77px] lg:pt-8"
          id="how"
        >
          <div className="mx-auto max-w-[530px] text-center">
            <h2 className="mb-[18px] text-4xl font-medium leading-[1.5] tracking-[-0.02em] text-black sm:text-5xl">
              How it works
            </h2>
            <p className="text-sm leading-[1.5] text-[#1A202C] sm:text-lg">
              A high-performing web-based car rental system for any rent-a-car
              company and website.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-[1282px] grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
            {data.howItWorks.map((step, index) => (
              <article className="relative overflow-visible text-center" key={step.title}>
                <div className="relative mx-auto h-[106px] w-[106px] rounded-[30px] bg-[#B8B8B8]/15 p-7 text-[#B8B8B8]">
                  <Icon name={step.icon} className="h-full w-full" />
                </div>
                <h3 className="mb-[12px] mt-[29px] text-xl font-semibold leading-[1.5] tracking-[-0.02em] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-[276px] text-xs leading-[1.75] text-[#1A202C] sm:text-sm">
                  {step.description}
                </p>

                {index < 2 && (
                    <div className="pointer-events-none absolute left-[calc(50%+53px)] top-[42px] z-10 hidden h-[42px] w-[calc(100%-82px)] md:block">
                    <WaveIcon
                        width="100%"
                        height="100%"
                      color="#1A202C"
                      strokeWidth={1.5}
                        className="opacity-80"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
        <section
          className="bg-[#F3F3F3] px-6 py-16 sm:px-10 lg:px-[64px]"
          id="fleet"
        >
          <SectionIntro
            title="Most popular car rental deals"
            text="Choose from our carefully selected cars and find the right fit for your journey."
          />
          <div className="mx-auto grid max-w-[1312px] grid-cols-4 border-b border-[#90A3BF] max-md:min-w-[520px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`border-b-4 px-2 pb-5 text-lg ${activeTab === tab ? "border-[#1A202C] font-bold text-[#1A202C]" : "border-transparent text-[#777777]"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-[1312px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-2">
            {cars.map((car, index) => (
              <article
                className="relative min-h-[388px] overflow-hidden rounded-[10px] bg-white p-6 max-sm:min-h-[270px] max-sm:p-3.5"
                key={`${car.id || car.name}-${index}`}
              >
                <button
                  className={`absolute right-5 top-4 z-10 text-2xl ${favorites.includes(car.name) ? "text-red-500" : "text-[#1A202C]"}`}
                  onClick={() =>
                    setFavorites((current) =>
                      current.includes(car.name)
                        ? current.filter((name) => name !== car.name)
                        : [...current, car.name],
                    )
                  }
                  aria-label={`Favorite ${car.name}`}
                >
                  ♡
                </button>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold max-sm:text-sm">
                    {car.name}
                  </h3>
                  <span className="text-xs text-[#777777]">{car.type}</span>
                </div>
                <div
                  className="absolute inset-x-0 top-[90px] grid h-[180px] place-items-center max-sm:top-[65px] max-sm:h-[125px]"
                  style={{ backgroundColor: car.color }}
                >
                  <Image
                    className="h-full w-full object-cover mix-blend-multiply"
                    src={car.image}
                    alt={car.name}
                    width={700}
                    height={420}
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-[22px] left-6 right-6 flex items-center justify-between max-sm:bottom-3.5 max-sm:left-3.5 max-sm:right-3.5">
                  <strong className="text-lg max-sm:text-xs">
                    {car.price}
                    <small className="text-xs">/ day</small>
                  </strong>
                  <button
                    className="rounded bg-[#1A202C] px-3 py-2 text-xs font-bold text-white max-sm:px-2 max-sm:py-1.5 max-sm:text-[9px]"
                    onClick={() => notify(`${car.name} added to your booking`)}
                  >
                    Rent Now
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="relative mx-auto mt-12 flex h-11 w-full max-w-[734px] items-center justify-center">
            <button
              className="h-11 w-[156px] rounded bg-white px-5 text-base font-semibold tracking-[-0.02em] text-[#101010]"
              onClick={() => notify("More vehicles are coming soon")}
            >
              Show more car
            </button>
            <span className="absolute right-0 text-sm font-medium tracking-[-0.02em] text-[#1A202C]">
              {data.cars.length * 15} Car
            </span>
          </div>
        </section>
        <section
          className="mx-auto max-w-[1312px] px-6 py-16 sm:py-24"
          id="why"
        >
          <SectionIntro
            title="Why choose us"
            text="A high-performing web-based car rental system for any rent-a-car company and website."
          />
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="h-[528px] overflow-hidden bg-[#ddd] max-sm:h-[310px]">
              <Image
                className="h-full w-full object-cover"
                src={data.cars[4].image}
                alt="Range Rover available for rental"
                width={700}
                height={700}
                unoptimized
              />
            </div>
            <div className="grid gap-8">
              {data.benefits.map((benefit) => (
                <article className="flex items-start gap-6" key={benefit.title}>
                  <div className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[10px] bg-[#FF9F43] text-white">
                    <Icon name={benefit.icon} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="m-0 max-w-[430px] text-sm leading-7">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="grid gap-8 bg-[#F3F3F3] px-6 py-20 sm:grid-cols-2 sm:px-10 lg:px-[60px]">
          <div className="grid h-[360px] place-items-center rounded-[10px] bg-white text-sm text-[#B5B5B5] max-sm:h-[190px]">
            Advertisement space
          </div>
          <div className="grid h-[360px] place-items-center rounded-[10px] bg-white text-sm text-[#B5B5B5] max-sm:h-[190px]">
            Advertisement space
          </div>
        </section>
        <section
          className="mx-auto max-w-[1312px] px-6 py-16 sm:py-24"
          id="reviews"
        >
          <SectionIntro
            title="Trusted by Thousands of Happy Customer"
            text="A high-performing web-based car rental system for any rent-a-car company and website."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {data.testimonials.map((review) => (
              <article
                className="min-h-[230px] rounded-[10px] bg-[#C4C4C4] p-7 shadow-[0_12px_30px_rgba(13,16,37,0.06)]"
                key={review.name}
              >
                <header className="flex items-center gap-4">
                  <div className="grid h-[50px] w-[50px] place-items-center rounded-full bg-[#B8B8B8] text-xs font-bold text-white">
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div className="">
                    <h3 className="m-0  text-base">{review.name}</h3>
                    <p className="m-0 text-xs text-[#666]">{review.location}</p>
                  </div>
                  <span className="ml-auto text-sm">★ {review.rating}</span>
                </header>
                <p className="mt-7 text-sm leading-7">“{review.quote}”</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      {notice && (
        <div
          className="fixed bottom-6 right-6 z-20 rounded bg-[#1A202C] px-5 py-3 text-sm text-white shadow-xl max-sm:bottom-4 max-sm:left-4 max-sm:right-4 max-sm:text-center"
          role="status"
        >
          {notice}
        </div>
      )}
      <footer
        className="relative grid grid-cols-4 gap-12 bg-[#F3F3F3] px-6 pb-28 pt-20 sm:px-10 lg:px-[60px]"
        id="footer"
      >
        <div className="max-sm:col-span-2">
          <a
            className="text-[32px] font-semibold tracking-[-0.03em]"
            href="#home"
          >
            BestCar
          </a>
          <p className="mt-5 max-w-[292px] text-sm leading-6">
            {data.footer.description}
          </p>
          <div className="mt-5 flex gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1A202C] text-white">
              f
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1A202C] text-white">
              𝕏
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1A202C] text-white">
              ◎
            </span>
          </div>
        </div>
        {["about", "community", "socials"].map((key) => (
          <div className="grid content-start gap-4" key={key}>
            <h3 className="mb-3 text-xl font-semibold">
              {key[0].toUpperCase() + key.slice(1)}
            </h3>
            {data.footer[key].map((item) => (
              <a className="text-sm" href="#footer" key={item}>
                {item}
              </a>
            ))}
          </div>
        ))}
        <div className="absolute bottom-8 left-6 right-6 flex justify-between border-t border-[#1A202C]/15 pt-5 text-xs sm:left-[60px] sm:right-[60px]">
          <span>©2026 BestCar. All rights reserved</span>
          <div className="flex gap-8">
            <a href="#footer">Privacy & Policy</a>
            <a href="#footer">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionIntro({ title, text }) {
  return (
    <div className="mx-auto mb-16 max-w-[540px] text-center">
      <h2 className="mb-5 text-4xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-6 sm:text-base">{text}</p>
    </div>
  );
}
