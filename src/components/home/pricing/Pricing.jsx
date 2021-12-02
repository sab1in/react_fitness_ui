import React from "react";
import Button from "../../common/button";

const pricingPlanList = [
  "Cardio Exercise",
  "Weight Lifting",
  "Diet Plans",
  "Overall Results",
];

const basicPlanList = [
  "Personal Training",
  "Cardio Exercise",
  "Weight Lifting",
  "Diet Plans",
  "Overall Results",
];

const Pricing = () => {
  return (
    <div className="bg-black1 pt-24 font-Nunito">
      <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto gap-8 text-white">
        <div className="flex-1">
          <div className="text-red1 text-xl font-light tracking-wider leading-8">
            Pricing Plan
          </div>
          <div style={{ lineHeight: 1.5 }} className="text-4xl font-semibold">
            Affordable Pricing Plan For Your
          </div>
          <div className="text-lightWhite leading-7 text-sm font-light">
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ipsam
            Dolore Excepturi Ea Suscipit Fugiat Cum Quae, Rerum Optio Mollitia!
            Tempora?
          </div>
          <div className="py-2">
            {pricingPlanList.map((item, index) => {
              return (
                <div key={index} className="flex py-4 gap-4">
                  <div>
                    <svg
                      className="w-5 h-5 text-red1"
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
                  </div>
                  <div className="text-sm text-lightWhite">{item}</div>
                </div>
              );
            })}
          </div>
          <Button />
        </div>

        <div
          style={{
            background: "linear-gradient(130deg, #111 93%, transparent 7%)",
          }}
          className="flex-1 p-4 pb-8 flex flex-col items-center justify-center w-full h-full "
        >
          <div className="text-2xl mt-2 font-bold pb-4">Basic Plan</div>
          <div style={{ lineHeight: 3 }}>
            <span className="text-xl font-semibold">$</span>
            <span className="text-5xl text-red1 font-semibold">30</span>
            <span className="text-xl">/Mo</span>
          </div>
          <div>
            <div className="py-2">
              {basicPlanList.map((item, index) => {
                return (
                  <div key={index} className="flex py-4 gap-4">
                    <div>
                      <svg
                        className="w-5 h-5 text-red1"
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
                    </div>
                    <div className="text-sm text-lightWhite">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <Button />
        </div>

        <div className="flex-1 p-4 pb-8 flex flex-col items-center justify-center w-full h-full ">
          <div className="text-2xl mt-2 font-bold pb-4">Premium Plan</div>
          <div style={{ lineHeight: 3 }}>
            <span className="text-xl font-semibold">$</span>
            <span className="text-5xl text-red1 font-semibold">90</span>
            <span className="text-xl">/Mo</span>
          </div>
          <div>
            <div className="py-2">
              {basicPlanList.map((item, index) => {
                return (
                  <div key={index} className="flex py-4 gap-4">
                    <div>
                      <svg
                        className="w-5 h-5 text-red1"
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
                    </div>
                    <div className="text-sm text-lightWhite">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
