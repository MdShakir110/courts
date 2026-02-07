import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";

const BookingHistory = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) {
      const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const userBookings = allBookings.filter((b) => b.userId === user.email);
      // Sort by most recent
      userBookings.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
      );
      setBookings(userBookings);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">
          Please login to view your bookings
        </h2>
        <Link
          to="/login"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
          <p className="text-gray-500 text-lg">
            You haven't made any bookings yet.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Find a Court
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {booking.courtName}
                </h3>
                <div className="mt-2 space-y-1 text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    {booking.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-blue-500" />
                    {booking.slot}
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <span
                  className={`
                                    px-3 py-1 rounded-full text-xs font-semibold
                                    ${booking.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                                `}
                >
                  {booking.status}
                </span>
                <p className="text-lg font-bold text-gray-900 mt-2">
                  ₹{booking.price}
                </p>
                {booking.amountPaid > 0 && (
                  <p className="text-sm text-green-600 font-medium">
                    Advance Paid: ₹{booking.amountPaid}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  Booked on {new Date(booking.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
