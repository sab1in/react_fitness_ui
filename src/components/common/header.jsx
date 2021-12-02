const Header = ({ title }) => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto relative flex justify-center">
      <div>
        <div className="text-red1 text-3xl relative z-10 bg-black1 text-center px-4 py-2 rounded font-semibold border-2 border-lightWhite">
          {title}
        </div>
      </div>
      <div className="absolute border-t-2 w-full top-7 z-0 pb-2 border-lightWhite"></div>
    </div>
  );
};

export default Header;
