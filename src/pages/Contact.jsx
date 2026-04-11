import React, { useRef, useEffect, useState } from 'react';
import { Clock, ShieldCheck, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../index.css"

const trustPoints = [
  {
    icon: <Clock size={22} strokeWidth={1.5} color="#AE9364" />,
    title: "Quick Response",
    desc: "We typically respond within 2 hours"
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} color="#AE9364" />,
    title: "Best Price Guarantee",
    desc: "Book direct for the lowest rates, no hidden fees"
  },
  {
    icon: <Star size={22} strokeWidth={1.5} color="#AE9364" />,
    title: "Highly Rated",
    desc: "Loved by guests for warm hospitality & clean rooms"
  }
];

const roomOptions = [
  "AC Room",
  "Non-AC Room",
  "Not sure yet"
];

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        alert('EmailJS configuration missing. Please check your .env file.');
        setStatus('error');
        return;
      }
      await emailjs.sendForm(serviceId, templateId, formRef.current);
      setStatus('success');
      setCheckinDate(null);
      setCheckoutDate(null);
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  const inputClass = "border border-black/30 px-4 py-3 text-base font-sans text-black bg-white focus:outline-none focus:border-[#AE9364] transition-colors rounded-md placeholder:text-black/30 w-full";
  const labelClass = "text-xs font-['Cinzel'] tracking-widest text-[#2B1E1A] uppercase font-semibold";
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);

  return (
    <div className="pt-16 text-black">

      {/* ── Hero Banner ── */}
      <section className="relative bg-[url('./src/assets/contactUs_h1_image.jpg')] w-full h-[28vh] md:h-[30vh] flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="absolute inset-0 bg-[#2B1E1A]/70" />
        <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
          <p className="text-[#AE9364] font-['Cinzel'] text-xs tracking-[4px] uppercase">
            Bisht Homestay
          </p>
          <h1 className="text-4xl md:text-5xl text-white font-['Playfair_Display'] font-normal">
            Plan Your Stay
          </h1>
          <p className="text-white/65 font-sans font-light text-sm">
            Tell us your dates and we'll take care of the rest
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="flex flex-col lg:flex-row w-full px-6 md:px-12 xl:px-20 py-14 md:py-20 gap-0">

        {/* ── Left: Why Book Direct (30%) ── */}
        <div className="lg:w-[30%] flex-shrink-0 flex flex-col gap-6 lg:pr-12 lg:border-r border-[#AE9364]/25 mb-14 lg:mb-0">

          <div className="flex flex-col gap-3">
            <p className="text-[#AE9364] font-['Cinzel'] text-xs tracking-[3px] uppercase font-semibold">
              Why Book Direct
            </p>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#2B1E1A] leading-snug">
              Skip the middleman.<br />Stay with us directly.
            </h2>
            <div className="w-10 h-[2px] bg-[#AE9364] mt-1" />
          </div>

          {/* Trust Points */}
          <div className="flex flex-col gap-5">
            {trustPoints.map((pt, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#FAF7F3] border border-[#AE9364]/25 flex items-center justify-center">
                  {pt.icon}
                </div>
                <div>
                  <h3 className="font-['Cinzel'] text-base font-bold text-[#2B1E1A] mb-0.5">{pt.title}</h3>
                  <p className="text-sm text-black/60 font-sans leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="flex flex-col gap-3 pt-1 border-t border-[#AE9364]/15">
            <p className="text-xs text-black/50 font-sans font-bold uppercase tracking-widest pt-1">Or reach us instantly</p>
            <a
              href="https://wa.me/919536949667?text=Hi!%20I%27d%20like%20to%20enquire%20about%20a%20stay%20at%20Bisht%20Homestay."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-lg font-sans font-semibold text-base hover:bg-[#1fb855] transition-colors w-fit"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.1 1.523 5.824L.057 23.5l5.824-1.524A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.523-5.2-1.43l-.37-.22-3.855 1.01 1.03-3.76-.24-.39A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <p className="text-sm text-black/45 font-sans">
              +91 9536949667 &nbsp;·&nbsp; bishthomestay01@gmail.com
            </p>
          </div>
        </div>

        {/* ── Right: Booking Enquiry Form (70%) ── */}
        <div className="lg:w-[70%] lg:pl-12">

          <div className="flex flex-col gap-3 mb-8">
            <p className="text-[#AE9364] font-['Cinzel'] text-xs tracking-[3px] uppercase font-semibold">
              Booking Enquiry
            </p>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#2B1E1A]">
              Check Availability
            </h2>
            <div className="w-10 h-[2px] bg-[#AE9364]" />
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-5 py-20 text-center border border-[#AE9364]/30 rounded-xl bg-[#FAF7F3]">
              <div className="w-16 h-16 rounded-full bg-[#AE9364]/15 flex items-center justify-center">
                <ShieldCheck size={32} strokeWidth={1.5} color="#AE9364" />
              </div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#2B1E1A]">Enquiry Sent!</h3>
              <p className="text-base text-black/60 font-sans max-w-xs leading-relaxed">
                Thank you! We'll get back to you within 2 hours to confirm your booking.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-sm text-[#AE9364] font-sans font-semibold underline underline-offset-4 hover:text-[#8f6423] transition-colors"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Full Name *</label>
                  <input type="text" name="name" required placeholder="Rahul Sharma" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Email *</label>
                  <input type="email" name="email" required placeholder="rahul@email.com" className={inputClass} />
                </div>
              </div>

              {/* Phone + Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>No. of Guests *</label>
                  <input type="number" name="guests" required min="1" max="20" placeholder="2" className={inputClass} />
                </div>
              </div>

              {/* Check-in + Check-out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Check-in Date *</label>
                  <DatePicker
                    selected={checkinDate}
                    onChange={(date) => setCheckinDate(date)}
                    selectsStart
                    startDate={checkinDate}
                    endDate={checkoutDate}
                    minDate={new Date()}
                    placeholderText="Select check-in date"
                    dateFormat="dd MMM yyyy"
                    className={inputClass}
                    wrapperClassName="w-full"
                    required
                  />
                  {/* hidden input so EmailJS can read the value */}
                  <input type="hidden" name="checkin" value={checkinDate ? checkinDate.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : ""} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Check-out Date *</label>
                  <DatePicker
                    selected={checkoutDate}
                    onChange={(date) => setCheckoutDate(date)}
                    selectsEnd
                    startDate={checkinDate}
                    endDate={checkoutDate}
                    minDate={checkinDate || new Date()}
                    placeholderText="Select check-out date"
                    dateFormat="dd MMM yyyy"
                    className={inputClass}
                    wrapperClassName="w-full"
                    required
                  />
                  <input type="hidden" name="checkout" value={checkoutDate ? checkoutDate.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : ""} />
                </div>
              </div>
              {/* Room Preference + Guests on same row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Room Preference</label>
                  <select name="room" className={`${inputClass} appearance-none cursor-pointer`}>
                    {roomOptions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                {/* Empty col for visual balance — can add a field here later */}
                <div className="hidden md:block" />
              </div>

              {/* Special Requests — full width */}
              <div className="flex flex-col gap-2">
                <label className={labelClass}>
                  Special Requests{' '}
                  <span className="normal-case tracking-normal font-normal text-black/40">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  name="message"
                  placeholder="Any dietary requirements, accessibility needs, or special occasions..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500 font-sans font-semibold">
                  Something went wrong. Please try again or WhatsApp us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 w-full py-4 bg-[#2B1E1A] text-[#F7F2EC] font-['Cinzel'] text-sm tracking-[3px] uppercase font-semibold hover:bg-[#AE9364] transition-colors duration-300 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
              </button>

              <p className="text-sm text-center text-black/45 font-sans">
                We'll confirm availability and rates within 2 hours
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Map ── */}
      <div className="w-full h-112.5">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111121.03777653504!2d79.34363909726565!3d29.50083609999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a5def81ac3fb%3A0x4c732b7331f9c918!2sBisht%20Homestay!5e0!3m2!1sen!2sin!4v1775916558101!5m2!1sen!2sin"
        />
      </div>

    </div>
  );
};

export default Contact;