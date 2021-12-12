import Button from "../../common/button";
import pic1 from "../../../assists/images/pic-1.png";

const Testimonials = () => {
  return (
    <div className="bg-black1 text-white font-Nunito">
      <div className="flex gap-6 w-10/12 mx-auto pt-20">
        <div className="w-2/5">
          <div className="text-red1 text-xl">Testimonials</div>
          <div className="text-2xl font-semibold leading-16">
            What Our Clients Says
          </div>
          <div className="text-lightWhite text-sm leading-7 font-semibold mb-5">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nobis
            Voluptas Praesentium Asperiores Fugiat, Excepturi Odit Obcaecati A
            Voluptatibus Earum Quisquam?
          </div>
          <Button />
        </div>
        <div className="w-3/5 ">
          <div className="flex gap-2">
            {[1, 2].map((item) => {
              return (
                <div
                  key={item}
                  style={{
                    background:
                      "linear-gradient(130deg, #111 93%, transparent 7%)",
                  }}
                  className="w-1/2 py-6 [background: linear-gradient(130deg, #f00 93%, transparent 7%]"
                >
                  <div className="w-11/12  mx-auto space-y-3">
                    <div className="w-2/3 text-sm font-semibold text-lightWhite leading-6">
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                      Accusamus, Quo.
                    </div>
                    <div className="flex">
                      <div className="w-2/3 flex gap-2">
                        <div>
                          <img
                            className="w-12 rounded-full"
                            src={pic1}
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="text-white text-lg font-semibold">
                            John Doe
                          </div>
                          <div className="text-red1 text-sm">Designer</div>
                        </div>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="50"
                          height="50"
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="none"
                            stroke-width="1"
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            stroke-miterlimit="10"
                            stroke-dasharray=""
                            stroke-dashoffset="0"
                            font-family="none"
                            font-weight="none"
                            font-size="none"
                            text-anchor="none"
                          >
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#ff0000">
                              <path d="M55.04,17.2c-26.5525,0 -48.16,21.6075 -48.16,48.16v75.68h68.8v-68.8h-37.84v-6.88c0,-13.27625 7.71313,-24.08 17.2,-24.08h3.44v-24.08zM144.48,17.2c-26.5525,0 -48.16,21.6075 -48.16,48.16v75.68h68.8v-68.8h-37.84v-6.88c0,-13.27625 7.71313,-24.08 17.2,-24.08h3.44v-24.08z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
