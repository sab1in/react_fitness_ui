import React from "react";
import aboutImage from "../../../assists/images/about-img.jpg";

const aboutItems = [
  {
    head: "Body And Mind",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Est, Enim.",
  },
  {
    head: "Healthy Life",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Est, Enim.",
  },
  {
    head: "Strategies",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Est, Enim.",
  },
  {
    head: "Workout",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Est, Enim.",
  },
];

const About = () => {
  return (
    <div className="bg-black1 pb-10 text-white font-Nunito">
      <div className="flex flex-col lg:flex-row w-10/12 mx-auto pt-10  gap-20 ">
        <div className="w-full lg:w-1/2">
          <div className="mt-10 relative">
            <img className="z-10 w-full relative" src={aboutImage} />
            <div className="w-40 h-40 bg-red1 absolute -left-5 -top-5"></div>
            <div className="w-40 h-40 bg-red1 -right-5 absolute -bottom-5"></div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <span className="text-red1 text-xl font-semibold ">About Us</span>
          <h3
            style={{ lineHeight: "3rem" }}
            className="text-4xl font-bold  mt-4"
          >
            Every Day Is A Chance To Become Better
          </h3>
          <p className="mt-3 leading-7 text-lightWhite">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            doloribus nam eos officiis nesciunt animi incidunt. Nisi rem iure
            voluptatem magnam, velit elus sint esse impedit vel voluptate id
            quisquam
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            {aboutItems.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="flex gap-3">
                    <svg
                      className="w-8 h-7 text-xl stroke-current stroke-2 text-red1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">{item.head}</h3>
                  </div>

                  <p className="text-base text-lightWhite leading-7 mt-2">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            style={{
              background: "linear-gradient(130deg, #f00 93%, transparent 7%)",
            }}
            className="w-40 text-center mt-10 py-2 font-semibold"
          >
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
