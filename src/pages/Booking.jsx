import React, { useState } from 'react';
import PcSlotBooking from '../components/PcSlotBooking';
import PsSlotBooking from '../components/PsSlotBooking';
import { ImCross } from "react-icons/im";


function Booking() {
  const [pcToggle, setPcToggle] = useState(false);
  const [psToggle, setPsToggle] = useState(false);

  const showPcSlots = () => {
    if (psToggle) {
      setPsToggle((e) => false)
    }
    setPcToggle(prev => !prev); // Toggle the state
  };

  const showPsSlots = () => {
    if (pcToggle) {
      setPcToggle((e) => false)
    }
    setPsToggle(prev => !prev); // Toggle the state
  };

  return (
    <div className='w-full bg-black flex flex-col justify-center items-center flex-wrap px-6 py-12
                    md:flex-row'>


                {/* PC gaming Div */}
      <div className='bg-white rounded-xl flex justify-center items-center flex-col shadow-[0px_0px_30px_8px_#38a169] 
                       h-[40vh] mt-10  
                        md:mt-0  md:w-[30%] md:h-[80vh] md:ml-10'>

          
                             {/* Img for Mobile screen */}
                      <img 
                           className='relative w-full h-full rounded-xl md:hidden'
                           src="https://i.pinimg.com/564x/95/0d/44/950d44e60b1ec44ab7920458a7e2b85a.jpg" alt="" 
                       />

                        {/* Img for Desktop screen */}
                       <img 
                           className='relative w-full h-full rounded-xl hidden md:block'
                           src="https://i.pinimg.com/564x/80/7c/f2/807cf23abfa00befa599fe6e9e6786fc.jpg" alt="" 
                       />

                       <div className=' flex justify-center gap-10 items-center flex-col uppercase absolute text-wrap mx-8 '>

                        <h1 className='text-2xl w-52 text-white text-center font-bold  text-wrap
                                      md:w-96 md:text-3xl md:mt-40'>
                                        Gaming power at your fingertips, just 90rs an hour!
                        </h1>

                        <div>
                            <div onClick={(e) => showPcSlots(false)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">BOOK NOW!!</span>
                            </div>
                        </div>

                       </div>
                        
        {/* <button onClick={showPcSlots}>Book slot</button> */}
      </div>


          {/* Content for PC slots */}
      {pcToggle && (
        <div className='w-[90%] bg-black rounded-xl overflow-x-auto shadow-[0px_0px_30px_8px_#38a169]  scrollbar-thumb-rose-500 scrollbar-thin
                        md:w-[30%] md:h-[80vh] overflow-x-hidden'>
          {/* Content for PC slots */}
          <div className=' float-end p-4'>
              <button className='text-white' onClick={(e) => setPcToggle(false)}><ImCross /></button> 
          </div>
          <PcSlotBooking />
        </div>
      )}



                    {/* Console gaming Div */}
      <div className='bg-white rounded-xl flex justify-center items-center flex-col shadow-[0px_0px_30px_8px_#e53e3e]
                       h-[40vh] mt-10  
                        md:mt-0  md:w-[30%] md:h-[80vh] md:ml-10' >
                        

                          {/* Img for Mobile screen */}
                      <img 
                           className='relative w-full h-full rounded-xl md:hidden'
                           src="https://i.pinimg.com/564x/82/61/d4/8261d4f6401da8f98407e175cde46ad5.jpg" alt="" 
                       />

                        {/* Img for Desktop screen */}
                       <img 
                           className='relative w-full h-full rounded-xl hidden md:block'
                           src="https://i.pinimg.com/736x/59/d6/69/59d669b12f31e9830a24f05b636ee245.jpg" alt="" 
                       />

                       <div className=' flex justify-center gap-10 items-center flex-col uppercase absolute text-wrap mx-8 md:mt-40'>

                        <h1 className=' text-2xl w-52 text-white text-center font-bold  text-wrap
                                      md:w-96 md:text-4xl md:text-black'>
                                        grab your Console for 70rs per hour
                        </h1>

                        <div>
                            <div onClick={(e) => showPsSlots(false)} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-red-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">BOOK NOW!!</span>
                            </div>
                        </div>

                       </div>
                          
      </div>



      {psToggle && (
        <div className='  bg-black rounded-xl overflow-x-auto shadow-[0px_0px_30px_8px_#38a169]  scrollbar-thumb-rose-500 scrollbar-thin
                        md:w-[30%] md:h-[80vh] overflow-x-hidden'>
          {/* Content for PC slots */}
          <div className=' float-end p-4'>
              <button className='text-white' onClick={showPsSlots}><ImCross /></button> 
          </div>
          <PsSlotBooking />``
        </div>


      )}

    </div>
  );
}

export default Booking;
