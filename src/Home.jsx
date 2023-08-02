import React from "react";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/About";
import Products from "./components/home/Products";
import TestimonialSection from "./components/home/Testimonial";
import Customers from "./components/home/Customers";
// import NavBar from "./components/common/NavBar";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <div className="text-3xl font-bold">Home</div> */}
      <AboutSection />
      <Products />
      <TestimonialSection />
      <Customers />
    </div>
  );
};

export default Home;
