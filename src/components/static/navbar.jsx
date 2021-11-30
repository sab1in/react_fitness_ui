import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 650) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="bg-black font-Nunito">
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
                className="cursor-pointer"
                onClick={() => handleToggleMenu()}
              >
                Menu
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
