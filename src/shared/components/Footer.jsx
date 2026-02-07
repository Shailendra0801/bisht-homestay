import React from 'react'
import { NavLink } from 'react-router-dom'
import { PhoneCall } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Mail } from 'lucide-react'
const Footer = () => {
  return (
    <div 
        className=' bg-[#F7F2EC] w-[100vw] flex flex-col pt-1 font-light
        left-0 items-center justify-center gap-4 text-center text-base font-sans'>
        <NavLink className=" h-20 w-20 overflow-hidden"
            to="/">
            <img 
            src="./favicon.svg" 
            alt="logo" 
            className="w-auto h-32 object-cover -translate-y-[15%]"
            />
        </NavLink>
        <div className="flex font-sans hidden lg:block
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
        <hr className="bg-brand h-[1px] lg:w-[calc(100vw-29.3vw)] w-[100vw] mx-auto border-none " />
        <span className='flex flex-col md:gap-4 md:flex-row justify-between px-[4vw] items-center w-[calc(100vw-29.3vw)] mx-auto'>
            <div>
                <h3>Privacy Policy, Terms & Conditions</h3>
            </div>
            <hr className="bg-brand h-6 w-[1px] md:block hidden border-none" />
            <div >
              <a href="tel:+91901298xxxx" className='flex items-center gap-2'>
                <PhoneCall size={16} color="#000000" strokeWidth={1} />
                +91902345xxxx
              </a>
            </div>
            <hr className="bg-brand h-6 w-[1px] md:block hidden border-none" />
            <div>
                <a href="mailto:ullarindia@gmail.com" className='flex items-center gap-2'>
                  <Mail size={16} color="#000000" strokeWidth={1} />
                  ullarindia@gmail.com</a>
            </div>
        </span>
        <hr className="bg-brand h-[1px] lg:w-[calc(100vw-29.3vw)] w-[100vw] mx-auto border-none " />

        <span className='flex items-center gap-2 justify-center'>
          <MapPin className='hidden md:block' size={16} color="#000000" strokeWidth={1} />
            <h3>Chhoro, Garampani, Almora Road, Nainital (NH-109), Uttarakhand India</h3>
        </span>
        <span 
        className='flex md:justify-between flex-col md:flex-row bg-brand w-[100vw] text-white py-4 px-[20.65vw] items-center'>
            <div>
                Copyright© 2026, Bisht Homestay - All rights reserved
            </div>
            <div className='flex items-center gap-2 justify-center' >
                Find Us Online at:
                <NavLink
                to="/">
                <img 
                src="./src/assets/facebook.svg" 
                alt="facebook_page" 
                className=" w-[1rem] h-[1rem] "
                />
                </NavLink>
                <NavLink
                to="/">
                <img 
                src="./src/assets/instagram.svg" 
                alt="instagram_page" 
                className=" w-[1rem] h-[1rem] "
                />
                </NavLink>
                <NavLink
                to="/">
                <img 
                src="./src/assets/x.svg" 
                alt="x_page" 
                className=" w-[1rem] h-[1rem] "
                />
                </NavLink>
            </div>
        </span>
    </div>
  )
}

export default Footer