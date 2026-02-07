import { useState, useEffect } from "react";
import { courts, sports, locations } from "../data/mockData";
import CourtCard from "../components/CourtCard";
import CourtFilter from "../components/CourtFilter";

const Courts = () => {
  const [filteredCourts, setFilteredCourts] = useState(courts);
  const [filters, setFilters] = useState({
    search: "",
    sport: "",
    location: "",
  });

  useEffect(() => {
    let result = courts;

    if (filters.search) {
      result = result.filter((court) =>
        court.name.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    if (filters.sport) {
      result = result.filter((court) => court.sport === filters.sport);
    }

    if (filters.location) {
      result = result.filter((court) => court.location === filters.location);
    }

    setFilteredCourts(result);
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Find Your Perfect Court
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Book sports facilities near you in seconds.
        </p>
      </div>

      <CourtFilter
        filters={filters}
        setFilters={setFilters}
        sports={sports}
        locations={locations}
      />

      {filteredCourts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl text-gray-600">
            No courts found matching your criteria.
          </h3>
          <button
            onClick={() => setFilters({ search: "", sport: "", location: "" })}
            className="mt-4 text-blue-600 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Courts;
