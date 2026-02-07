import { courts } from "../../data/mockData";
import CourtCard from "../CourtCard";

const PopularCourts = () => {
  // Get top 3 rated courts
  const popular = [...courts].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Courts
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Top-rated facilities loved by our players.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popular.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourts;
