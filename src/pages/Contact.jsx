import React from 'react'
import { MapPin } from 'lucide-react'
import { PhoneCall } from 'lucide-react'
import { Mail } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='pt-16 text-black text-xl'>
      <section title='Contact Us Header' className=" relative bg-[url('./src/assets/contactUs_h1_image.jpg')] w-[100vw] flex justify-center items-center p-16 bg-cover bg-center bg-no-repeat">
        <div className="absolute  w-full inset-0 bg-black/75"></div>
        <h1 className='md:text-6xl z-2 text-5xl text-white font-normal whitespace-nowrap mb-4'>Contact Us</h1>
      </section>
      <section 
      title='Contact Us page' 
      className='flex md:flex-row flex-col items-center justify-center gap-8 mt-16
                 py-12
      
      '>

      {/* Contact details section */}
      <div className='flex w-1/2 flex-col gap-8 md:pl-[14vw] items-start justify-start'>
        <h2 className='text-4xl'>Contact us</h2>
        <hr className="bg-brand h-[1px] w-[24px] md:block hidden border-none" />

        {/* Details */}
        <div className='flex flex-col items-start gap-4'>
                  <span className='flex justify-between gap-4'>
          <MapPin className='hidden md:block' size={24} color="#A4742C" strokeWidth={2} />
            <h3>Chhoro, Garampani, Almora Road, Nainital (NH-109), Uttarakhand India</h3>
        </span>
        <a href="tel:+91901298xxxx" className='flex items-center gap-4'>
          <PhoneCall size={24} color="#A4742C" strokeWidth={2} />
          Phone: +91902345xxxx
        </a>
        <a href="mailto:ullarindia@gmail.com" className='flex items-center gap-4'>
          <Mail size={24} color="#A4742C" strokeWidth={2} />
          Email: ullarindia@gmail.com
        </a>
        </div>

        {/* Follow us section */}
        <div className='flex flex-col items-start gap-2 justify-center'>
          <h2>Follow us</h2>
          <div className='flex items-start gap-2 justify-center' >
                <NavLink
                to="/">
                <img 
                src="./src/assets/facebook.svg" 
                alt="facebook_page" 
                className=" w-[1rem] h-[1rem] filter invert sepia saturate-[500%] hue-rotate-[20deg] brightness-[0.85] "
                />
                </NavLink>
                <NavLink
                to="/">
                <img 
                src="./src/assets/instagram.svg" 
                alt="instagram_page" 
                className=" w-[1rem] h-[1rem] filter invert sepia saturate-[500%] hue-rotate-[20deg] brightness-[0.85] "
                />
                </NavLink>
                <NavLink
                to="/">
                <img 
                src="./src/assets/x.svg" 
                alt="x_page" 
                className=" w-[1rem] h-[1rem] filter invert sepia saturate-[500%] hue-rotate-[20deg] brightness-[0.85] "
                />
                </NavLink>
            </div>
        </div>
      </div>

      {/* Email input form */}
      <div className='flex md:w-1/2 flex-col gap-8 items-center justify-center md:pr-[14vw]'>
        <form className="w-full mx-auto flex flex-col gap-4 border border-black p-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-500 px-4 py-3 text-gray-600 font-mono
                         focus:outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-500 px-4 py-3 text-gray-600 font-mono
                         focus:outline-none focus:border-black"
            />

            <input
              type="tel"
              placeholder="Phone:"
              className="w-full border border-gray-500 px-4 py-3 text-gray-600 font-mono
                         focus:outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-500 px-4 py-3 text-gray-600 font-mono
                         focus:outline-none focus:border-black"
            />

            <textarea
              rows="4"
              placeholder="Message Optional"
              className="w-full border border-gray-500 px-4 py-3 text-gray-600 font-mono
                         focus:outline-none focus:border-black resize-none"
            />

            <button
              type="submit"
              className="w-full mt-4 bg-[#A4742C] text-white font-semibold tracking-wider py-3 hover:bg-[#8f6423] transition-colors"
            >
              SEND
            </button>
        </form>

      </div>  
      </section>

      {/* MAP LOCATION */}
      <div className="w-full h-[500px] py-12 md:py-20">
  <iframe
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps?q=New%20Delhi&output=embed"
  />
</div>
    </div>
  )
}

export default Contact