import React from "react";
import Navbar from "../components/static/navbar";
import Carousel from "../components/static/carousel/carousel";
import About from "../components/home/about/About";
import GymFeature from "../components/home/gymFeature/GymFeature";
import Pricing from "../components/home/pricing/Pricing";
import Expert from "../components/home/expert/expert";
import Discount from "../components/home/discount/Discount";
import Testimonials from "../components/home/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <GymFeature />
      <Pricing />
      <Expert />
      <Discount />
      <Testimonials />
    </>
  );
};

export default Home;
