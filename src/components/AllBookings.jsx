import React from 'react';

const AllBookings = ({ bookings }) => {
  return (
    <div className='mb-32'>
      <h2 className='text-2xl font-bold mb-4 text-center'>All Bookings</h2>
      <table className="w-full table-fixed bg-black border-collapse border border-gray-800">
        <thead>
          <tr className="bg-gray-200">
            <th className=" bg-black text-white border-2 border-red-500 px-4 py-2">Name</th>
            <th className="bg-black text-white border-2 border-red-500 px-4 py-2">Number of PCs</th>
            <th className="bg-black text-white border-2 border-red-500 px-4 py-2">Start Time</th>
            <th className="bg-black text-white border-2 border-red-500 px-4 py-2">End Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.map((booking, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="bg-black text-white border-2 border-red-500 px-4 py-2">{booking.name}</td>
              <td className="bg-black text-white border-2 border-red-500 px-4 py-2">{booking.numberOfPC}</td>
              <td className="bg-black text-white border-2 border-red-500 px-4 py-2">{booking.startTime}</td>
              <td className="bg-black text-white border-2 border-red-500 px-4 py-2">{booking.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookings;
