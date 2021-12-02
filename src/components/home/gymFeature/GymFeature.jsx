import React from "react";
import Button from "../../common/button";
import f1 from "../../../assists/images/f-img-1.jpg";
import f2 from "../../../assists/images/f-img-2.jpg";
import f3 from "../../../assists/images/f-img-3.jpg";
import icon1 from "../../../assists/images/icon-1.png";
import icon2 from "../../../assists/images/icon-2.png";
import icon3 from "../../../assists/images/icon-3.png";
import Header from "../../common/header";

const gymFeatureList = [
  {
    title: "Body Building",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Similique, Atque.",
    image: f1,
    icon: icon1,
  },
  {
    title: "Gym For Men",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Similique, Atque.",
    image: f2,
    icon: icon2,
  },
  {
    title: "Gym For Women",
    desc: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Similique, Atque.",
    image: f3,
    icon: icon3,
  },
];

const GymFeature = () => {
  return (
    <div className=" bg-black1 pt-10 font-Nunito">
      <Header title={"Gym Features"} />

      <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 mt-10 mx-auto text-white">
        {gymFeatureList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex h-auto sm:h-300 lg:h-600 flex-col sm:flex-row lg:flex-col"
            >
              <div
                className={`${
                  index % 2 !== 0 ? "sm:order-1 " : null
                } h-full lg:h-1/2 w-full sm:w-1/2 lg:w-full overflow-hidden`}
              >
                <img
                  src={item.image}
                  className="w-full h-300 sm:h-full transform hover:scale-105 transition duration-500"
                  alt=""
                />
              </div>
              <div className="flex-1 lg:w-full p-4 flex gap-3 flex-col justify-center items-center bg-lightBg">
                <div className="">
                  <img
                    style={{ filter: "invert(1)", height: 80 }}
                    className="fill-current text-white"
                    src={item.icon}
                    alt=""
                  />
                </div>
                <div className=" text-red1 text-xl font-semibold">
                  {item.title}
                </div>
                <div className="text-center text-lightWhite text-base ">
                  {item.desc}
                </div>
                <Button />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymFeature;
