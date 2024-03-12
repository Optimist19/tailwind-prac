import exc from "../img/contact-img.jpg";
import Footer from "./Footer";

function Message() {
  return (
    <section id="contact" className="message-con">
      <div className="h-full bg-sky-950 flex w-[100%] gap-8 image-contact">
        <div className="w-[50%] img-con">
          <img src={exc} alt="" className="w-[100%] min-w-40" />
        </div>
        <div>
          <div className="flex flex-col justify-center gap-8 form-con">
            <p className="text-white text-4xl font-bold pt-7">Contact Us</p>
            <div className="flex flex-col justify-center gap-8">
              <input
                type="text"
                placeholder="Name"
                className="pt-4 pb-4 w-[35vw] pl-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="pt-4 pb-4 w-[35vw] pl-2"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="pt-4 pb-4 w-[35vw] pl-2"
              />
              <textarea
                rows="8"
                cols="50"
                placeholder="Message"
                className="pt-4 pb-4 w-[35vw] pl-2"
              />
            </div>
          </div>
          <button className="bg-orange-800 text-white px-12 py-4 mt-3 cursor-pointer">SEND</button>
        </div>
      </div>
	  <Footer />
    </section>
  );
}

export default Message;
