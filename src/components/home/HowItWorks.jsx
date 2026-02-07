import { UserPlus, Search, Calendar, CreditCard } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds.",
  },
  {
    icon: Search,
    title: "Search Court",
    description: "Find the best court near you.",
  },
  {
    icon: Calendar,
    title: "Book Slot",
    description: "Select your preferred date and time.",
  },
  {
    icon: CreditCard,
    title: "Pay Online",
    description: "Pay a small advance to confirm.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Simple steps to get you playing.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <step.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
