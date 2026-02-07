import { Link } from "react-router-dom";

const sports = [
  {
    name: "Badminton",
    image:
      "https://images.unsplash.com/photo-1626224583764-84786c7113f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Cricket",
    image:
      "https://images.unsplash.com/photo-1531415074968-bc0886d19026?q=80&w=2041&auto=format&fit=crop",
  },
  {
    name: "Tennis",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Football",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1931&auto=format&fit=crop",
  },
  {
    name: "Basketball",
    image:
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
  },
  {
    name: "Swimming",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop",
  },
];

const SportsCategories = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Browse by Sports
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose your favorite sport and find a court nearby.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport) => (
            <Link
              key={sport.name}
              to="/courts"
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-3 aspect-h-2 h-64">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white">{sport.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsCategories;
