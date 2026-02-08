import React, { useState, useEffect } from "react";
import RoomCard from "../shared/components/RoomCard";

const API_BASE_URL = "http://localhost:3001/api";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/rooms`);
      const data = await response.json();

      if (data.success) {
        setRooms(data.rooms);
      } else {
        setError("Failed to load rooms");
      }
    } catch (error) {
      console.error("Error loading rooms:", error);
      setError("Failed to load rooms. Please make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-xl text-brand">Loading rooms...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-red-500 mb-4">{error}</div>
          <button
            onClick={loadRooms}
            className="px-6 py-2 bg-[#A4742C] text-white rounded hover:opacity-90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-12 bg-gray-50">
          {/* Header */}
       <section
          title="Our Rooms"
          className=" relative bg-[url('./src/assets/room1.jpg')] w-[100vw] flex justify-center items-center p-16 bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute  w-full inset-0 bg-black/75"></div>
          <h1 className="md:text-6xl font-['Playfair'] uppercase z-2 text-4xl md:text-5xl lg:text-6xl tracking-wide text-white font-normal whitespace-nowrap mb-4">
           Our Rooms
          </h1>
        </section>
      <div className="flex flex-col items-center justify-center gap-8 mt-16
                 py-12">
    
       
        <div className="text-center mb-12">
          <h3 className="font-['Playfair'] font-normal tracking-normal uppercase text-sm text-brand mb-2">
            Discover Your Perfect Stay
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience comfort and luxury in our carefully designed rooms, each
            offering unique views and amenities.
          </p>
        </div>

        {/* Rooms Grid */}
        {rooms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No rooms available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid px-4 md:px-8 lg:px-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
