import t1 from "../img/t1.jpg";
import t2 from "../img/t2.jpg";
import t3 from "../img/t3.jpg";

import facebook from "../img/facebook-logo.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram-logo.png";

function OurGym() {
  return (
    <section id="trainers" className="trainer text-white w-[100%] our-gym">
      <div className="flex flex-col justify-center items-center gap-9 h-screen">
        <div>
          <h3 className="text-3xl font-bold our-gym-trainer">OUR GYM TRAINERS</h3>
        </div>
        <div>
          <div className="flex items-center gap-4 social-media">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold mb-3">Smirth Jon</p>
              <div className=" w-[25vw] t-image">
                <img src={t1} alt="" className="w-[100%] rounded-lg" />
              </div>

              <div className="flex items-center justify-between w-[60%] bg-white pt-2 pb-2 pr-4 pl-4 rounded-t-lg rounded-b-lg  -mt-5 ">
                <div className="w-2">
                  <img
                    src={facebook}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>
                <div className="w-4">
                  <img
                    src={twitter}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>
                <div className="w-4">
                  <img
                    src={instagram}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold mb-3">Jane Doe</p>
              <div className=" w-[25vw] t-image">
                <img src={t2} alt="" className="w-[100%] rounded-lg" />
              </div>

              <div className="flex items-center justify-between w-[60%] bg-white pt-2 pb-2 pr-4 pl-4 rounded-t-lg rounded-b-lg  -mt-5">
                <div className="w-2">
                  <img
                    src={facebook}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>
                <div className="w-4">
                  <img
                    src={twitter}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>
                <div className="w-4">
                  <img
                    src={instagram}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold mb-3">Alex Den</p>
              <div className=" w-[25vw] t-image">
                <img src={t3} alt="" className="w-[100%] rounded-lg" />
              </div>

              <div className="flex items-center justify-between w-[60%] bg-white pt-2 pb-2 pr-4 pl-4 rounded-t-lg rounded-b-lg  -mt-5 ">
                <div className="w-2">
                  <img
                    src={facebook}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>

                <div className="w-4">
                  <img
                    src={twitter}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>
                <div className="w-4">
                  <img
                    src={instagram}
                    alt=""
                    className="cursor-pointer w-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurGym;
