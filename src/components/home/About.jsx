const About = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              CourtBook is India's leading sports facility booking platform. We
              connect sports enthusiasts with the best local venues. Whether
              you're a casual player or a pro, we make it easy to find a place
              to play.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our mission is to promote an active lifestyle by making sports
              accessible to everyone. Say goodbye to phone calls and waiting
              times.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop"
              alt="Group of people playing sports"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
