import Nav from "./Nav";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ContactUs() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div>
      {/* <Slider {...settings}> */}
      <div className="contact-us-bg text-white w-[100%]">
        <Nav />
        <section>
          <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col  items-center ">
              <p className="text-[30px] font-bold  fitness">FITNESS</p>
              <p className="text-[34px] font-bold leading-12 training">TRAINING</p>
              <p className="text-[42px] font-bold leading-relaxed neogym">NEOGYM</p>
              <p className="text-center w-2/3 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse .
              </p>
              <button className="border-solid border-indigo-50 border mt-4 px-8 py-2">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* </Slider> */}
    </div>
  );
}

export default ContactUs;
