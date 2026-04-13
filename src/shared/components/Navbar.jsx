import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/experiences", label: "EXPERIENCES" },
    { to: "/rooms", label: "ROOMS" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT US" },
  ];

  return (
    <>
      {/* ── Navbar ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 sm:px-8 lg:px-32">
          {/* Logo */}
          <NavLink to="/" onClick={closeMobileMenu} className="flex-shrink-0">
            <img
              src="./favicon.svg"
              alt="logo"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-105 transition-transform duration-300"
            />
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 font-['Montserrat'] text-sm font-normal flex-1 justify-center">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative px-4 py-2 tracking-wide transition-colors duration-200 group ${
                    isActive ? "text-black" : "text-brand hover:text-black"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand transition-all duration-300 ${
                        isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block w-14 flex-shrink-0" />

          {/* Hamburger Button — 3 clean lines using SVG */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand"
            >
              {/* Top bar */}
              <line
                x1="3" y1="6" x2="19" y2="6"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                style={{
                  transformOrigin: "11px 6px",
                  transform: isMobileMenuOpen ? "translateY(5px) rotate(45deg)" : "none",
                  transition: "transform 0.3s ease",
                }}
              />
              {/* Middle bar */}
              <line
                x1="3" y1="11" x2="19" y2="11"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                style={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transition: "opacity 0.3s ease",
                }}
              />
              {/* Bottom bar */}
              <line
                x1="3" y1="16" x2="19" y2="16"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                style={{
                  transformOrigin: "11px 16px",
                  transform: isMobileMenuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
                  transition: "transform 0.3s ease",
                }}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Backdrop — starts below navbar ── */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer — starts below navbar, no logo inside ── */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-72 bg-white z-50 lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Nav Links */}
        <nav className="flex flex-col px-4 py-6 gap-1 font-['Montserrat'] overflow-y-auto flex-1">
          {navLinks.map(({ to, label }, index) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMobileMenu}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : "0ms",
              }}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-orange-50 text-black font-semibold border-l-2 border-brand"
                    : "text-brand hover:bg-gray-50 hover:text-black"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-5 border-t border-gray-100 shrink-0">
          <p className="text-xs text-gray-400 font-['Montserrat'] text-center tracking-widest">
            BISHT HOMESTAY
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;