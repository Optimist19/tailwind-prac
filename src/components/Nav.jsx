import search from "../img/search-icon.png";
import menu from "../img/menu.png";
import { useState } from "react";

import { Link } from "react-scroll";

function Nav() {
  const [toggle, setToggle] = useState(false);

  function toggleFtn() {
    setToggle(!toggle);
  }

  return (
    <>
      <nav className="flex justify-between items-center px-4 py-4">
        <section>
          <h1 className="text-3xl">NEOGYM</h1>
        </section>

        <section>
          <ul className="flex justify-between items-center gap-x-8">
            <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className="ga pb-4 underline decoration-red-800 decoration-[4px] underline-offset-[20px] cursor-pointer">
              HOME
            </Link>
            <li className="ga pb-4 hover:underline decoration-red-800 decoration-[4px] underline-offset-[20px] cursor-pointer">
              WHY US
            </li>

            <Link
                to="why"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className="ga pb-4 hover:underline decoration-red-800 decoration-[4px] underline-offset-[20px] cursor-pointer">
              TRAINERS
            </Link>
            <Link
                to="trainers"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className="ga pb-4 hover:underline decoration-red-800 decoration-[4px] underline-offset-[20px] cursor-pointer">
              CONTACT US
            </Link>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className="ga pb-4  cursor-pointer">
              <img src={search} alt="" />
            </Link>
          </ul>
        </section>
      </nav>

      <nav className="mobile-nav flex justify-between  px-4 py-4">
        <section>
          <div className="w-12" onClick={toggleFtn}>
            <img src={menu} alt="" className="w-[100%] cursor-pointer" />
          </div>
        </section>

        {toggle && (
          <section>
            <ul className="flex justify-between items-center gap-x-8">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="ga pb-4 underline decoration-red-800 decoration-[4px] underline-offset-[10px] cursor-pointer">
                HOME
              </Link>
              <Link
                to="why"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className="ga pb-4 hover:underline decoration-red-800 decoration-[4px] underline-offset-[10px] cursor-pointer">
                WHY US
              </Link>

              <Link
                to="trainers"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className="ga pb-4 hover:underline decoration-red-800 decoration-[4px] underline-offset-[10px] cursor-pointer">
                TRAINERS
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} className="ga pb-4 hover:underline decoration-red-800 decoration-[4px] underline-offset-[6px] cursor-pointer">
                CONTACT US
              </Link>
              <li className="ga pb-4  cursor-pointer">
                <img src={search} alt="" />
              </li>
            </ul>
          </section>
        )}
      </nav>
    </>
  );
}

export default Nav;
