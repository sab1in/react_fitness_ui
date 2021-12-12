import React, { useState, useEffect } from "react";
import "./carousel.css";
import home_bg_1 from "../../../assists/images/home-bg-1.jpg";
import home_bg_2 from "../../../assists/images/home-bg-2.jpg";
import home_bg_3 from "../../../assists/images/home-bg-3.jpg";

const carouselImage = [
  {
    image: home_bg_1,
    desc: "",
  },
  {
    image: home_bg_2,
    desc: "",
  },
  {
    image: home_bg_3,
    desc: "",
  },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    if (width !== innerWidth) {
      setActiveSlide(0);
      setWidth(innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const interval = setInterval(function () {
      if (activeSlide === 2) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide + 1);
      }
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  });

  // const handleTouchStart = (e) => {
  //   console.log(e);
  // };
  // const handleTouchMove = (e) => {
  //   console.log(e);
  // };
  // const handleTouchEnd = (e) => {
  //   console.log(e);
  //   console.log("hello");
  // };
  return (
    <>
      <section
        className="home font-Nunito mt-12 sm:mt-14 overflow-hidden "
        id="home"
      >
        <div className="home-slider relative ">
          <div
            // onTouchStart={(e) => console.log(e)}
            // onTouchMove={(e) => handleTouchMove(e)}
            // onTouchEnd={(e) => handleTouchEnd(e)}
            style={{
              width: 3 * width,
              left: -activeSlide * width,
            }}
            className="wrapper flex relative transition-all duration-500"
          >
            {Array.isArray(carouselImage) &&
              carouselImage.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="slide w-screen"
                    style={{ background: `url(${item.image}) no-repeat` }}
                  >
                    <div className="content">
                      <span>Be strong, Be fit</span>
                      <h3>Make yourself stronger than your excuses.</h3>
                      <div className="btn">get started</div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex gap-2 left-2/4 absolute bottom-4">
            <div
              className={`${
                activeSlide === 0 ? "bg-red1" : "bg-white"
              } w-3 h-3 cursor-pointer`}
              onClick={() => setActiveSlide(0)}
            ></div>
            <div
              className={`${
                activeSlide === 1 ? "bg-red1" : "bg-white"
              } w-3 h-3 cursor-pointer`}
              onClick={() => setActiveSlide(1)}
            ></div>
            <div
              className={`${
                activeSlide === 2 ? "bg-red1" : "bg-white"
              } w-3 h-3 cursor-pointer`}
              onClick={() => setActiveSlide(2)}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
