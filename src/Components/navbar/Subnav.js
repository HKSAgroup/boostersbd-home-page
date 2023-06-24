import React, { useState } from "react";
import Modalmenu from "./Modalmenu";
import { TbMenu2 } from "react-icons/tb";
import logo from "../../assets/img/icon/logo2.png";
const Subnav = () => {
  const [menu, setMenu] = useState(false);
  const [showNav, setShownav] = useState(false);
  const change = () => {
    if (window.scrollY >= 50) {
      setShownav(true);
    } else {
      setShownav(false);
    }
  };
  window.addEventListener("scroll", change);
  return (
    <div className={`bg-white ${showNav ? "border-b-2" : ""}`}>
      <div
        className={`container w-full md:hidden  flex justify-between  h-20  py-5 `}
      >
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="">
          {menu ? (
            ""
          ) : (
            <TbMenu2
              className="cursor-pointer text-3xl"
              onClick={() => setMenu(true)}
            />
          )}
          {menu ? <Modalmenu setMenu={setMenu} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Subnav;
