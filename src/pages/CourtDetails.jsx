import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courts } from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import SlotSelector from "../components/SlotSelector";
import PaymentModal from "../components/PaymentModal";
import Spinner from "../components/Spinner";
import { MapPin, Check, AlertCircle, ArrowLeft } from "lucide-react";

const CourtDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [court, setCourt] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [bookingStatus, setBookingStatus] = useState("idle"); // idle, processing, success
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Load Court Data
  useEffect(() => {
    const foundCourt = courts.find((c) => c.id === parseInt(id));
    if (foundCourt) {
      setCourt(foundCourt);
    } else {
      // Handle not found
    }
  }, [id]);

  // Load Bookings from LocalStorage
  useEffect(() => {
    if (!court) return;
    const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const courtBookings = allBookings.filter((b) => b.courtId === court.id);
    setBookedSlots(courtBookings);
  }, [court, bookingStatus]);

  const initiateBooking = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!selectedSlot) return;
    setShowPaymentModal(true);
  };

  const confirmBooking = (paymentDetails) => {
    setShowPaymentModal(false);
    setBookingStatus("processing");

    // Simulate final booking processing
    setTimeout(() => {
      const newBooking = {
        id: Date.now(),
        courtId: court.id,
        courtName: court.name,
        date: selectedDate,
        slot: selectedSlot,
        userId: user.email,
        price: court.pricePerHour,
        status: "Confirmed",
        paymentStatus: paymentDetails.paymentStatus,
        amountPaid: paymentDetails.amountPaid,
        transactionId: paymentDetails.transactionId,
        timestamp: new Date().toISOString(),
      };

      const existingBookings = JSON.parse(
        localStorage.getItem("bookings") || "[]",
      );
      localStorage.setItem(
        "bookings",
        JSON.stringify([...existingBookings, newBooking]),
      );

      setBookingStatus("success");
    }, 1000);
  };

  if (!court)
    return (
      <div className="p-8 text-center flex justify-center">
        <Spinner size="lg" />
      </div>
    );

  if (bookingStatus === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Your slot at <strong>{court.name}</strong> for{" "}
            <strong>{selectedDate}</strong> at <strong>{selectedSlot}</strong>{" "}
            has been secured.
          </p>
          <button
            onClick={() => navigate("/history")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View My Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
      >
        <ArrowLeft size={20} className="mr-1" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image & Info */}
        <div className="lg:col-span-2">
          <img
            src={court.image}
            alt={court.name}
            className="w-full h-96 object-cover rounded-xl shadow-md"
          />

          <div className="mt-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {court.name}
                </h1>
                <div className="flex items-center text-gray-500 mt-2">
                  <MapPin size={18} className="mr-1" />
                  {court.location}
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">
                  ₹{court.pricePerHour}
                </p>
                <p className="text-sm text-gray-500">per hour</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Facilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {court.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Select Date
              </h3>
              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setSelectedSlot(null);
                }}
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <SlotSelector
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
              bookedSlots={bookedSlots}
            />
          </div>
        </div>

        {/* Right Column: Booking Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Booking Summary
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Date</span>
                <span className="font-medium text-gray-900">
                  {selectedDate}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Time Slot</span>
                <span className="font-medium text-gray-900">
                  {selectedSlot || "-"}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Rate</span>
                <span className="font-medium text-gray-900">
                  ₹{court.pricePerHour}/hr
                </span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center">
                <span className="font-bold text-lg">Total Amount</span>
                <span className="font-bold text-xl text-blue-600">
                  ₹{selectedSlot ? court.pricePerHour : 0}
                </span>
              </div>
            </div>

            {!user && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4 flex items-start">
                <AlertCircle
                  size={16}
                  className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0"
                />
                <p className="text-sm text-yellow-700">
                  Please login to complete your booking.
                </p>
              </div>
            )}

            <button
              onClick={initiateBooking}
              disabled={!selectedSlot || bookingStatus === "processing"}
              className={`
                                w-full py-3 rounded-lg font-bold text-white transition-all
                                ${
                                  !selectedSlot
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : bookingStatus === "processing"
                                      ? "bg-blue-400 cursor-wait"
                                      : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
                                }
                            `}
            >
              {bookingStatus === "processing" ? (
                <div className="flex items-center justify-center">
                  <Spinner size="sm" />{" "}
                  <span className="ml-2">Processing...</span>
                </div>
              ) : user ? (
                "Proceed to Pay"
              ) : (
                "Login to Book"
              )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Secure payment with 20% advance booking.
            </p>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <PaymentModal
          bookingDetails={{
            courtName: court.name,
            price: court.pricePerHour,
            date: selectedDate,
            slot: selectedSlot,
          }}
          onClose={() => setShowPaymentModal(false)}
          onConfirm={confirmBooking}
        />
      )}
    </div>
  );
};

export default CourtDetails;
