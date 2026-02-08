import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn, isAdmin, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-16 flex items-center px-4 sm:px-6 lg:px-32 text-brand bg-white z-50 shadow-sm gap-4"
      >
        {/* Logo */}
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="./favicon.svg"
            alt="logo"
            className="w-16 object-cover h-16 sm:w-20 sm:h-20 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </NavLink>

        {/* Spacer for visual balance */}
        <div className="hidden lg:block w-40"></div>

        {/* Desktop Navigation Links - Center */}
        <div
          className="font-['Montserrat'] hidden lg:flex items-center justify-center font-normal text-sm gap-6 flex-1"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black" : "text-brand"}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/experiences"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black" : "text-brand"}`
            }
          >
            EXPERIENCES
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black" : "text-brand"}`
            }
          >
            ROOMS
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black" : "text-brand"}`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 text-nowrap transition ${isActive ? "text-black" : "text-brand"}`
            }
          >
            CONTACT US
          </NavLink>
        </div>

        {/* Desktop CTA Buttons - Right */}
        <div className="hidden lg:flex gap-3 items-center">
            {isLoggedIn() ? (
              <>
                {isAdmin() && (
                  <button
                    onClick={() => navigate("/admin")}
                    className="py-2 px-4 w-fit bg-accent cursor-pointer text-nowrap hover:bg-brand text-white font-light"
                  >
                    Admin Panel
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 w-fit bg-accent cursor-pointer text-nowrap hover:bg-brand text-white font-light"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="py-2 px-4 w-fit bg-accent cursor-pointer text-nowrap hover:bg-brand text-white font-light"
              >
                Login/Register
              </button>
            )}
            <button
              onClick={() => navigate("/reservation")}
              className="py-2 px-4 w-fit bg-secondary cursor-pointer text-nowrap hover:bg-primary text-white font-light"
            >
              Make a Reservation
            </button>
          </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden relative w-10 h-10 z-50 flex items-center justify-center ml-auto"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-center">
            <span
              className={`block w-full h-0.5 bg-brand transition-all duration-300 ease-in-out absolute ${
                isMobileMenuOpen ? "rotate-45 translate-y-0" : "translate-y-[-8px]"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-brand transition-all duration-300 ease-in-out absolute ${
                isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-brand transition-all duration-300 ease-in-out absolute ${
                isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[8px]"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden top-16"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4 font-['Montserrat'] text-sm overflow-y-auto h-full">
          {/* Navigation Links */}
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black font-semibold" : "text-brand"}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/experiences"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black font-semibold" : "text-brand"}`
            }
          >
            EXPERIENCES
          </NavLink>
          <NavLink
            to="/rooms"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black font-semibold" : "text-brand"}`
            }
          >
            ROOMS
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black font-semibold" : "text-brand"}`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `px-3 py-2 transition ${isActive ? "text-black font-semibold" : "text-brand"}`
            }
          >
            CONTACT US
          </NavLink>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* CTA Buttons in Mobile Menu */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavigation("/reservation")}
              className="py-3 px-4 w-full bg-secondary cursor-pointer hover:bg-primary text-white font-light text-center rounded"
            >
              Make a Reservation
            </button>

            {isLoggedIn() ? (
              <>
                {isAdmin() && (
                  <button
                    onClick={() => handleNavigation("/admin")}
                    className="py-2 px-4 w-full bg-accent cursor-pointer hover:bg-brand text-white font-light"
                  >
                    Admin Panel
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="py-3 px-4 w-full bg-accent cursor-pointer hover:brand text-white font-light text-center rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavigation("/login")}
                className="py-3 px-4 w-full bg-accent cursor-pointer hover:bg-brand text-white font-light text-center rounded"
              >
                Login/Register
              </button>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
