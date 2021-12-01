import React from "react";
import Navbar from "../components/static/navbar";
import Carousel from "../components/static/carousel/carousel";
import About from "../components/home/about/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
    </>
  );
};

export default Home;
