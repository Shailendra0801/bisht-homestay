import React, { useState } from "react";

const roomData = {
  id: 1,
  name: "Deluxe Room",
  description:
    "A beautifully appointed room offering a perfect blend of comfort and elegance, ideal for both leisure and business travelers.",
  images: [
    "./src/assets/7.jpeg",
    "./src/assets/6.jpeg",
    "./src/assets/2.jpeg",
    "./src/assets/1.jpeg",
    "./src/assets/3.jpeg",
  ],
  amenities: [
    { label: "Air Conditioning", icon: "❄️" },
    { label: "Free Wi-Fi", icon: "📶" },
    { label: "Flat Screen TV", icon: "📺" },
    { label: "Mini Fridge", icon: "🧊" },
    { label: "Room Service", icon: "🛎️" },
    { label: "Attached Bathroom", icon: "🚿" },
    { label: "24/7 Hot Water", icon: "🔥" },
    { label: "Daily Housekeeping", icon: "🧹" },
    { label: "Wardrobe / Closet", icon: "🚪" },
    { label: "Work Desk", icon: "🪑" },
    { label: "Power Backup", icon: "⚡" },
    { label: "Intercom", icon: "📞" },
  ],
  dimensions: {
    "Room Size": "250 sq ft",
    "Bed Type": "King / Twin (on request)",
    "Floor Options": "Ground, 1st & 2nd Floor",
    "Max Occupancy": "2 Adults + 1 Child",
    Balcony: "Available on select rooms",
    View: "Garden / Courtyard View",
  },
  policies: {
    "Check-in": "12:00 Noon",
    "Check-out": "11:00 AM",
    "Early Check-in": "Subject to availability",
    "Extra Bed": "Available on request (charges apply)",
    Pets: "Not allowed",
    Smoking: "Non-smoking room",
  },
  pricing: {
    ac: {
      weekday: 2199,
      weekend: 2599,
    },
    nonAc: {
      weekday: 1499,
      weekend: 1899,
    },
  },
};

const Rooms = () => {
  const room = roomData;
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(0);
  const [priceType, setPriceType] = useState("ac");

  const totalImages = room.images.length;

  const handlePrev = () => setActiveImg((prev) => (prev - 1 + totalImages) % totalImages);
  const handleNext = () => setActiveImg((prev) => (prev + 1) % totalImages);

  const openLightbox = (idx) => { setLightboxImg(idx); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const lightboxPrev = () => setLightboxImg((prev) => (prev - 1 + totalImages) % totalImages);
  const lightboxNext = () => setLightboxImg((prev) => (prev + 1) % totalImages);

  return (
    <div className="min-h-screen pt-16" style={{ background: "#f5f0eb" }}>

      {/* ══════════════════════════════════
          HERO — fades into warm background
      ══════════════════════════════════ */}
      <section
        className="relative w-full flex flex-col bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./src/assets/4.jpeg')",
          minHeight: "340px",
        }}
      >
        {/* Layer 1: top dark vignette so text is readable */}
        <div
          className="absolute inset-0 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,8,5,0.88) 0%, rgba(10,8,5,0.80) 40%, rgba(10,8,5,0.40) 70%, rgba(0,0,0,0) 88%)",
          }}
        />
        {/* Layer 2: bottom warm wash */}
        <div
          className="absolute inset-0 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245,240,235,0) 65%, rgba(245,240,235,0.55) 80%, rgba(245,240,235,1) 100%)",
          }}
        />

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center mt-auto mb-auto pt-16 pb-20">
          <h1
            className="font-['Playfair'] uppercase text-5xl md:text-6xl lg:text-7xl tracking-widest font-normal"
            style={{ color: "#ffffff", textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
          >
            Discover Your Perfect Stay
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            Experience comfort and luxury in our carefully designed rooms, each
            offering unique views and amenities.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          DECORATIVE DIVIDER — ornamental
      ══════════════════════════════════ */}
      <div className="flex items-center justify-center gap-5 py-6">
        <div className="h-px w-32 bg-[#A4742C]/35" />
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13 2 L15.5 9.5 L23 9.5 L17 14.5 L19.5 22 L13 17.5 L6.5 22 L9 14.5 L3 9.5 L10.5 9.5 Z" fill="#A4742C" opacity="0.55" />
        </svg>
        <div className="h-px w-32 bg-[#A4742C]/35" />
      </div>

      {/* ══════════════════════════════════
          MAIN ROOM CARD
      ══════════════════════════════════ */}
      <div className="w-full px-6 md:px-10 xl:px-16 pb-16">
        <div
          className="flex flex-col lg:flex-row rounded-2xl overflow-hidden"
          style={{
            background: "#fff",
            boxShadow: "0 4px 40px rgba(164,116,44,0.10), 0 1px 4px rgba(0,0,0,0.06)",
            border: "1px solid rgba(164,116,44,0.12)",
          }}
        >

          {/* ════ LEFT: Image Gallery ════ */}
          <div
            className="w-full lg:w-[42%] flex-shrink-0 flex flex-col gap-4 p-6"
            style={{ background: "#f9f5f0" }}
          >
            {/* Main Image */}
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
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-gray-800 text-xl transition"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-gray-800 text-xl transition"
                aria-label="Next image"
              >
                ›
              </button>
              <span className="absolute bottom-3 right-3 bg-black/55 text-white text-sm px-3 py-1 rounded-full tracking-wide">
                {activeImg + 1} / {totalImages}
              </span>
              <span className="absolute top-3 left-3 bg-black/40 text-white text-xs px-2 py-1 rounded-md">
                Click to enlarge
              </span>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 overflow-x-auto pb-1">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-150 ${
                    idx === activeImg
                      ? "border-[#A4742C] scale-105 shadow-md"
                      : "border-transparent hover:border-[#A4742C]/40"
                  }`}
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ════ RIGHT: Details Panel ════ */}
          <div className="w-full lg:w-[58%] flex flex-col divide-y" style={{ borderColor: "rgba(164,116,44,0.1)" }}>

            {/* Room Name & Description */}
            <div className="px-8 py-7">
              <div className="flex items-baseline gap-3 mb-1">
                <span
                  className="text-xs uppercase tracking-[0.2em] font-semibold"
                  style={{ color: "#A4742C" }}
                >
                  Premium
                </span>
                <span className="text-xs text-gray-300">|</span>
                <span className="text-xs text-gray-400 tracking-wide">6 Rooms Available</span>
              </div>
              <h2 className="font-['Playfair'] text-4xl font-normal text-gray-800 mb-3 mt-1">
                {room.name}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="px-8 py-7">
              <h4
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-5"
                style={{ color: "#A4742C" }}
              >
                Amenities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4">
                {room.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-base text-gray-700">
                    <span className="text-xl leading-none">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Details */}
            <div className="px-8 py-7">
              <h4
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-5"
                style={{ color: "#A4742C" }}
              >
                Room Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {Object.entries(room.dimensions).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center text-base py-3 border-b"
                    style={{ borderColor: "rgba(164,116,44,0.08)" }}
                  >
                    <span className="text-gray-400">{key}</span>
                    <span className="text-gray-800 font-medium text-right ml-4">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="px-8 py-7">
              <h4
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-5"
                style={{ color: "#A4742C" }}
              >
                Policies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                {Object.entries(room.policies).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center text-base py-3 border-b"
                    style={{ borderColor: "rgba(164,116,44,0.08)" }}
                  >
                    <span className="text-gray-400">{key}</span>
                    <span className="text-gray-800 font-medium text-right ml-4">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="px-8 py-7">
              <h4
                className="text-xs uppercase tracking-[0.18em] font-semibold mb-5"
                style={{ color: "#A4742C" }}
              >
                Pricing
              </h4>

              {/* AC / Non-AC Toggle */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setPriceType("ac")}
                  className="px-6 py-2.5 rounded-full text-base font-medium border transition-all duration-150"
                  style={
                    priceType === "ac"
                      ? { background: "#A4742C", color: "#fff", borderColor: "#A4742C" }
                      : { background: "#fff", color: "#6b7280", borderColor: "#d1d5db" }
                  }
                >
                  AC Room
                </button>
                <button
                  onClick={() => setPriceType("nonAc")}
                  className="px-6 py-2.5 rounded-full text-base font-medium border transition-all duration-150"
                  style={
                    priceType === "nonAc"
                      ? { background: "#A4742C", color: "#fff", borderColor: "#A4742C" }
                      : { background: "#fff", color: "#6b7280", borderColor: "#d1d5db" }
                  }
                >
                  Non-AC Room
                </button>
              </div>

              {/* Price Cards */}
              <div className="flex gap-5">
                <div
                  className="flex-1 rounded-xl px-6 py-5 text-center"
                  style={{ background: "#f9f5f0", border: "1px solid rgba(164,116,44,0.12)" }}
                >
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Weekday</p>
                  <p className="text-3xl font-semibold text-gray-800">
                    ₹{room.pricing[priceType].weekday.toLocaleString("en-IN")}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">per night</p>
                </div>
                <div
                  className="flex-1 rounded-xl px-6 py-5 text-center"
                  style={{ background: "rgba(164,116,44,0.06)", border: "1px solid rgba(164,116,44,0.25)" }}
                >
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#A4742C" }}>
                    Weekend
                  </p>
                  <p className="text-3xl font-semibold" style={{ color: "#A4742C" }}>
                    ₹{room.pricing[priceType].weekend.toLocaleString("en-IN")}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "rgba(164,116,44,0.6)" }}>
                    per night
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                * Prices are inclusive of taxes. Weekend pricing applies Fri–Sun.
              </p>
            </div>

            {/* CTA */}
            <div className="px-8 py-7">
              <button
                className="w-full py-4 text-white rounded-xl text-base font-medium tracking-wider hover:opacity-90 active:scale-[0.99] transition"
                style={{ background: "#A4742C" }}
                onClick={() => window.location.href = "/contact"}
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
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-4xl leading-none hover:opacity-70 transition"
              aria-label="Close"
            >
              ×
            </button>

            <img
              src={room.images[lightboxImg]}
              alt={`Room view ${lightboxImg + 1}`}
              className="w-full max-h-[78vh] object-contain rounded-xl"
            />

            <button
              onClick={lightboxPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl transition"
            >
              ‹
            </button>
            <button
              onClick={lightboxNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl transition"
            >
              ›
            </button>

            <div className="mt-5 flex gap-3 justify-center overflow-x-auto pb-1">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxImg(idx)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${
                    idx === lightboxImg ? "border-[#A4742C]" : "border-white/20 hover:border-white/50"
                  }`}
                  style={{ width: "72px", height: "72px" }}
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