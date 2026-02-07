import { ShieldCheck, Clock, CheckCircle, Tag } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Easy Booking",
    description: "Book your slot in just 3 clicks. No hassle.",
  },
  {
    icon: Tag,
    title: "Affordable Prices",
    description: "Best rates in the city. No hidden charges.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Courts",
    description: "All courts are personally verified by us.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "We are here to help you anytime.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose Us?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white border border-white/20"
            >
              <div className="mx-auto h-12 w-12 bg-white rounded-full flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
