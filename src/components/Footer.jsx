import location from "../img/location-white.png";
import telephone from "../img/telephone-white.png";
import envelope from "../img/envelope-white.png";

function Footer() {
  return (
    <footer className=" bg-blue-950">
      <div className="footer flex justify-between py-8 w-[50%] text-white items-center mx-auto">
        <div className="cursor-pointer flex flex-col justify-center items-center gap-3">
          <div className="w-4">
            <img src={location}  className="w-[100%]" alt="" />
          </div>
          <p>Location</p>
        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center gap-3">
          <div className="w-5">
            <img src={telephone} className="w-[100%]"  alt="" />
          </div>
          <p className="p">+02 1234567890</p>
        </div>
        <div className="cursor-pointer flex flex-col justify-center items-center gap-3">
          <div className="w-5">
            <img src={envelope}  className="w-[100%]" alt="" />
          </div>
          <p>mail@domain.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
