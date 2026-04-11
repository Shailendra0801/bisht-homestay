import React from "react";
import { NavLink } from "react-router-dom";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2B1E1A] text-[#F7F2EC] w-full font-serif">

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 px-[6vw] py-14 border-b border-[#AE9364]/25">

        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <h2 className="font-['Cinzel'] text-[#AE9364] text-xl tracking-[3px]">
            BISHT HOMESTAY
          </h2>
          <div className="w-10 h-px bg-[#AE9364]" />
          <p className="text-sm text-[#F7F2EC]/55 font-sans font-light leading-relaxed">
            A peaceful retreat nestled in the mountains of Uttarakhand. Escape the everyday and rediscover serenity.
          </p>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-1">
          <h3 className="font-['Cinzel'] text-[#AE9364] text-[11px] tracking-[3px] uppercase mb-4">
            Contact
          </h3>
          <a href="tel:+919536949667"
            className="flex items-center gap-3 text-[#F7F2EC]/75 text-sm font-sans font-light hover:text-[#AE9364] transition-colors py-1">
            <PhoneCall size={14} strokeWidth={1.5} />
            +91 9536949667
          </a>
          <a href="mailto:bishthomestay01@gmail.com"
            className="flex items-center gap-3 text-[#F7F2EC]/75 text-sm font-sans font-light hover:text-[#AE9364] transition-colors py-1">
            <Mail size={14} strokeWidth={1.5} />
            bishthomestay01@gmail.com
          </a>
          <NavLink to="/privacy"
            className="text-[#F7F2EC]/40 text-xs font-sans mt-3 hover:text-[#AE9364] transition-colors w-fit border-b border-transparent hover:border-[#AE9364]/40 pb-px">
            Privacy Policy &amp; Terms
          </NavLink>
        </div>

        {/* Address Column */}
        <div className="flex flex-col">
          <h3 className="font-['Cinzel'] text-[#AE9364] text-[11px] tracking-[3px] uppercase mb-4">
            Find Us
          </h3>
          <p className="text-[#F7F2EC]/75 text-sm font-sans font-light leading-loose">
            Chhara, Garampani<br />
            Almora Road, Nainital (NH-109)<br />
            Uttarakhand, India
          </p>
          <a href="https://maps.app.goo.gl/685h1AAXLVSiQQNk8" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 mt-4 text-[#AE9364] text-xs font-sans border-b border-[#AE9364]/30 pb-px w-fit hover:border-[#AE9364] transition-colors">
            <MapPin size={12} strokeWidth={1.5} />
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-[6vw] py-5 gap-3">
        <span className="text-[#F7F2EC]/40 text-xs font-sans font-light">
          © 2026 Bisht Homestay — All rights reserved
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[#F7F2EC]/40 text-xs font-sans">Follow us</span>
          {/* Facebook */}
          <a href="/" className="w-8 h-8 rounded-full border border-[#AE9364]/30 flex items-center justify-center hover:border-[#AE9364] hover:bg-[#AE9364]/10 transition-all">
            <img src="./src/assets/facebook.svg" alt="Facebook" className="w-3.5 h-3.5 opacity-60" />
          </a>
          {/* Instagram */}
          <a href="/" className="w-8 h-8 rounded-full border border-[#AE9364]/30 flex items-center justify-center hover:border-[#AE9364] hover:bg-[#AE9364]/10 transition-all">
            <img src="./src/assets/instagram.svg" alt="Instagram" className="w-3.5 h-3.5 opacity-60" />
          </a>
          {/* X */}
          <a href="/" className="w-8 h-8 rounded-full border border-[#AE9364]/30 flex items-center justify-center hover:border-[#AE9364] hover:bg-[#AE9364]/10 transition-all">
            <img src="./src/assets/x.svg" alt="X" className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;