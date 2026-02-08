import React from 'react'
import { useNavigate } from 'react-router-dom'
import MultiStepForm from '../shared/multi-step-from/multi-step-form'

const Reservation = () => {
  const navigate = useNavigate();

  return (
    <div className='pt-16 md:pb-12 pb-4 lg:pb-16 flex flex-col lg:flex-row'>
        
    <div className='px-12 pt-4 md:px-16 md:pt-6 flex gap-12 flex-col lg:px-20 lg:pt-8'>
        <div className='lg:w-[40vw]'>
            <h4 className="font-['Playfair'] font-normal tracking-normal uppercase text-xs">Welcome to our place</h4>
            <h1 className="font-['Playfair'] lg:tracking-widest font-normal uppercase lg:text-6xl md:tracking-wide md:text-4xl text-2xl tracking-wide">Reservation Enquiry</h1>
        </div>
        <div>
            <MultiStepForm></MultiStepForm>
        </div>
    </div>
    <img className='w-full lg:pr-12 md:pt-8 h-full lg:w-[50vw] object-cover' src="./src/assets/reservation.jpg" alt="Reservation" />
    </div>
  )
}

export default Reservation