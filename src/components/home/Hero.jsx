import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop"
          alt="Sports court"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Book Your Sports Court Easily
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Find and book the best badminton, cricket, tennis, and football courts
          near you. Instant confirmation and secure payments.
        </p>
        <div className="mt-10">
          <Link
            to="/courts"
            className="inline-block bg-blue-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-blue-700 md:text-lg"
          >
            Book Now
          </Link>
          <button className="ml-4 inline-block bg-white border border-transparent py-3 px-8 rounded-md font-medium text-blue-700 hover:bg-gray-50 md:text-lg">
            Explore Sports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
