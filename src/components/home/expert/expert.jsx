// import { useRef } from "react";
import Header from "../../common/header";
import "./expert.css";

import trainer1 from "../../../assists/images/trainer-1.jpg";
import trainer2 from "../../../assists/images/trainer-2.jpg";
import trainer3 from "../../../assists/images/trainer-3.jpg";
import trainer4 from "../../../assists/images/trainer-4.jpg";

const trainerList = [
  {
    role: "Expert Trainer",
    name: "John Deo",
    image: trainer1,
  },
  {
    role: "Expert Trainer",
    name: "John Deo",
    image: trainer2,
  },
  {
    role: "Expert Trainer",
    name: "John Deo",
    image: trainer3,
  },
  {
    role: "Expert Trainer",
    name: "John Deo",
    image: trainer4,
  },
];

const Expert = () => {
  // const card = useRef();

  //   const handelHover = () => {
  //     console.log("vako xa ta");
  //     card.current.style.height = "400px";
  //     console.log(card.current.style);
  //     card.current.style.margin = "50px";
  //   };
  return (
    <div className="bg-black1 pt-20 ">
      <Header title={"Expert Trainers"} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  w-10/12 mx-auto mt-10 pb-10">
        {trainerList.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-400 relative overflow-hidden container"
            >
              <img
                className="h-full w-full object-cover"
                src={item.image}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 transform translate-y-12 transition-all duration-500 contain hover:translate-y-0 w-full bg-lightBg px-5 py-3 text-white">
                <div className="text-red1">{item.role}</div>
                <div className="text-xl font-semibold">{item.name}</div>
                <div className="border-t border-lightWhite px-5 pt-2 mt-4">
                  fjkldjsdlfdjf dlsfsdjlfk
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expert;
