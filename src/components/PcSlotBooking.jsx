import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import AllBookings from './AllBookings'; // Importing the AllBookings component

const PcSlotBooking = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [name, setName] = useState('');
  const [numberOfPC, setNumberOfPC] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookings, setBookings] = useState([]);

    console.log(numberOfPC);

  useEffect(() => {
    generateSlots();
    setCurrentDate(getCurrentDate());
  }, []);

  useEffect(() => {
    calculateTotalAmount();
  }, [selectedSlots, numberOfPC]);

  // Reset bookings at midnight
  useEffect(() => {
    const intervalId = setInterval(resetBookings, 1000 * 60 * 60); // Check every hour
    return () => clearInterval(intervalId);
  }, []);

  const resetBookings = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour === 0) {
      setBookings([]);
    }
  };

  const generateSlots = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    const startTime = 9; // 9am
    const endTime = 21; // 9pm
    const newSlots = [];

    for (let hour = startTime; hour < endTime; hour++) {
      const end = hour + 1;

      const slot = {
        startTime: `${hour}:00`,
        endTime: `${end}:00`,
        available: true,
        isPast: hour < currentHour,
      };

      newSlots.push(slot);
    }

    setSlots(newSlots);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };

  const handleSlotSelection = (index) => {
    const isFullyBooked = slots[index].bookingsCount >= 10;
    if (!isFullyBooked && !slots[index].isPast) {
      const isSelected = selectedSlots.includes(index);
      const updatedSelectedSlots = isSelected
        ? selectedSlots.filter((selectedSlot) => selectedSlot !== index)
        : [...selectedSlots, index];
      setSelectedSlots(updatedSelectedSlots);
      console.log('Slot selected:', index);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberOfPCChange = (event) => {
    const pcCount = parseInt(event.target.value);
    setNumberOfPC(pcCount > 3 ? 3 : pcCount);
  };

  const calculateTotalAmount = () => {
    const amountPerSlot = 70; // Rs 70 per slot
    const totalSlotsSelected = selectedSlots.length;
    const totalAmount = totalSlotsSelected * numberOfPC * amountPerSlot;
    setTotalAmount(totalAmount);
  };

  const handleConfirmBooking = () => {
  if (!name || selectedSlots.length === 0) {
    // Ensure that name is provided and slots are selected before confirming booking
    return;
  }

  const newBookings = selectedSlots.map((index) => {
    const slot = slots[index];
    return {
      startTime: slot.startTime,
      endTime: slot.endTime,
      name: name,
      numberOfPC: numberOfPC, // Ensure to include numberOfPC in each booking
    };
  });

  setBookings((prevBookings) => [...prevBookings, ...newBookings]);
  setBookingConfirmed(true);
  alert("Your Booking is confimred")
};

  return (
    <div className='flex flex-col w-[100%] items-center ml-2'>
      <div className=' px-8 py-4  bg-black text-white rounded-xl'>
        <h2 className='text-center'><span className='text-xl p-2 px-4 bg-red-500 text-white font-bold rounded-xl border-solid border-4 border-white'>{currentDate}</span></h2>
        <div className='flex flex-col lg:flex-row gap-5 justify-center items-center w-full mt-8 mb-4'>
          <div className="">
            <label htmlFor="name" className="mr-4 text-lg  font-semibold" >Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder='Name....'
              value={name} 
              onChange={handleNameChange} 
              className="bg-gray-200 rounded  w-56 text-black "
            />
          </div>
          <div className=" flex justify-center flex-col w-28">
            <label htmlFor="numberOfPC" className="mr-4 text-lg  text-center font-semibold">No of PCs</label>
            <input 
              type="number" 
              id="numberOfPC" 
              value={numberOfPC} 
              onChange={handleNumberOfPCChange} 
              min="1" 
              max="3" 
              className="bg-gray-200 rounded text-black w-20"
            />
          </div>
        </div>
        <h2 className='text-2xl font-bold text-center'>Available Slots</h2>
        <div className="flex justify-center flex-wrap mt-5">
          {slots.map((slot, index) => (
            <span
              className={classNames(
                'p-2 text-xl m-2 rounded-lg border-2 cursor-pointer',
                {
                  'bg-red-500': !slot.available && !selectedSlots.includes(index) ,
                  'bg-green-500': slot.available && !selectedSlots.includes(index) && !slot.isPast,
                  'bg-blue-500': selectedSlots.includes(index),
                  'bg-gray-500': slot.isPast,
                }
              )}
              key={index}
              onClick={() => handleSlotSelection(index)}
            >
              {slot.startTime} - {slot.endTime}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <p className='text-lg text-center'>Total Amount: Rs {totalAmount}</p>
        </div>
        {name && selectedSlots.length > 0 && (
          <div className='flex justify-center'>
            <button 
                onClick={handleConfirmBooking} 
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
                Confirm Booking
            </button>
          </div>
        )}
        {bookingConfirmed && (
          <p className="mt-4 text-green-500 font-bold text-center">Your booking is confirmed!</p>
        )}
      </div>

      {/* Display AllBookings component */}
      {/* <div className="w-[100%] lg:w-[60%] mt-8">
        <AllBookings bookings={bookings} />
      </div> */}
    </div>
  );
};

export default PcSlotBooking;
