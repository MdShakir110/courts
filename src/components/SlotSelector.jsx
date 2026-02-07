const SlotSelector = ({
  selectedDate,
  selectedSlot,
  setSelectedSlot,
  bookedSlots,
}) => {
  // Static time slots
  const timeSlots = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];

  const isBooked = (slot) => {
    return bookedSlots.some(
      (booking) => booking.date === selectedDate && booking.slot === slot,
    );
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Select a Time Slot
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {timeSlots.map((slot, index) => {
          const booked = isBooked(slot);
          return (
            <button
              key={index}
              disabled={booked}
              onClick={() => setSelectedSlot(slot)}
              className={`
                py-2 px-1 text-sm rounded-md border font-medium transition-all
                ${
                  booked
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : selectedSlot === slot
                      ? "bg-blue-600 text-white border-blue-600 shadow-md transform scale-105"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-500"
                }
              `}
            >
              {slot}
            </button>
          );
        })}
      </div>
      <div className="flex gap-4 mt-4 text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-white border border-gray-300 rounded mr-2"></span>{" "}
          Available
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-600 rounded mr-2"></span> Selected
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-gray-100 border border-gray-200 rounded mr-2"></span>{" "}
          Booked
        </div>
      </div>
    </div>
  );
};

export default SlotSelector;
