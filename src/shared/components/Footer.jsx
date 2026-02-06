import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div 
        className='fixed bg-[#F7F2EC] w-[100vw] flex flex-col pt-20 bottom-0
        left-0 items-center justify-center gap-4 text-center text-sm font-sans'>
        <NavLink
            to="/">
            <img 
            src="./favicon.svg" 
            alt="logo" 
            className=" w-40 h-40 "
            />
        </NavLink>
                <div className="flex font-sans
        items-center justify-center font-normal text-base
        gap-6 text-tracking-normal text-leading-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  Home
            </NavLink>
            <NavLink
              to="/experiences"
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  Experiences
            </NavLink>
            <NavLink
              to="/amenities" 
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  Amenities
            </NavLink>
            <NavLink
              to="/rooms" 
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  Rooms
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 transition ${
                  isActive ? "text-black" : "text-brand"
                }`}>
                  Contact Us
            </NavLink>
        </div>

        <span className='flex gap-12'>
            <div>
                <h3>Privacy Policy, Terms & Conditions</h3>
            </div>
            <div>
                +91902345xxxx
            </div>
            <div>
                ullarindia@gmail.com
            </div>
        </span>
        <span>
            <h3>Village Jaihari, PO Jaiharikhal 246139, Jaihari - Mendoli Road Tehsil Lansdowne, Distt.Pauri Garhwal, Uttarakhand India</h3>
        </span>
        <span className='flex flex-cols-2 gap-20 justify-center bg-brand w-[100vw] p-4'>
            <div>
                Copyright© 2026, Ullaar - All rights reserved
            </div>
            <div>
                Find Us Online at:

            </div>
        </span>
    </div>
  )
}

export default Footer