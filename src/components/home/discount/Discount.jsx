import banner from "../../../assists/images/banner-bg.jpg";
import Button from "../../common/button";

const Discount = () => {
  return (
    <div className=" text-white font-Nunito">
      <div
        className="bg-fixed w-full"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col gap-2 justify-center items-center py-14 bg-black1 bg-opacity-70">
          <div className="text-xl text-red1 leading-10">Join Us Now</div>
          <div className="text-4xl text-center font-semibold leading-10">
            GET UPTO 50% DISCOUNT
          </div>
          <div className="max-w-xl text-center text-lightWhite text-sm mb-2 leading-7 ">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quaerat
            Architecto Nesciunt Aut Sapiente Quis Inventore Quam Vitae Quod
            Illum Incidunt.
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Discount;
