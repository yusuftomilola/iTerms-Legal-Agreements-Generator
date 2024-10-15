import Faqs from "../components/Faqs";
import Hero from "../components/home/Hero";
import Nav from "../components/Nav";
import Discover from "../components/home/Discover";
import HowItWorks from "../components/home/HowItWorks";
import Solutions from "../components/home/Solutions";
import Documents from "../components/home/Documents";
import Competitors from "../components/home/Competitors";
import Legal from "../components/home/Legal";
import TestimonialHeading from "../components/home/TestimonialHeading";
import Testimonials from "../components/home/Testimonials";
import Blog from "../components/home/Blog";

const Home = () => {
  return (
    <>
      <Hero />

      <main className="max-w-[1200px] mx-auto flex flex-col overflow-hidden">
        <Discover />
        <HowItWorks />
        <Solutions />
        <Documents />
        <Competitors />
        <Legal />
        <TestimonialHeading />
        <Testimonials />
        <Blog />
        <Faqs />
      </main>
    </>
  );
};

export default Home;
