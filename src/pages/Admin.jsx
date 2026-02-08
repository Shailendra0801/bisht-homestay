import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:3001/api';

const Admin = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('reservations');
  const [reservations, setReservations] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRoom, setEditingRoom] = useState(null);

  useEffect(() => {
    if (!isAdmin()) {
      navigate('/');
      return;
    }

    loadData();
  }, [isAdmin, navigate]);

  const loadData = async () => {
    setLoading(true);
    try {
      const reservationsResponse = await fetch(`${API_BASE_URL}/reservations`);
      const reservationsData = await reservationsResponse.json();
      if (reservationsData.success) {
        setReservations(reservationsData.reservations);
      }
      
      const feedbackResponse = await fetch(`${API_BASE_URL}/feedback`);
      const feedbackData = await feedbackResponse.json();
      if (feedbackData.success) {
        setFeedback(feedbackData.feedback);
      }

      const roomsResponse = await fetch(`${API_BASE_URL}/rooms`);
      const roomsData = await roomsResponse.json();
      if (roomsData.success) {
        setRooms(roomsData.rooms);
      }
    } catch (error) {
      console.error('Error loading admin data:', error);
      alert('Failed to load data. Please make sure the server is running.');
    }
    setLoading(false);
  };

  const handleUpdateRoom = async (roomId, updatedData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/rooms/${roomId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Room updated successfully!');
        setEditingRoom(null);
        loadData(); // Reload data
      } else {
        alert('Failed to update room: ' + data.message);
      }
    } catch (error) {
      console.error('Error updating room:', error);
      alert('Failed to update room. Please make sure the server is running.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-lg sm:text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex pt-20 md:pt-28 lg:pt-32 justify-center bg-gray-50 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Welcome, {user?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition w-full sm:w-auto"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-4 sm:mb-6">
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex -mb-px whitespace-nowrap">
              <button
                onClick={() => setActiveTab('reservations')}
                className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium ${
                  activeTab === 'reservations'
                    ? 'border-b-2 border-[#A4742C] text-[#A4742C]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reservations ({reservations.length})
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium ${
                  activeTab === 'feedback'
                    ? 'border-b-2 border-[#A4742C] text-[#A4742C]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Feedback ({feedback.length})
              </button>
              <button
                onClick={() => setActiveTab('rooms')}
                className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium ${
                  activeTab === 'rooms'
                    ? 'border-b-2 border-[#A4742C] text-[#A4742C]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Rooms ({rooms.length})
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {activeTab === 'reservations' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold">Reservations</h2>
                  <button
                    onClick={loadData}
                    className="px-4 py-2 bg-[#A4742C] text-white rounded hover:opacity-90 transition text-sm sm:text-base"
                  >
                    Refresh
                  </button>
                </div>
                {reservations.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No reservations yet.</p>
                ) : (
                  <>
                    {/* Desktop Table View */}
                    <div className="hidden lg:block overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Guest Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Contact
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Dates
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Guests
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Submitted
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {reservations.map((reservation) => (
                            <tr key={reservation.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                  {reservation.firstName} {reservation.lastName}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{reservation.email}</div>
                                <div className="text-sm text-gray-500">{reservation.phone || 'N/A'}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {new Date(reservation.arrivalDate).toLocaleDateString()} -
                                </div>
                                <div className="text-sm text-gray-900">
                                  {new Date(reservation.departureDate).toLocaleDateString()}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                Adults: {reservation.adults}, Children: {reservation.children}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  {reservation.status || 'Pending'}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {formatDate(reservation.createdAt)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile/Tablet Card View */}
                    <div className="lg:hidden space-y-4">
                      {reservations.map((reservation) => (
                        <div 
                          key={reservation.id} 
                          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-base font-semibold text-gray-900">
                                {reservation.firstName} {reservation.lastName}
                              </h3>
                              <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                {reservation.status || 'Pending'}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {formatDate(reservation.createdAt)}
                            </span>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Email:</span>
                              <span className="ml-2 text-gray-900">{reservation.email}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Phone:</span>
                              <span className="ml-2 text-gray-900">{reservation.phone || 'N/A'}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Check-in:</span>
                              <span className="ml-2 text-gray-900">
                                {new Date(reservation.arrivalDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Check-out:</span>
                              <span className="ml-2 text-gray-900">
                                {new Date(reservation.departureDate).toLocaleDateString()}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Guests:</span>
                              <span className="ml-2 text-gray-900">
                                {reservation.adults} Adults, {reservation.children} Children
                              </span>
                            </div>
                            {reservation.additionalDetails && (
                              <div>
                                <span className="font-medium text-gray-700">Notes:</span>
                                <p className="mt-1 text-gray-600">{reservation.additionalDetails}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === 'feedback' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold">Customer Feedback</h2>
                  <button
                    onClick={loadData}
                    className="px-4 py-2 bg-[#A4742C] text-white rounded hover:opacity-90 transition text-sm sm:text-base"
                  >
                    Refresh
                  </button>
                </div>
                {feedback.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No feedback yet.</p>
                ) : (
                  <div className="space-y-4">
                    {feedback.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.name}</h3>
                            {item.email && (
                              <p className="text-xs sm:text-sm text-gray-600 mt-1 break-all">{item.email}</p>
                            )}
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {formatDate(item.createdAt)}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 break-words">{item.feedback}</p>
                        {item.rating && (
                          <div className="mt-3 flex items-center">
                            <span className="text-xs sm:text-sm text-gray-600 mr-2">Rating:</span>
                            <span className="text-yellow-500 text-sm sm:text-base">
                              {'⭐'.repeat(item.rating)}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'rooms' && (
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold">Manage Rooms</h2>
                  <button
                    onClick={loadData}
                    className="px-4 py-2 bg-[#A4742C] text-white rounded hover:opacity-90 transition text-sm sm:text-base"
                  >
                    Refresh
                  </button>
                </div>
                {rooms.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No rooms available.</p>
                ) : (
                  <div className="space-y-4">
                    {rooms.map((room) => (
                      <div
                        key={room.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition"
                      >
                        {editingRoom?.id === room.id ? (
                          <RoomEditForm
                            room={room}
                            onSave={(updatedData) => handleUpdateRoom(room.id, updatedData)}
                            onCancel={() => setEditingRoom(null)}
                          />
                        ) : (
                          <>
                            <div className="flex flex-col lg:flex-row gap-4">
                              <img
                                src={room.image}
                                alt={room.name}
                                className="w-full lg:w-48 h-32 object-cover rounded"
                              />
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                  <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
                                  <div className="text-xl font-bold text-[#A4742C]">₹{room.price}/night</div>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{room.description}</p>
                                <div className="flex flex-wrap gap-4 text-sm mb-3">
                                  <span className="text-gray-700">
                                    <strong>Capacity:</strong> {room.capacity} guests
                                  </span>
                                  <span className={`font-semibold ${room.available ? 'text-green-600' : 'text-red-600'}`}>
                                    {room.available ? 'Available' : 'Unavailable'}
                                  </span>
                                </div>
                                <div>
                                  <strong className="text-sm text-gray-700">Amenities:</strong>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {room.amenities.map((amenity, idx) => (
                                      <span
                                        key={idx}
                                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                      >
                                        {amenity}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <button
                                onClick={() => setEditingRoom(room)}
                                className="px-4 py-2 bg-[#A4742C] text-white rounded hover:opacity-90 transition text-sm"
                              >
                                Edit Room
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Room Edit Form Component
const RoomEditForm = ({ room, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: room.name,
    description: room.description,
    price: room.price,
    capacity: room.capacity,
    amenities: room.amenities.join(', '),
    image: room.image,
    available: room.available
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      amenities: formData.amenities.split(',').map(a => a.trim()).filter(a => a),
      price: Number(formData.price),
      capacity: Number(formData.capacity)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Room Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A4742C]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹/night)</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A4742C]"
            required
            min="0"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A4742C]"
          rows="3"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Capacity (guests)</label>
          <input
            type="number"
            value={formData.capacity}
            onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A4742C]"
            required
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A4742C]"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amenities (comma-separated)
        </label>
        <input
          type="text"
          value={formData.amenities}
          onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A4742C]"
          placeholder="WiFi, AC, Hot Water, etc."
          required
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="available"
          checked={formData.available}
          onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
          className="w-4 h-4 text-[#A4742C] focus:ring-[#A4742C] border-gray-300 rounded"
        />
        <label htmlFor="available" className="ml-2 text-sm text-gray-700">
          Room Available
        </label>
      </div>

      <div className="flex gap-3 justify-end pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#A4742C] text-white rounded hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default Admin;
