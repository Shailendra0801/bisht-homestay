import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Room Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {!room.available && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Unavailable
          </div>
        )}
      </div>

      {/* Room Details */}
      <div className="p-6">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 font-['Playfair']">
            {room.name}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#A4742C]">₹{room.price}</div>
            <div className="text-xs text-gray-500">per night</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>

        {/* Capacity */}
        <div className="flex items-center mb-4 text-sm text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-[#A4742C]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span>Up to {room.capacity} guests</span>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={() => navigate('/reservation')}
          disabled={!room.available}
          className={`w-full py-3 rounded font-medium transition-colors duration-200 ${
            room.available
              ? 'bg-[#A4742C] text-white hover:opacity-90 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {room.available ? 'Book Now' : 'Currently Unavailable'}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
