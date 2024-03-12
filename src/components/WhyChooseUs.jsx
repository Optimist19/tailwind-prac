import pic1 from "../img/u-1.png";
import pic2 from "../img/u-2.png";
import pic3 from "../img/u-3.png";
import pic4 from "../img/u-4.png";

function WhyChooseUs() {
  return (
    <section id="why" className="why-bg w-[100%] text-white why-choose">
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center flex-col gap-20">
          <div className="">
            <h2 className="text-4xl font-bold text-center why-choose-us">
              WHY{" "}
              <span className="underline underline-offset-8 decoration-red-800">
                CHOOSE
              </span>{" "}
              US
            </h2>
          </div>
          <div className="flex justify-center items-center	item-con">
            <div className="flex flex-col justify-center items-center gap-4 item">
              <div className="w-[12%]">
                <img src={pic1} alt="" className="w-[100%]" />
              </div>
              <p className="title">QUALITY EQUIPMENT</p>
              <p className="text-center w-[40%]">
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 item">
              <div className="w-[12%]">
                <img src={pic2} alt="" className="w-[100%]" />
              </div>
              <p className="title">NUTRITION</p>
              <p className="text-center w-[40%]">
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4  item">
              <div className="w-[12%]">
                <img src={pic3} alt="" className="w-[100%]" />
              </div>
              <p className="title">HEALTHY DIET PLAN</p>
              <p className="text-center w-[40%]">
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 item">
              <div className="w-[12%]">
                <img src={pic4} alt="" className="w-[100%]" />
              </div>
              <p className="title">SPORT TRAINING</p>
              <p className="text-center w-[40%]">
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
