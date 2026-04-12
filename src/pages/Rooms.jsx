import React, { useState } from "react";

const roomData = {
  id: 1,
  name: "Deluxe Room",
  description:
    "A beautifully appointed room offering a perfect blend of comfort and elegance, ideal for both leisure and business travelers.",
  images: [
    "/assets/7.jpeg",
    "/assets/6.jpeg",
    "/assets/2.jpeg",
    "/assets/1.jpeg",
    "/assets/3.jpeg",
  ],
  amenities: [
    // {
    //   label: "Air Conditioning",
    //   icon: (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    //       <path d="M8 2v20M16 2v20M2 8h20M2 16h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"/>
    //     </svg>
    //   ),
    // },
    // {
    //   label: "Free Wi-Fi",
    //   icon: (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    //       <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    //       <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    //       <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    //       <circle cx="12" cy="20" r="1" fill="currentColor"/>
    //     </svg>
    //   ),
    // },
    // {
    //   label: "Flat Screen TV",
    //   icon: (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    //       <rect x="2" y="3" width="20" height="14" rx="2"/>
    //       <path d="M8 21h8M12 17v4"/>
    //     </svg>
    //   ),
    // },
    // {
    //   label: "Mini Fridge",
    //   icon: (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    //       <rect x="5" y="2" width="14" height="20" rx="2"/>
    //       <path d="M5 10h14"/>
    //       <path d="M9 6v2M9 14v4"/>
    //     </svg>
    //   ),
    // },
    {
      label: "Room Service",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17h18M12 3v3M5.5 17A6.5 6.5 0 0 1 12 6a6.5 6.5 0 0 1 6.5 11"/>
          <path d="M20 17v2H4v-2"/>
        </svg>
      ),
    },
    {
      label: "Attached Bathroom",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z"/>
          <path d="M6 12V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v.5"/>
          <path d="M4 22v-2M20 22v-2"/>
        </svg>
      ),
    },
    {
      label: "24/7 Hot Water",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2c0 2-2 3-2 5a4 4 0 0 0 8 0c0-2-2-3-2-5"/>
          <path d="M12 12c0 2-2 3-2 5a4 4 0 0 0 8 0c0-2-2-3-2-5"/>
          <path d="M4 12c0 2-2 3-2 5a4 4 0 0 0 8 0c0-2-2-3-2-5"/>
        </svg>
      ),
    },
    {
      label: "Daily Housekeeping",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 22V10l9-8 9 8v12"/>
          <path d="M10 22V16h4v6"/>
          <path d="M15 6l3 2.5"/>
        </svg>
      ),
    },
    {
      label: "Wardrobe / Closet",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="18" rx="1"/>
          <path d="M12 3v18"/>
          <circle cx="9" cy="12" r="0.8" fill="currentColor"/>
          <circle cx="15" cy="12" r="0.8" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "Work Desk",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="3" rx="1"/>
          <path d="M5 10v9M19 10v9M9 10v9M15 10v9"/>
        </svg>
      ),
    },
    {
      label: "Power Backup",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
    },
    // {
    //   label: "Intercom",
    //   icon: (
    //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    //       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.13h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z"/>
    //     </svg>
    //   ),
    // },
  ],
  dimensions: {
    "Room Size": "250 sq ft",
    "Bed Type": "Double Bed",
    "Floor Options": "1st & 2nd Floor",
    "Max Occupancy": "2 Adults + 1 Child",
    Balcony: "Available",
    View: "Mountain",
  },
  policies: {
    "Check-in": "Flexible",
    "Check-out": "Flexible",
    "Early Check-in": "Subject to availability",
    "Extra Bed": "No",
    Pets: "Not allowed",
    // Smoking: "Non-smoking room",
  },
  pricing: {
    ac: { weekday: 2199, weekend: 2599 },
    nonAc: { weekday: 1499, weekend: 1899 },
  },
};

const GOLD = "#A4742C";
const GOLD_LIGHT = "rgba(164,116,44,0.10)";
const GOLD_BORDER = "rgba(164,116,44,0.12)";
const BG_WARM = "#f5f0eb";
const BG_PANEL = "#f9f5f0";

const Rooms = () => {
  const room = roomData;
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(0);
  const [priceType, setPriceType] = useState("nonAc");

  const totalImages = room.images.length;

  const handlePrev = () => setActiveImg((p) => (p - 1 + totalImages) % totalImages);
  const handleNext = () => setActiveImg((p) => (p + 1) % totalImages);
  const openLightbox = (idx) => { setLightboxImg(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const lightboxPrev = () => setLightboxImg((p) => (p - 1 + totalImages) % totalImages);
  const lightboxNext = () => setLightboxImg((p) => (p + 1) % totalImages);

  return (
    <div className="min-h-screen pt-16" style={{ background: BG_WARM }}>

      {/* ── Hero ── */}
      <section
        className="relative w-full flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/4.jpeg')", minHeight: "280px" }}
      >
        <div
          className="absolute inset-0 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,8,5,0.88) 0%, rgba(10,8,5,0.80) 40%, rgba(10,8,5,0.40) 70%, rgba(0,0,0,0) 88%)",
          }}
        />
        <div
          className="absolute inset-0 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,240,235,0) 65%, rgba(245,240,235,0.55) 80%, rgba(245,240,235,1) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center pt-14 pb-16 md:pt-20 md:pb-24">
          <h1
            className="font-['Playfair'] uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-widest font-normal"
            style={{ color: "#ffffff", textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
          >
            Discover Your Perfect Stay
          </h1>
          <p
            className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            Experience comfort and luxury in our carefully designed rooms, each
            offering unique views and amenities.
          </p>
        </div>
      </section>

      {/* ── Ornamental divider ── */}
      <div className="flex items-center justify-center gap-4 py-5">
        <div className="h-px w-24 md:w-32" style={{ background: `${GOLD}55` }} />
        <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
          <path
            d="M13 2 L15.5 9.5 L23 9.5 L17 14.5 L19.5 22 L13 17.5 L6.5 22 L9 14.5 L3 9.5 L10.5 9.5 Z"
            fill={GOLD}
            opacity="0.55"
          />
        </svg>
        <div className="h-px w-24 md:w-32" style={{ background: `${GOLD}55` }} />
      </div>

      {/* ── Main Room Card ── */}
      <div className="w-full px-4 sm:px-6 md:px-10 xl:px-16 pb-16">
        <div
          className="flex flex-col lg:flex-row rounded-2xl overflow-hidden"
          style={{
            background: "#fff",
            boxShadow: "0 4px 40px rgba(164,116,44,0.10), 0 1px 4px rgba(0,0,0,0.06)",
            border: `1px solid ${GOLD_BORDER}`,
          }}
        >

          {/* ── Left: Image Gallery ── */}
          <div
            className="w-full lg:w-[42%] flex-shrink-0 flex flex-col gap-4 p-4 sm:p-6"
            style={{ background: BG_PANEL }}
          >
            {/* Main image */}
            <div
              className="relative w-full overflow-hidden rounded-xl cursor-zoom-in"
              style={{ aspectRatio: "4/3", background: "#e8e0d5" }}
              onClick={() => openLightbox(activeImg)}
            >
              <img
                src={room.images[activeImg]}
                alt={`Room view ${activeImg + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shadow-md text-gray-800 text-xl transition"
                aria-label="Previous"
              >
                ‹
              </button>
              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shadow-md text-gray-800 text-xl transition"
                aria-label="Next"
              >
                ›
              </button>
              <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/55 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full tracking-wide">
                {activeImg + 1} / {totalImages}
              </span>
              <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/40 text-white text-xs px-2 py-1 rounded-md hidden sm:inline">
                Click to enlarge
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-150 ${
                    idx === activeImg
                      ? "scale-105 shadow-md"
                      : "border-transparent hover:opacity-80"
                  }`}
                  style={{
                    width: "64px",
                    height: "64px",
                    borderColor: idx === activeImg ? GOLD : "transparent",
                  }}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Details Panel ── */}
          <div
            className="w-full lg:w-[58%] flex flex-col divide-y"
            style={{ borderColor: GOLD_BORDER }}
          >

            {/* Name & description */}
            <div className="px-5 sm:px-8 py-6 sm:py-7">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-1">
                <span
                  className="text-xs uppercase tracking-[0.2em] font-semibold"
                  style={{ color: GOLD }}
                >
                  Premium
                </span>
                <span className="text-xs text-gray-300">|</span>
                <span className="text-xs text-gray-400 tracking-wide">6 Rooms Available</span>
              </div>
              <h2 className="font-['Playfair'] text-3xl sm:text-4xl font-normal text-gray-800 mb-3 mt-1">
                {room.name}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="px-5 sm:px-8 py-6 sm:py-7">
              <h4
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4 sm:mb-5"
                style={{ color: GOLD }}
              >
                Amenities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 sm:gap-y-4 gap-x-3 sm:gap-x-4">
                {room.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <span style={{ color: GOLD, flexShrink: 0 }}>{item.icon}</span>
                    <span className="leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Details */}
            <div className="px-5 sm:px-8 py-6 sm:py-7">
              <h4
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4 sm:mb-5"
                style={{ color: GOLD }}
              >
                Room Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10">
                {Object.entries(room.dimensions).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex justify-between items-start sm:items-center text-sm sm:text-base py-2.5 sm:py-3 border-b gap-3"
                    style={{ borderColor: "rgba(164,116,44,0.08)" }}
                  >
                    <span className="text-gray-400 flex-shrink-0">{key}</span>
                    <span className="text-gray-800 font-medium text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="px-5 sm:px-8 py-6 sm:py-7">
              <h4
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4 sm:mb-5"
                style={{ color: GOLD }}
              >
                Policies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-10">
                {Object.entries(room.policies).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex justify-between items-start sm:items-center text-sm sm:text-base py-2.5 sm:py-3 border-b gap-3"
                    style={{ borderColor: "rgba(164,116,44,0.08)" }}
                  >
                    <span className="text-gray-400 flex-shrink-0">{key}</span>
                    <span className="text-gray-800 font-medium text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="px-5 sm:px-8 py-6 sm:py-7">
              <h4
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-4 sm:mb-5"
                style={{ color: GOLD }}
              >
                Pricing
              </h4>

              {/* Toggle */}
              <div className="flex gap-2 sm:gap-3 mb-5 sm:mb-6 flex-wrap">
                {[
                  // { key: "ac", label: "AC Room" },
                  // { key: "nonAc", label: "Non-AC Room" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setPriceType(key)}
                    className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium border transition-all duration-150"
                    style={
                      priceType === key
                        ? { background: GOLD, color: "#fff", borderColor: GOLD }
                        : { background: "#fff", color: "#6b7280", borderColor: "#d1d5db" }
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Price cards */}
              <div className="flex gap-3 sm:gap-5">
                <div
                  className="flex-1 rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-center"
                  style={{ background: BG_PANEL, border: `1px solid ${GOLD_BORDER}` }}
                >
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1 sm:mb-2">Weekday</p>
                  <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
                    ₹{room.pricing[priceType].weekday.toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">per night</p>
                </div>
                <div
                  className="flex-1 rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-center"
                  style={{
                    background: GOLD_LIGHT,
                    border: `1px solid rgba(164,116,44,0.25)`,
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-1 sm:mb-2"
                    style={{ color: GOLD }}
                  >
                    Weekend
                  </p>
                  <p
                    className="text-2xl sm:text-3xl font-semibold"
                    style={{ color: GOLD }}
                  >
                    ₹{room.pricing[priceType].weekend.toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs sm:text-sm mt-1" style={{ color: "rgba(164,116,44,0.6)" }}>
                    per night
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
                * Prices are inclusive of taxes. Weekend pricing applies Fri–Sun.
              </p>
            </div>

            {/* CTA */}
            <div className="px-5 sm:px-8 py-6 sm:py-7">
              <button
                className="w-full py-3.5 sm:py-4 text-white rounded-xl text-sm sm:text-base font-medium tracking-wider hover:opacity-90 active:scale-[0.99] transition"
                style={{ background: GOLD }}
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us for Booking
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 sm:-top-12 right-0 text-white text-4xl leading-none hover:opacity-70 transition"
              aria-label="Close"
            >
              ×
            </button>

            <img
              src={room.images[lightboxImg]}
              alt={`Room view ${lightboxImg + 1}`}
              className="w-full max-h-[65vh] sm:max-h-[75vh] object-contain rounded-xl"
            />

            {/* Nav */}
            <button
              onClick={lightboxPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl transition"
            >
              ‹
            </button>
            <button
              onClick={lightboxNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl transition"
            >
              ›
            </button>

            {/* Lightbox thumbnails */}
            <div className="mt-4 sm:mt-5 flex gap-2 sm:gap-3 justify-center overflow-x-auto pb-1">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxImg(idx)}
                  className="flex-shrink-0 rounded-lg overflow-hidden border-2 transition"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderColor: idx === lightboxImg ? GOLD : "rgba(255,255,255,0.2)",
                  }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <p className="text-center text-white/40 text-sm mt-3">
              {lightboxImg + 1} / {totalImages}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;