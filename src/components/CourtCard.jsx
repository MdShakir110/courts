import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CourtCard = ({ court }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={court.image}
        alt={court.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{court.name}</h3>
          <span className="flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
            <Star size={12} className="mr-1 fill-current" /> {court.rating}
          </span>
        </div>

        <p className="text-sm text-blue-600 font-medium mt-1">{court.sport}</p>

        <div className="flex items-center text-gray-500 text-sm mt-2">
          <MapPin size={16} className="mr-1" />
          {court.location}
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {court.facilities.slice(0, 3).map((facility, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {facility}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-lg font-bold text-gray-900">
            ₹{court.pricePerHour}
            <span className="text-sm text-gray-500 font-normal">/hr</span>
          </div>
          <Link
            to={`/court/${court.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourtCard;
