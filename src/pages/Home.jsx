import Hero from "../components/home/Hero";
import About from "../components/home/About";
import SportsCategories from "../components/home/SportsCategories";
import HowItWorks from "../components/home/HowItWorks";
import PopularCourts from "../components/home/PopularCourts";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <SportsCategories />
      <About />
      <PopularCourts />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
