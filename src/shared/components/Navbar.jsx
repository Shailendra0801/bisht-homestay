import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-16 flex items-center p-1
    justify-center text-brand bg-white text-center gap-[12vw] top-0 z-10">
            <NavLink
              to="/">
                  <img 
                  src="./favicon.svg" 
                  alt="logo" 
                  className=" w-20 h-20 "
                  />
            </NavLink>
<div className="font-roboto flex
        items-center justify-center font-normal text-sm
        gap-6 text-tracking-normal text-leading-none">
          <div className="font-roboto hidden lg:flex
        items-center justify-center font-normal text-sm
        gap-6 text-tracking-normal text-leading-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  HOME
            </NavLink>
            <NavLink
              to="/experiences"
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  EXPERIENCES
            </NavLink>
            <NavLink
              to="/amenities" 
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  AMENITIES
            </NavLink>
            <NavLink
              to="/rooms" 
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  ROOMS
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  CONTACT US
            </NavLink>
        </div>
          <div>
            <button 
            className="py-2 px-4 w-fit bg-accent hover:bg-brand text-white font-light ">
            Login/Register
            </button>
            <button 
            className="p-2 w-fit bg-secondary hover:bg-primary text-white font-light ">
            Make a Reservation
            </button>
        </div>
</div>
        
    </div>
  )
}

export default Navbar