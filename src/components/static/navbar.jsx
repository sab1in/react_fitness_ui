import React, { useState, useEffect, useRef } from "react";

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/",
  },
  {
    name: "Features",
    to: "/",
  },
  {
    name: "Pricing",
    to: "/",
  },
  {
    name: "Trainers",
    to: "/",
  },
  {
    name: "Blogs",
    to: "/",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(window.innerWidth < 650 ? true : false);
  const [openMenu, setOpenMenu] = useState(false);

  const burger = useRef();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  const handleToggleMenu = () => {
    burger.current.style.transform = openMenu
      ? "rotate(180deg)"
      : "rotate(-180deg)";
    burger.current.style.transition = "transform .5s ease-in-out";
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="bg-black w-full font-Nunito fixed top-0 z-20">
        <div
          className={`flex flex-col sm:flex-row w-11/12 ${
            openMenu ? "h-96" : "h-12"
          } overflow-hidden sm:w-auto sm:h-14 mx-auto sm:justify-around sm:items-center text-white transition-all duration-500`}
        >
          <div className={menu ? "flex justify-between items-center" : null}>
            <div className="text-3xl font-semibold my-2">
              ME<span className="text-red1">FIT</span>
            </div>
            {menu && (
              <div
                ref={burger}
                className="cursor-pointer"
                onClick={() => handleToggleMenu()}
              >
                {!openMenu ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 mb-2 pl-6 mt-10 sm:mt-0 sm:gap-0 sm:flex-row font-semibold text-lg  ">
            {Array.isArray(links) &&
              links.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="hover:bg-red1 px-4 cursor-pointer rounded-lg transition duration-300"
                  >
                    {item.name}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
